import {
  LineChart,
  Users,
  Sparkles,
  AlertTriangle,
  BarChart3,
  Database,
  Target,
  Shield,
  Heart,
  Zap,
  Layers,
  RefreshCw,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';
import { mergeProcessWithOverrides } from "../common-functions";
import { business_process, streamlining_development } from "@/config/constant";

export const predictive_analytics_content: ContentItem[] = [
  {
    title: "Demand & Sales Forecasting",
    description:
      "Predict future demand, sales, and inventory needs using historical data and machine learning, helping you plan with confidence instead of guesswork.",
    icon: LineChart,
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Identify which customers are likely to leave before they do, so your team can step in with the right offer or outreach at the right time.",
    icon: Users,
  },
  {
    title: "Recommendation Engines",
    description:
      "Build AI-driven recommendation systems that suggest the right product, content, or next action to each customer, increasing engagement and revenue.",
    icon: Sparkles,
  },
  {
    title: "Anomaly & Fraud Detection",
    description:
      "Automatically flag unusual transactions, behavior, or system activity that could indicate fraud, errors, or operational issues before they escalate.",
    icon: AlertTriangle,
  },
  {
    title: "Business Intelligence Dashboards",
    description:
      "Turn raw data into clear, interactive dashboards that give your leadership team real-time visibility into the metrics that matter most.",
    icon: BarChart3,
  },
  {
    title: "Data Pipeline & Model Deployment",
    description:
      "We build the data pipelines and infrastructure needed to keep your predictive models running reliably on live, up-to-date data.",
    icon: Database,
  },
];

export const predictive_analytics_services: FeatureItem[] = [
  {
    title: "Data-Driven Decision Making",
    subtitle: "Replace Guesswork With Evidence",
    description:
      "Give your leadership team predictive insights they can act on, instead of relying purely on gut feel or backward-looking reports.",
    icon: Target,
  },
  {
    title: "Early Risk Detection",
    subtitle: "Catch Problems Before They Grow",
    description:
      "Predictive models can flag emerging risks, from customer churn to fraud, early enough for your team to actually do something about them.",
    icon: Shield,
  },
  {
    title: "Improved Customer Retention",
    subtitle: "Keep the Customers You Have",
    description:
      "By spotting at-risk customers early, you can act before they churn, protecting revenue that's far more expensive to win back later.",
    icon: Heart,
  },
  {
    title: "Personalized Recommendations",
    subtitle: "The Right Offer at the Right Time",
    description:
      "AI-driven recommendations help customers discover what they actually want, increasing conversion and average order value.",
    icon: Sparkles,
  },
  {
    title: "Real-Time Insights",
    subtitle: "Up-to-the-Minute Visibility",
    description:
      "We build pipelines that keep your dashboards and models current, so decisions are based on today's data, not last quarter's.",
    icon: Zap,
  },
  {
    title: "Scalable Data Infrastructure",
    subtitle: "Built to Grow With Your Business",
    description:
      "Our data pipelines and models are designed to handle increasing data volume as your business grows, without a costly rebuild.",
    icon: Layers,
  },
];

const predictive_analytics_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Data & Opportunity Discovery",
    description:
      "We review the data you already collect to identify where predictive analytics can have the clearest, most measurable business impact.",
  },
  {
    id: "innovation-and-design",
    title: "Model & Dashboard Design",
    description:
      "We design the predictive models and reporting dashboards around the specific business questions your team needs answered.",
  },
  {
    id: "full-cycle-product-development",
    title: "Build & Deploy",
    description:
      "We build the data pipeline, train and validate the model, and deploy it so predictions and dashboards are available where your team works.",
  },
  {
    id: "product-growth-and-support",
    title: "Retrain & Improve",
    description:
      "We monitor model accuracy over time and retrain on fresh data, keeping predictions reliable as your business and market evolve.",
  },
];

export const predictive_analytics_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  predictive_analytics_streamlining_overrides
);

const predictive_analytics_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We assess your available data sources and quality, then define the specific predictions or insights that will move the needle for your business.",
  },
  {
    id: "code",
    title: "Model Development",
    description:
      "Our data science team builds, trains, and validates models using proven statistical and machine learning techniques suited to your data.",
  },
];

export const predictive_analytics_business_process = mergeProcessWithOverrides(
  business_process,
  predictive_analytics_business_overrides
);
