import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SectionComponent } from "../section/section";

interface Highlight {
  icon: string;
  gradient: string;
  title: string;
  description: string;
}

/** Section highlighting Keystone's core capabilities. */
@Component({
  selector: "app-highlights",
  imports: [CommonModule, SectionComponent],
  templateUrl: "highlights.html",
})
export class Highlights {
  protected features: Highlight[] = [
    {
      icon: "fa-tachometer-alt",
      gradient: "from-cyan-500 to-blue-600",
      title: "Real-Time Monitoring",
      description: "Live dashboards with Prometheus and Grafana integration for cluster health, metrics, and resource utilization.",
    },
    {
      icon: "fa-users-cog",
      gradient: "from-indigo-500 to-purple-600",
      title: "Team Management",
      description: "Self-service tools for researchers to manage teams, allocations, and resources with customizable alerts.",
    },
    {
      icon: "fa-shield-alt",
      gradient: "from-rose-500 to-orange-500",
      title: "Enterprise Security",
      description: "LDAP integration, role-based access, end-to-end logging, and fully auditable record keeping.",
    },
    {
      icon: "fa-code",
      gradient: "from-emerald-500 to-teal-600",
      title: "Developer-Friendly",
      description: "Comprehensive REST API, official Python client, and prebuilt deployment recipes for easy integration.",
    },
  ];
}
