import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SectionComponent } from "../section/section";

type FeatureStatus = "available" | "pending";

interface Feature {
  text: string;
  status: FeatureStatus;
}

interface StakeholderCard {
  title: string;
  subtitle: string;
  icon: string;
  gradient: string;
  features: Feature[];
}

/** Section displaying Keystone features grouped by stakeholder role. */
@Component({
  selector: "app-features",
  imports: [CommonModule, SectionComponent],
  templateUrl: "features.html",
})
export class Features {
  private statusConfig: Record<FeatureStatus, { bg: string; icon: string }> = {
    available: { bg: "bg-emerald-500", icon: "fa-check" },
    pending: { bg: "bg-slate-400", icon: "fa-circle" },
  };

  protected stakeholders: StakeholderCard[] = [
    {
      title: "System Administrators",
      subtitle: "Infrastructure & Operations",
      icon: "fa-user-shield",
      gradient: "from-cyan-500 to-blue-600",
      features: [
        { text: "Automated Resource Provisioning", status: "available" },
        { text: "Robust Platform Monitoring / Metrics", status: "available" },
        { text: "Comprehensive REST API", status: "available" },
        { text: "Official Python Client", status: "available" },
        { text: "Prebuilt Deployment Recipes", status: "available" },
        { text: "LDAP Integration", status: "available" },
        { text: "SAML 2.0 Integration", status: "pending" },
      ],
    },
    {
      title: "HPC Users",
      subtitle: "Researchers & Scientists",
      icon: "fa-users",
      gradient: "from-indigo-500 to-purple-600",
      features: [
        { text: "Self Managed Teams and Resources", status: "available" },
        { text: "Customizable Status Alerts", status: "available" },
        { text: "Funding / Publication Tracking", status: "available" },
        { text: "Real Time HPC Job Tracking", status: "pending" },
        { text: "Job Performance and Efficiency Metrics", status: "pending" },
        { text: "Cluster Resource Explorer", status: "pending" },
      ],
    },
    {
      title: "Center Leadership",
      subtitle: "Strategy & Governance",
      icon: "fa-chart-line",
      gradient: "from-rose-500 to-orange-500",
      features: [
        { text: "Fully Auditable Record Keeping", status: "available" },
        { text: "ROI & Productivity Analytics", status: "pending" },
        { text: "AI Driven Research Summaries", status: "pending" },
        { text: "Resource Consumption Tracking", status: "pending" },
        { text: "Policy Based Automation", status: "pending" },
        { text: "Customizable HPC Resource Definitions", status: "pending" },
      ],
    },
  ];

  protected getStatusConfig(status: FeatureStatus) {
    return this.statusConfig[status];
  }
}
