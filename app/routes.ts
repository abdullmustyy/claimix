import {
    type RouteConfig,
    index,
    layout,
    prefix,
    route,
} from "@react-router/dev/routes";

export default [
    ...prefix("user", [
        layout("routes/user/layout.tsx", [
            // Dashboard
            layout("routes/user/dashboard/layout.tsx", [
                ...prefix("dashboard", [
                    index("routes/user/dashboard/index.tsx"),
                    route(
                        ":claimId",
                        "routes/user/dashboard/claims-detail-view.tsx",
                    ),
                ]),
            ]),

            // Analytics
            route("analytics", "routes/user/analytics.tsx"),

            // Policy Holders
            route("policy-holders", "routes/user/policy-holders.tsx"),

            // Staff Management
            route("staff-management", "routes/user/staff-management.tsx"),

            // Audit Logs
            route("audit-logs", "routes/user/audit-logs.tsx"),

            // Settings
            route("settings", "routes/user/settings.tsx"),
        ]),
    ]),
] satisfies RouteConfig;
