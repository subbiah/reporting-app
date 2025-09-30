import type { PluginMeta } from "../../host/src/app/plugin-types";
const meta: PluginMeta = {
  name: "Reporting",
  scope: "reporting_app",
  routes: [
    {
      path: "/reports",
      scope: "reporting_app",
      module: "./ReportDashboard",
      title: "Reports",
      permissions: "Admin",
      group: "Analytics",
    },
  ],
};
export default meta;
