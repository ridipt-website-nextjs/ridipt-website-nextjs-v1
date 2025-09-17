import mongoose, { Schema, model, Document } from 'mongoose';

export interface IComment extends Document {
  content: string;
  author: {
    name: string;
    email: string;
    avatar?: string;
    website?: string;
  };
  parentId?: Schema.Types.ObjectId; // nested comments
  replies?: Schema.Types.ObjectId[]; // reference to nested comments
  likes: number;
  status: 'approved' | 'pending' | 'spam' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
  ipAddress?: string;
  userAgent?: string;
}

const CommentSchema = new Schema<IComment>(
  {
    content: { type: String, required: true },
    author: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      avatar: { type: String },
      website: { type: String },
    },
    parentId: { type: Schema.Types.ObjectId, ref: 'Comment' },
    replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    likes: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ['approved', 'pending', 'spam', 'rejected'],
      default: 'pending',
    },
    ipAddress: { type: String },
    userAgent: { type: String },
  },
  { timestamps: true }
);

export const Comment =  mongoose.models.Comment || model<IComment>('Comment', CommentSchema);
