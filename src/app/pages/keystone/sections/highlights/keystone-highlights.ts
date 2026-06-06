import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SectionComponent } from "../../../../layout/section/section";

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

/** Section highlighting Keystone's core capabilities. */
@Component({
  selector: "app-keystone-highlights",
  imports: [CommonModule, SectionComponent],
  templateUrl: "keystone-highlights.html",
})
export class KeystoneHighlights {
  protected features: Highlight[] = [
    {
      icon: "fa-tachometer-alt",
      title: "Real-Time Monitoring",
      description: "Live status updates for tracking HPC usage and consumption across teams and clusters.",
    },
    {
      icon: "fa-users-cog",
      title: "Team Management",
      description: "Self-service tools for researchers to manage teams, allocations, and resources with customizable alerts.",
    },
    {
      icon: "fa-shield-alt",
      title: "Enterprise Security",
      description: "LDAP/SAML integration, role-based access, end-to-end logging, and fully auditable record keeping.",
    },
    {
      icon: "fa-code",
      title: "Developer-Friendly",
      description: "Comprehensive REST API, official Python client, and prebuilt deployment recipes for easy administration.",
    },
  ];
}
