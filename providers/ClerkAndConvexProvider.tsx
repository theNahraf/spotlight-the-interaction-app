import { ClerkProvider, ClerkLoaded , useAuth} from '@clerk/clerk-expo'
import { tokenCache } from "@/cache";
// import {ConvexProviderwithClerk} from 'convex/react-clerk'
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import {ConvexReactClient} from 'convex/react';


const convex  = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
    unsavedChangesWarning : false
})

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
console.log("publish key ", publishableKey);


if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}


export default function ClerkAndConvexProvider({children} : {children:React.ReactNode}) {
    return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
      <ClerkLoaded>
        {children}
      </ClerkLoaded>
      </ConvexProviderWithClerk>
      </ClerkProvider>
  )
}