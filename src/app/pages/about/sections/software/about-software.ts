import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SectionComponent } from "../../../../layout/section/section";

type SoftwareStatus = "success" | "primary" | "warning";

interface SoftwareItem {
  name: string;
  icon: string;
  route: string;
  statusSeverity: SoftwareStatus;
  statusText: string;
  description: string;
}

/** Section previewing Better HPC software products with links to their pages. */
@Component({
  selector: "app-about-software",
  imports: [CommonModule, RouterLink, SectionComponent],
  templateUrl: "about-software.html",
})
export class AboutSoftware {
  protected softwareItems: SoftwareItem[] = [
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

  /**
   * Return Tailwind CSS classes for a software status badge.
   *
   * @param status The severity level determining badge colour.
   * @returns A string of space-separated Tailwind utility classes.
   */
  protected getStatusClasses(status: SoftwareStatus): string {
    const classes: Record<SoftwareStatus, string> = {
      success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
      primary: "bg-brand-50 text-brand-700 border border-brand-200",
      warning: "bg-amber-50 text-amber-700 border border-amber-200",
    };

    return classes[status];
  }
}
