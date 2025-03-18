import { v } from "convex/values";
import { mutation } from "./_generated/server";

//
export const generateUploadUrl = mutation(async(ctx)=>{
    const identity = ctx.auth.getUserIdentity();
    if(!identity){
        throw new Error("Unautorized")
    }
    return await ctx.storage.generateUploadUrl();
});



export const createPost = mutation({
    args:{
        caption: v.optional(v.string()),
        storageId: v.id("_storage"),
    },
    handler: async(ctx, args)=>{
    const identity = ctx.auth.getUserIdentity();
    if(!identity){
        throw new Error("Unautorized")
    }

 
})