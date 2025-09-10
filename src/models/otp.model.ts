import mongoose, { Document, Schema } from "mongoose";

export interface IOtp extends Document {
  email: string;
  otp: string;
  expiresAt: Date;
  createdAt?: Date;
}

const otpSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    otp: {
      type: String,
      required: true,
      length: 6,
    },
    expiresAt: {
      type: Date,
      required: true,
      index: { expireAfterSeconds: 0 }, // Auto delete expired documents
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
otpSchema.index({ email: 1, expiresAt: 1 });

const Otp = mongoose.models.Otp || mongoose.model<IOtp>("Otp", otpSchema);
export default Otp;
