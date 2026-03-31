import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

/**
 * Background style variants for page sections.
 *
 * - "light"    White/light-gray background with dark text (default)
 * - "muted"    Subtle gray gradient, good for alternating light sections
 * - "dark"     Dark slate background with light text
 * - "hero"     Deep gradient background for hero/banner areas
 * - "none"     No background styling applied; inherits from parent
 */
export type SectionVariant = "light" | "muted" | "dark" | "hero" | "none";

/**
 * Reusable page section with optional header (label, title, subtitle)
 * and configurable background variant. Content is projected via ng-content.
 */
@Component({
  selector: "app-section",
  templateUrl: "section.html",
  imports: [CommonModule],
})
export class SectionComponent {
  /** HTML id attribute for anchor linking. */
  sectionId = input<string>();

  /** Small uppercase label above the title (e.g., "About Us"). */
  label = input<string>();

  /** Main section heading. */
  title = input<string>();

  /** Supporting text below the title. */
  subtitle = input<string>();

  /** Background style variant. */
  variant = input<SectionVariant>("light");

  /** Whether to center the header text. */
  centerHeader = input(true);

  /** Maximum width class for the content container. */
  maxWidth = input("max-w-7xl");

  /** CSS classes derived from the selected variant. */
  protected get variantClasses(): string {
    const styles: Record<SectionVariant, string> = {
      light: "bg-white text-slate-800",
      muted: "bg-linear-to-br from-slate-50 via-white to-indigo-50 text-slate-800",
      dark: "bg-slate-900 text-white",
      hero: "hero-gradient text-white",
      none: "",
    };
    return styles[this.variant()];
  }

  /** CSS classes for the section title based on variant. */
  protected get titleClasses(): string {
    return this.variant() === "light" || this.variant() === "muted"
      ? "gradient-text"
      : "text-white";
  }

  /** CSS classes for the subtitle based on variant. */
  protected get subtitleClasses(): string {
    return this.variant() === "light" || this.variant() === "muted"
      ? "text-slate-600"
      : "text-slate-300";
  }

  /** CSS classes for the label based on variant. */
  protected get labelClasses(): string {
    return this.variant() === "light" || this.variant() === "muted"
      ? "text-indigo-600"
      : "text-indigo-400";
  }
}
