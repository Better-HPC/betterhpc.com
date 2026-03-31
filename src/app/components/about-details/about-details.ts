import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SectionComponent } from "../section/section";

interface ExpertiseCard {
  icon: string;
  title: string;
  description: string;
  accent: string;
}

/** Company background and expertise cards section. */
@Component({
  selector: "app-about-details",
  imports: [CommonModule, SectionComponent],
  templateUrl: "about-details.html",
})
export class AboutDetails {
  protected expertiseCards: ExpertiseCard[] = [
    {
      icon: "fa-cogs",
      title: "Operational Expertise",
      description: "Years of operational experience guiding every architectural detail.",
      accent: "indigo",
    },
    {
      icon: "fa-check-circle",
      title: "Quality-Driven",
      description: "Designed and tested for demanding operational environments.",
      accent: "cyan",
    },
    {
      icon: "fa-user",
      title: "User Focused",
      description: "Every product built with direct input from HPC admins and users.",
      accent: "purple",
    },
  ];
}
