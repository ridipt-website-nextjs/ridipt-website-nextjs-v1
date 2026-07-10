import mongoose, { Document, Schema } from "mongoose";

export interface IDpdpLead extends Document {
  name: string;
  company: string;
  designation: string;
  email: string;
  mobile: string;
  companySize: string;
  erpHrms?: string;
  message?: string;
  source?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const dpdpLeadSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    companySize: {
      type: String,
      required: true,
      trim: true,
    },
    erpHrms: {
      type: String,
      trim: true,
      default: "",
    },
    message: {
      type: String,
      trim: true,
      default: "",
    },
    source: {
      type: String,
      trim: true,
      default: "DPDP Readiness Assessment Page",
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

const DpdpLead =
  mongoose.models.DpdpLead || mongoose.model<IDpdpLead>("DpdpLead", dpdpLeadSchema);

export default DpdpLead;
