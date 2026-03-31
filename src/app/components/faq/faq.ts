import { Component } from "@angular/core";
import { SectionComponent } from "../section/section";

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

/** Expandable FAQ accordion section. */
@Component({
  selector: "app-faq",
  imports: [SectionComponent],
  templateUrl: "faq.html",
})
export class Faq {
  protected faqItems: FaqItem[] = [
    {
      isOpen: false,
      question: "What HPC schedulers does Keystone support?",
      answer:
        "Keystone currently provides full integration with the Slurm scheduler. " +
        "If you're using a different scheduler, reach out and let us know — " +
        "we'd love to explore adding support.",
    },
    {
      isOpen: false,
      question: "How many clusters can I manage from Keystone?",
      answer:
        "Keystone is designed to manage resources across multiple clusters. " +
        "Simply install the cluster agent into the environment you want to manage " +
        "and add it to the Keystone platform settings.",
    },
    {
      isOpen: false,
      question: "What monitoring and observability tools does Keystone integrate with?",
      answer:
        "Keystone provides native integration with Prometheus for real-time " +
        "metrics and dashboards. It also includes comprehensive health " +
        "checks so you can be confident your deployment is running properly.",
    },
    {
      isOpen: false,
      question: "How does Keystone handle authentication?",
      answer:
        "Keystone supports LDAP integration for enterprise authentication, " +
        "along with role-based access controls and fully auditable record keeping.",
    },
    {
      isOpen: false,
      question: "Can I integrate Keystone into my existing workflows?",
      answer:
        "Absolutely! Keystone offers a comprehensive REST API and an " +
        "official Python client, making it easy to incorporate into your " +
        "existing workflows.",
    },
    {
      isOpen: false,
      question: "How is Keystone deployed?",
      answer:
        "Keystone is fully containerized and ships with pre-built " +
        "deployment recipes and comprehensive documentation. We also " +
        "provide configuration files for Prometheus, Alertmanager, and Grafana.",
    },
  ];

  protected toggleFaq(index: number) {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
