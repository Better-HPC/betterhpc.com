import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

interface DashboardStat {
  value: string;
  label: string;
}

// Hoisted to module scope so the static content is allocated once rather than per instance
const DASHBOARD_STATS: readonly DashboardStat[] = [
  {value: "1,247", label: "Active Jobs"},
  {value: "315", label: "Nodes Online"},
  {value: "42", label: "Teams"},
];

/**
 * Hero section for the Keystone product page with headline,
 * call-to-action buttons, and a dashboard preview mockup.
 */
@Component({
  selector: "app-keystone-hero",
  imports: [RouterLink],
  templateUrl: "keystone-hero.html",
})
export class KeystoneHero {
  protected readonly dashboardStats = DASHBOARD_STATS;
}
