import {
    type RouteConfig,
    index,
    layout,
    prefix,
    route,
} from "@react-router/dev/routes";

export default [
    ...prefix("user", [
        layout("routes/user/user-layout.tsx", [
            route("dashboard", "routes/user/dashboard.tsx"),
            route("analytics", "routes/user/analytics.tsx"),
            route("policy-holders", "routes/user/policy-holders.tsx"),
            route("staff-management", "routes/user/staff-management.tsx"),
            route("audit-logs", "routes/user/audit-logs.tsx"),
            route("settings", "routes/user/settings.tsx"),
        ]),
    ]),
] satisfies RouteConfig;
