import {mutation} from './_generated/server'
import {v} from 'convex/values';

export const createUser = mutation({
  args:{
    username: v.string(),
    fullname : v.string(),
    image : v.string(),
    bio : v.optional(v.string()),
    email : v.string(), 
    clerkId : v.string()
  },

  //context - ctx is used to intract withdatabase and check authentication 
  //by args can intracction with args 

  handler: async(ctx , args) => {
    //check user exit or not 

   const existingUser =await ctx.db.query("users")
    .withIndex('by_clerk_id', (q)=> q.eq("clerkId", args.clerkId))
    .first()

    if(existingUser) return ;

    //create user in database

    await ctx.db.insert("users", {
      username : args.username,
      fullname : args.fullname, 
      email : args.email, 
      bio : args.bio, 
      image : args.image, 
      clerkId : args.clerkId, 
      followers : 0,
      following :0, 
      posts: 0

    })
  }
})