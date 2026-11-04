import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { Section } from "@layout/section/section";

type SoftwareStatus = "success" | "primary" | "warning";

interface SoftwareItem {
  name: string;
  icon: string;
  route: string;
  statusSeverity: SoftwareStatus;
  statusText: string;
  description: string;
}

// Hoisted to module scope so the static content is allocated once rather than per instance
const STATUS_CLASSES: Record<SoftwareStatus, string> = {
  success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  primary: "bg-brand-50 text-brand-700 border border-brand-200",
  warning: "bg-amber-50 text-amber-700 border border-amber-200",
};

const SOFTWARE_ITEMS: readonly SoftwareItem[] = [
  {
    name: "Keystone",
    icon: "fa-cubes",
    route: "/keystone",
    statusSeverity: "success",
    statusText: "Early Access",
    description:
      "A unified platform that empowers system admins, researchers, and leadership to maximize HPC resources with intuitive controls and real-time insights.",
  },
];

/** Section previewing Better HPC software products with links to their pages. */
@Component({
  selector: "app-about-software",
  imports: [RouterLink, Section],
  templateUrl: "about-software.html",
})
export class AboutSoftware {
  protected readonly statusClasses = STATUS_CLASSES;
  protected readonly softwareItems = SOFTWARE_ITEMS;
}
