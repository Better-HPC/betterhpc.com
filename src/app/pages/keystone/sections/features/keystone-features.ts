import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SectionComponent } from "../../../../layout/section/section";

type FeatureStatus = "available" | "pending";

interface Feature {
  text: string;
  status: FeatureStatus;
}

interface StakeholderCard {
  title: string;
  subtitle: string;
  icon: string;
  features: Feature[];
}

/** Section displaying Keystone features grouped by stakeholder role. */
@Component({
  selector: "app-keystone-features",
  imports: [CommonModule, SectionComponent],
  templateUrl: "keystone-features.html",
})
export class KeystoneFeatures {
  private statusConfig: Record<FeatureStatus, { bg: string; icon: string }> = {
    available: {bg: "bg-emerald-500", icon: "fa-check"},
    pending: {bg: "bg-slate-300", icon: "fa-minus"},
  };

  protected stakeholders: StakeholderCard[] = [
    {
      title: "System Administrators",
      subtitle: "Infrastructure & Operations",
      icon: "fa-user-shield",
      features: [
        {text: "Automated Resource Provisioning", status: "available"},
        {text: "Robust Platform Monitoring / Metrics", status: "available"},
        {text: "Comprehensive REST API", status: "available"},
        {text: "Official Python Client", status: "available"},
        {text: "Prebuilt Deployment Recipes", status: "available"},
        {text: "LDAP Integration", status: "available"},
        {text: "SAML 2.0 Integration", status: "pending"},
      ],
    },
    {
      title: "HPC Users",
      subtitle: "Researchers & Scientists",
      icon: "fa-flask",
      features: [
        {text: "Self-Managed Teams and Resources", status: "available"},
        {text: "Customizable Status Alerts", status: "available"},
        {text: "Funding / Publication Tracking", status: "available"},
        {text: "Real-Time HPC Job Tracking", status: "pending"},
        {text: "Job Performance and Efficiency Metrics", status: "pending"},
        {text: "Cluster Resource Explorer", status: "pending"},
      ],
    },
    {
      title: "Center Leadership",
      subtitle: "Strategy & Governance",
      icon: "fa-chart-line",
      features: [
        {text: "Fully Auditable Record Keeping", status: "available"},
        {text: "ROI & Productivity Analytics", status: "pending"},
        {text: "AI-Driven Research Summaries", status: "pending"},
        {text: "Resource Consumption Tracking", status: "pending"},
        {text: "Policy-Based Automation", status: "pending"},
        {text: "Customizable HPC Resource Definitions", status: "pending"},
      ],
    },
  ];

  /**
   * Return the icon and background CSS config for a given feature status.
   *
   * @param status The availability status of the feature.
   * @returns An object containing the background colour class and icon class.
   */
  protected getStatusConfig(status: FeatureStatus) {
    return this.statusConfig[status];
  }
}
