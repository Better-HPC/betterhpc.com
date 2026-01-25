import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

type SoftwareStatus = "success" | "primary" | "warning";

interface SoftwareItem {
  name: string;
  icon: string;
  href: string;
  statusSeverity: SoftwareStatus;
  statusText: string;
  description: string;
}

@Component({
  selector: "app-software-section",
  imports: [CommonModule],
  templateUrl: "software-section.html",
})
export class SoftwareSection {
  softwareItems: SoftwareItem[] = [
    {
      name: "Keystone",
      icon: "fa-code",
      href: "https://keystone.betterhpc.com",
      statusSeverity: "success",
      statusText: "Early Access",
      description: "A unified platform that empowers system admins, researchers, and leadership to maximize HPC resources with intuitive controls and real-time insights.",
    }
  ];

  getStatusClasses(status: SoftwareStatus): string {
    const classes: Record<SoftwareStatus, string> = {
      success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      primary: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      warning: "bg-amber-500/10 text-amber-400 border border-amber-500/20"
    };
    return classes[status];
  }
}
