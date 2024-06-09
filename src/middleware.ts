import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


// para proteger la ruta / que es la home y todas las rutas de credits
const isProtectedRoute = createRouteMatcher(["/", "/credits(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
