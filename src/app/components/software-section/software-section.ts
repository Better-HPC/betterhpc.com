import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

type SoftwareStatus = "available" | "beta" | "development";

interface SoftwareItem {
  name: string;
  icon: string;
  description: string;
  status: SoftwareStatus;
  href: string;
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
      icon: "fa-cube",
      description: "A unified platform that empowers sys admins, researchers, and leadership to maximize HPC resources with intuitive tools, real-time insights, and seamless collaboration.",
      status: "development",
      href: "#"
    }
  ];

  getStatusLabel(status: SoftwareStatus): string {
    const labels: Record<SoftwareStatus, string> = {
      available: "Available",
      beta: "Beta",
      development: "In Development"
    };
    return labels[status];
  }

  getStatusClasses(status: SoftwareStatus): string {
    const classes: Record<SoftwareStatus, string> = {
      available: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      beta: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      development: "bg-amber-500/10 text-amber-400 border border-amber-500/20"
    };
    return classes[status];
  }
}
