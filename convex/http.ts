// npm i svix // used to verify webhook 

import { httpRouter, HttpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import {Webhook} from 'svix'
import {api} from './_generated/api'

const http = httpRouter();


//1- we need to make sure that the webhook event is coming from clerk 
//2 if so , we will listem for the "user.created" event
//3 we will save the user to the database


http.route({
    path: '/clerk-webhook',
    method:"POST",
    handler: httpAction(async(ctx, request)=>{
        const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
        if(!webhookSecret){
            throw new Error("missing clerk webhook secret enviroment variale")

        }

        //check headers 
        const svix_id = request.headers.get("svix-id");
        const svix_signature= request.headers.get("svix-signature");
        const svix_timestamp  = request.headers.get("svix-timestamp");

        if(!svix_id || !svix_signature || !svix_timestamp){
            return new Response("Error occured -- no svix headers", {
                status:400,
            });

        }

        const payload = await request.json();
        const body = JSON.stringify(payload);

        const wh = new Webhook(webhookSecret);
        let event: any
        

        //varify the webhoookk
        try {
            event = wh.verify(body, {
                "svix-id": svix_id, 
                "svix-signature" : svix_signature,
                "svix-timestamp" : svix_timestamp,
            }) as any;
        } catch (error) {
            console.error("Error verifying webhook : ", error);
            return new Response("Error Occured", {status:400});

        }
        
        //save user to the databwse

        const eventType = event.type;

        if(eventType==="user.created"){
            const {id, email_addresses, first_name, last_name, image_url} = event.data;
            const email = email_addresses[0].email_address;
            const name = `${first_name || ""} ${last_name || ""}`.trim();

            
            try {
                await ctx.runMutation(api.users.createUser,{
                    email, 
                    fullname:name, 
                    image:image_url, 
                    clerkId: id,
                    username : email.split("@")[0],
                    })
            } catch (error) {
                console.log("error createing user : " , error);
                return new Response("Error creating user ", {status:500})
            }
        }

        return new Response("webhook process successufully", {status:200})
    })  
})

export default http;