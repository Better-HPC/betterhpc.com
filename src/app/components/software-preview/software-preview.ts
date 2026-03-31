import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SectionComponent } from "../section/section";

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
  selector: "app-software-preview",
  imports: [CommonModule, RouterLink, SectionComponent],
  templateUrl: "software-preview.html",
})
export class SoftwarePreview {
  protected softwareItems: SoftwareItem[] = [
    {
      name: "Keystone",
      icon: "fa-code",
      route: "/keystone",
      statusSeverity: "success",
      statusText: "Early Access",
      description:
        "A unified platform that empowers system admins, researchers, and leadership to maximize HPC resources with intuitive controls and real-time insights.",
    },
  ];

  protected getStatusClasses(status: SoftwareStatus): string {
    const classes: Record<SoftwareStatus, string> = {
      success: "bg-emerald-100 text-emerald-700 border border-emerald-200",
      primary: "bg-indigo-100 text-indigo-700 border border-indigo-200",
      warning: "bg-amber-100 text-amber-700 border border-amber-200",
    };
    return classes[status];
  }
}
