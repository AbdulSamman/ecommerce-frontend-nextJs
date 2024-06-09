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



// import {  clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


// // para proteger la ruta / que es la home y todas las rutas de credits
// const isProtectedRoute = createRouteMatcher(["/", "/credits(.*)"]);



// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();

// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
