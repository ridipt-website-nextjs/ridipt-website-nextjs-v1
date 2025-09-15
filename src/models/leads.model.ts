import mongoose, { Document, Schema } from "mongoose";

export interface ILead extends Document {
  name: string;
  email: string;
  country: "United States" | "India" | "United Kingdom" | "Canada";
  phone: string;
  businessRequirement: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const leadSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    country: {
      type: String,
      required: true,
      enum: ["United States", "India", "United Kingdom", "Canada"],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    businessRequirement: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

const Lead = mongoose.models.Leads || mongoose.model<ILead>("Lead", leadSchema);

export default Lead;
