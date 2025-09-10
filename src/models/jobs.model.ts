import mongoose, { Document, Schema } from "mongoose";

// 1️⃣ Interface for TypeScript
export interface IJob extends Document {
  job_id: string;
  name: string;
  icon?: string; // Store icon name/path instead of React component
  title: string;
  description: string;
  detailedDescription: string;
  type: string;
  location: string;
  department: string;
  salary: {
    min: number;
    max: number;
    currency: string;
    period: string;
  };
  experience: {
    level: string;
    yearsRequired: string;
    specificExperience: string[];
  };
  education: {
    degree: string;
    fields: string[];
    alternatives: string;
  };
  responsibilities: string[];
  requiredSkills: string[];
  technicalSkills: string[];
  qualifications: string[];
  workEnvironment: {
    culture: string;
    teamSize: string;
    reportingTo: string;
    collaboratesWith: string[];
    workStyle: string;
  };
  growthOpportunities: string[];
  benefits: string[];
  perks: string[];
  challenges: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

// 2️⃣ Schema Definition
const jobSchema: Schema = new Schema(
  {
    job_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    icon: { type: String }, // Instead of React component
    title: { type: String, required: true },
    description: { type: String, required: true },
    detailedDescription: { type: String, required: true },
    type: { type: String, required: true },
    location: { type: String, required: true },
    department: { type: String, required: true },
    salary: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
      currency: { type: String, required: true },
      period: { type: String, required: true },
    },
    experience: {
      level: { type: String, required: true },
      yearsRequired: { type: String, required: true },
      specificExperience: [{ type: String }],
    },
    education: {
      degree: { type: String, required: true },
      fields: [{ type: String }],
      alternatives: { type: String },
    },
    responsibilities: [{ type: String }],
    requiredSkills: [{ type: String }],
    technicalSkills: [{ type: String }],
    qualifications: [{ type: String }],
    workEnvironment: {
      culture: { type: String },
      teamSize: { type: String },
      reportingTo: { type: String },
      collaboratesWith: [{ type: String }],
      workStyle: { type: String },
    },
    growthOpportunities: [{ type: String }],
    benefits: [{ type: String }],
    perks: [{ type: String }],
    challenges: [{ type: String }],
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

// 3️⃣ Model Export (re-use existing if already compiled)
const Job = mongoose.models.Job || mongoose.model<IJob>("Job", jobSchema);
export default Job;
