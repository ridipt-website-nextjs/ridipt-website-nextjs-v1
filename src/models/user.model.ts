import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    roles: (
        | "super-admin"
        | "admin"
        | "manager"
        | "editor"
        | "viewer"
        | "user"
    )[]; // we can add multiples roles
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema: Schema = new Schema(
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
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        roles: {
            type: [String],
            enum: ["super-admin", "admin", "manager", "editor", "viewer", "user"],
            default: ["user"], // user role is by default
        },
    },
    {
        timestamps: true, // createdAt & updatedAt
    }
);

const User =mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
