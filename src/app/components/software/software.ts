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

/** Page section used to highlight company product offerings. */
@Component({
  selector: "app-software",
  imports: [CommonModule],
  templateUrl: "software.html",
})
export class Software {
  protected softwareItems: SoftwareItem[] = [
    {
      name: "Keystone",
      icon: "fa-code",
      href: "https://keystone.betterhpc.com",
      statusSeverity: "success",
      statusText: "Early Access",
      description: "A unified platform that empowers system admins, researchers, and leadership to maximize HPC resources with intuitive controls and real-time insights.",
    }
  ];

  /**
   * Return Tailwind classes for styling status badges.
   *
   * @arg status The displayed feature status.
   * @return CSS classes for styling the status icon.
   */
  protected getStatusClasses(status: SoftwareStatus): string {
    const classes: Record<SoftwareStatus, string> = {
      success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      primary: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      warning: "bg-amber-500/10 text-amber-400 border border-amber-500/20"
    };
    return classes[status];
  }
}
