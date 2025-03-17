import {defineSchema, defineTable} from 'convex/server'
import {v} from 'convex/values'

export default defineSchema({
    users:defineTable({
        username : v.string(),
        fullname : v.string(),
        email : v.string(),
        bio : v.optional(v.string()),
        image : v.string(),
        followers  : v.number(),
        following : v.number(),
        posts : v.number(),
        clerkId : v.string(),
    }).index("by_clerk_id", ["clerkId"]),

    //get user by clerk id 
    //getuser(123) => username

    posts :  defineTable({
        userId: v.id("users"),
        imageUrl : v.string(),
         storageId : v.id("_storage"), //will be needed when we want to delete a post
         caption : v.optional(v.string()),
         likes: v.number(),
         comments : v.number(),
    }).index("by_user", ["userId"]),

    likes : defineTable({
        userId : v.id("users"),
        postId : v.id("posts"),

    }).index("by_post", ["postId"])
    .index("by_user_and_posts", ["userId", "postId"]),

    comments: defineTable({
        userId : v.id("users"),
        postId : v.id("posts"),
        content : v.string(),
    })
    .index("by_post",["postId"]),

    follows : defineTable({
        followerId : v.id("users"),
        follwingId: v.id("users"),
    }).index("by_follower", ["followerId"])
    .index("by_following", ["follwingId"])
    .index("by_both", ["followerId", "follwingId"]),

    notification : defineTable({
        receiverId : v.id("users"),
        senderId : v.id("users"),
        type : v.union(v.literal("like"), v.literal("comment"), v.literal("follow")),
        postId : v.optional(v.id("posts")),
        commentId : v.optional(v.id("comments")),
    }).index("by_receiver", ["receiverId"]),


    bookmarks:defineTable({
        userId :v.id("users"),
        postId : v.id("posts"),                
    }).index("by_user_and_post", ["userId", "postId"]),


})
