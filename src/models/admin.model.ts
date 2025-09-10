import mongoose, { Document, Schema } from "mongoose";
import { IOtp } from "./otp.model";

export interface IAdmin extends Document {
  name: string;
  email: string;
  mobile: string;
  otp: IOtp["_id"][]; // Array of OTP references
}

const adminSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    otp: [
      {
        type: Schema.Types.ObjectId,
        ref: "Otp",
      }
    ], // Array of OTP references
  },
  {
    timestamps: true,
  }
);

// Indexing
adminSchema.index({ email: 1, mobile: 1 });

// Pre-save hook to ensure only 1 Admin exists
adminSchema.pre("save", async function (next) {
  const Admin = mongoose.model<IAdmin>("Admin");
  const count = await Admin.countDocuments();

  if (count >= 1 && this.isNew) {
    throw new Error("Only one admin is allowed in the system");
  }

  next();
});

// Method to cleanup expired OTPs
adminSchema.methods.cleanupExpiredOTPs = async function() {
  const now = new Date();
  
  // Find expired OTPs
  const expiredOTPs = await mongoose.model('Otp').find({
    _id: { $in: this.otp },
    expiresAt: { $lt: now }
  });

  if (expiredOTPs.length > 0) {
    const expiredIds = expiredOTPs.map(otp => otp._id);
    
    // Remove expired OTPs from database
    await mongoose.model('Otp').deleteMany({
      _id: { $in: expiredIds }
    });
    
    // Remove expired OTP references from admin
    this.otp = this.otp.filter((otpId:string) => 
      !expiredIds.some(expiredId => expiredId.equals(otpId))
    );
    
    await this.save();
  }
};

const Admin =
  mongoose.models.Admin || mongoose.model<IAdmin>("Admin", adminSchema);

export default Admin;
