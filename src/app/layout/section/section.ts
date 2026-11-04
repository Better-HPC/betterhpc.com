import { Component, computed, input } from "@angular/core";

/**
 * Background style variants for page sections.
 *
 * - "light"    White background with dark text (default)
 * - "muted"    Very subtle blue-tinted wash, for alternating light sections
 * - "dark"     Dark slate background with light text
 * - "hero"     Deep blue gradient background for hero/banner areas
 * - "none"     No background styling applied; inherits from parent
 */
export type SectionVariant = "light" | "muted" | "dark" | "hero" | "none";

// Hoisted to module scope so the lookup is not rebuilt on every evaluation
const VARIANT_CLASSES: Record<SectionVariant, string> = {
  light: "bg-white text-slate-800",
  muted: "bg-gradient-to-b from-brand-50/60 via-white to-white text-slate-800",
  dark: "bg-slate-900 text-white",
  hero: "hero-gradient text-white",
  none: "",
};

/**
 * Reusable page section with optional header (label, title, subtitle)
 * and configurable background variant. Content is projected via ng-content.
 */
@Component({
  selector: "app-section",
  templateUrl: "section.html",
})
export class Section {
  /** HTML id attribute for anchor linking. */
  readonly sectionId = input<string>();

  /** Small uppercase label above the title (e.g., "About Us"). */
  readonly label = input<string>();

  /** Main section heading. */
  readonly title = input<string>();

  /** Supporting text below the title. */
  readonly subtitle = input<string>();

  /** Background style variant. */
  readonly variant = input<SectionVariant>("light");

  /** Whether to center the header text. */
  readonly centerHeader = input(true);

  /** Maximum width class for the content container. */
  readonly maxWidth = input("max-w-7xl");

  /** True when the section sits on a dark surface. */
  protected readonly isDark = computed(() => this.variant() === "dark" || this.variant() === "hero");

  /** True when the section renders a header block. */
  protected readonly hasHeader = computed(() => Boolean(this.label() || this.title() || this.subtitle()));

  /** CSS classes derived from the selected variant. */
  protected readonly variantClasses = computed(() => VARIANT_CLASSES[this.variant()]);

  /** CSS classes for the section title based on variant. */
  protected readonly titleClasses = computed(() => this.isDark() ? "text-white" : "text-ink");

  /** CSS classes for the subtitle based on variant. */
  protected readonly subtitleClasses = computed(() => this.isDark() ? "text-slate-300" : "text-slate-500");

  /** CSS classes for the label based on variant. */
  protected readonly labelClasses = computed(() => this.isDark() ? "text-accent-400" : "text-brand-600");
}
