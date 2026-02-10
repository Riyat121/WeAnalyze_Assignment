import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    ticketId: { type: String, required: true, index: true },
    author: { type: String, required: true },
    text: { type: String, required: true },
    isPrivate: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
