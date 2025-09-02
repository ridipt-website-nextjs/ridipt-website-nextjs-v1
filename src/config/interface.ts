
// Base interface for common properties
interface BaseFeatureItem {
  title: string;
  subtitle: string;
  description: string;
}

// Interface for items with icon (image should be optional/undefined)
interface FeatureItemWithIcon extends BaseFeatureItem {
  icon: React.ComponentType<any>;
  image?: never; // This ensures image cannot be provided when icon is present
}

// Interface for items with image (icon should be optional/undefined)
interface FeatureItemWithImage extends BaseFeatureItem {
  image: any;
  icon?: never; // This ensures icon cannot be provided when image is present
}

// Union type that ensures either icon OR image is provided, but not both or neither
export type FeatureItem = FeatureItemWithIcon | FeatureItemWithImage;


// types/job.ts
import { LucideIcon } from 'lucide-react';

export interface JobSalary {
  min: number;
  max: number;
  currency: string;
  period: string;
  commission?: string;
}

export interface JobExperience {
  level: string;
  yearsRequired: string;
  specificExperience: string[];
}

export interface JobEducation {
  degree: string;
  fields: string[];
  alternatives?: string;
  preferred?: string;
  certifications?: string;
}

export interface JobWorkEnvironment {
  culture: string;
  teamSize: string;
  reportingTo: string;
  collaboratesWith: string[];
  workStyle: string;
}

export interface JobData {
  id: string;
  name: string;
  icon: LucideIcon;
  title: string;
  description: string;
  detailedDescription: string;
  type: string;
  location: string;
  department: string;
  salary?: JobSalary;
  experience?: JobExperience;
  education?: JobEducation;
  responsibilities: string[];
  requiredSkills?: string[];
  technicalSkills?: string[];
  qualifications: string[];
  workEnvironment?: JobWorkEnvironment;
  growthOpportunities?: string[];
  benefits?: string[];
  perks: string[];
  challenges?: string[];
}
