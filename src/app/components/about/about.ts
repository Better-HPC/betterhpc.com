import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

interface ExpertiseCard {
  icon: string;
  title: string;
  description: string;
  iconStyle?: string;
  cardStyle?: string;
}

/**
 * Page section with a contact form.
 * Collects user information and inquiry details for sales outreach.
 */
@Component({
  selector: "app-about",
  templateUrl: "about.html",
  imports: [CommonModule],
})
export class About {
  protected expertiseCards: ExpertiseCard[] = [
    {
      icon: "fa-cogs",
      title: "Operational Expertise",
      description: "Years of operational experience guiding every architectural detail.",
      iconStyle: "bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20",
      cardStyle: "hover:border-blue-500/30",
    },
    {
      icon: "fa-check-circle",
      title: "Quality-Driven",
      description: "Designed and tested for demanding operational environments.",
      iconStyle: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20",
      cardStyle: "hover:border-cyan-500/30",
    },
    {
      icon: "fa-user",
      title: "User Focused",
      description: "Every product built with direct input from HPC admins and users.",
      iconStyle: "bg-violet-500/10 border-violet-500/20 text-violet-400 group-hover:bg-violet-500/20",
      cardStyle: "hover:border-violet-500/30",
    }
  ];
}
