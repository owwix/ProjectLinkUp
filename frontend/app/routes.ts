import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("login","routes/login.tsx"),
    route("signup","routes/signup.tsx"),
    route("forgotpassword","routes/forgotpassword.tsx"),
    route("dashboard","routes/dashboard.tsx")
    ] satisfies RouteConfig;
