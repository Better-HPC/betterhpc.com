import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

interface ExpertiseCard {
  icon: string;
  iconColor: string;
  borderHover: string;
  title: string;
  description: string;
}

@Component({
  selector: "app-about-section",
  templateUrl: "about-section.html",
  imports: [CommonModule],
})
export class AboutSection {
  expertiseCards: ExpertiseCard[] = [
    {
      icon: "fa-cogs",
      iconColor: "bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20",
      borderHover: "hover:border-blue-500/30",
      title: "Operational Expertise",
      description: "Years of production HPC experience help guide every architectural detail."
    },
    {
      icon: "fa-layer-group",
      iconColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20",
      borderHover: "hover:border-cyan-500/30",
      title: "Scalable Software",
      description: "Designed and tested for complex, demanding operational environments."
    },
    {
      icon: "fa-flask",
      iconColor: "bg-violet-500/10 border-violet-500/20 text-violet-400 group-hover:bg-violet-500/20",
      borderHover: "hover:border-violet-500/30",
      title: "Research-Driven",
      description: "Direct input from HPC admins and users drives a high quality user experience."
    }
  ];
}
