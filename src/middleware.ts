import {  clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Definiere öffentliche Routen
const isPublicRoute = createRouteMatcher(["/"]);

// Definiere geschützte Routen
const isProtectedRoute = createRouteMatcher(["/credits(.*)"]);

export default clerkMiddleware((auth, req) => {
  // Überprüfen, ob die Route öffentlich ist
  if (isPublicRoute(req)) {
    return; // Öffentlich, keine Authentifizierung erforderlich
  }

  // Überprüfen, ob die Route geschützt ist
  if (isProtectedRoute(req)) {
    auth().protect(); // Schützt die Route
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};


