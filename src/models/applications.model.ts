import mongoose, { Document, Schema } from "mongoose";

export interface IApplication extends Document {
  name: string;
  email: string;
  phone?: string;
  source: "LinkedIn" | "Company Website" | "Employee Referral" | "Job Portal" | "Other";
  position:
    | "Social Media Manager"
    | "Business Development Manager"
    | "Frontend Developer"
    | "UI/UX Designer"
    | "HR & Talent Acquisition Specialist"
    | "Other";
  experience: "Fresher" | "0-1 years" | "1-3 years" | "3-5 years" | "5-10 years" | "10+ years";
  cv: string; // File path / URL
  companyName?: string;
  currentCTC?: string;
  expectedCTC?: string;
  noticePeriod?: "Immediate" | "15 Days" | "30 Days" | "60 Days" | "90 Days" | "More than 90 Days";
  location: string;
  message?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const applicationSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true },
    phone: { type: String, required: false, trim: true },

    source: {
      type: String,
      required: true,
      enum: ["LinkedIn", "Company Website", "Employee Referral", "Job Portal", "Other"],
    },

    position: {
      type: String,
      required: true,
      enum: [
        "Social Media Manager",
        "Business Development Manager",
        "Frontend Developer",
        "UI/UX Designer",
        "HR & Talent Acquisition Specialist",
        "Other",
      ],
    },

    experience: {
      type: String,
      required: true,
      enum: ["Fresher", "0-1 years", "1-3 years", "3-5 years", "5-10 years", "10+ years"],
    },

    cv: { type: String, required: true }, // store file path / URL

    companyName: { type: String, required: false, trim: true },
    currentCTC: { type: String, required: false, trim: true },
    expectedCTC: { type: String, required: false, trim: true },

    noticePeriod: {
      type: String,
      required: false,
      enum: ["Immediate", "15 Days", "30 Days", "60 Days", "90 Days", "More than 90 Days"],
    },

    location: { type: String, required: true, trim: true },
    message: { type: String, required: false, trim: true },
  },
  { timestamps: true }
);

const Application = mongoose.model<IApplication>("Application", applicationSchema);

export default Application;
