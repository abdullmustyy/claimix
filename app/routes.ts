import {
    type RouteConfig,
    index,
    layout,
    prefix,
    route,
} from "@react-router/dev/routes";

export default [
    ...prefix("user", [
        layout("routes/user/UserLayout.tsx", [
            route("dashboard", "routes/user/Dashboard.tsx"),
            route("policy-holders", "routes/user/PolicyHolders.tsx"),
        ]),
    ]),
] satisfies RouteConfig;
