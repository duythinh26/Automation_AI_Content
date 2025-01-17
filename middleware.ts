import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// By default, clerkMiddleware not protect any routes. All routes are public and must opt-in to protection for routes
export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect() // auth.protect() redirect unauthenticated users to the sign-in route automatically
  })

// createRouteMatcher() is a function that allows to protect multiple routes
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', "/"])

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}