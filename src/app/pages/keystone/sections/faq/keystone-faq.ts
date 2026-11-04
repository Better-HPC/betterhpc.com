import { Component, signal } from "@angular/core";

import { Section } from "@layout/section/section";

interface FaqItem {
  question: string;
  answer: string;
}

// Hoisted to module scope so the static copy is allocated once rather than per instance
const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "What HPC schedulers does Keystone support?",
    answer:
      "Keystone currently provides full integration with the Slurm scheduler. " +
      "If you're using a different scheduler, reach out and let us know — " +
      "we'd love to explore adding support.",
  },
  {
    question: "How many clusters can I manage from Keystone?",
    answer:
      "Keystone is designed to manage resources across multiple clusters. " +
      "Simply install the cluster agent into the environment you want to manage " +
      "and add it to the Keystone platform settings.",
  },
  {
    question: "What monitoring and observability tools does Keystone integrate with?",
    answer:
      "Keystone provides native integration with Prometheus for real-time " +
      "metrics and dashboards. It also includes comprehensive health " +
      "checks so you can be confident your deployment is running properly.",
  },
  {
    question: "How does Keystone handle authentication?",
    answer:
      "Keystone supports LDAP integration for enterprise authentication, " +
      "along with role-based access controls and fully auditable record keeping.",
  },
  {
    question: "Can I integrate Keystone into my existing workflows?",
    answer:
      "Absolutely! Keystone offers a comprehensive REST API and an " +
      "official Python client, making it easy to incorporate into your " +
      "existing workflows.",
  },
  {
    question: "How is Keystone deployed?",
    answer:
      "Keystone is fully containerized and ships with pre-built " +
      "deployment recipes and comprehensive documentation. We also " +
      "provide configuration files for Prometheus, Alertmanager, and Grafana.",
  },
];

/** Expandable FAQ accordion section. */
@Component({
  selector: "app-keystone-faq",
  imports: [Section],
  templateUrl: "keystone-faq.html",
})
export class KeystoneFaq {
  protected readonly faqItems = FAQ_ITEMS;

  private readonly openQuestions = signal<ReadonlySet<string>>(new Set());

  /**
   * Return whether a FAQ entry is currently expanded.
   *
   * @param question The question text identifying the entry.
   * @returns True when the entry is expanded.
   */
  protected isOpen(question: string): boolean {
    return this.openQuestions().has(question);
  }

  /**
   * Toggle the expand/collapse state of a FAQ entry.
   *
   * @param question The question text identifying the entry.
   */
  protected toggleFaq(question: string): void {
    this.openQuestions.update(open => {
      const next = new Set(open);
      if (!next.delete(question)) {
        next.add(question);
      }

      return next;
    });
  }
}
