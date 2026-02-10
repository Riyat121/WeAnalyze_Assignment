import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const { ticketId, author, text, isPrivate } = req.body;
    const comment = await Comment.create({ ticketId, author, text, isPrivate });
    return res.status(201).json(comment);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Read all (optional filters: ticketId, isPrivate)
router.get("/", async (req, res) => {
  try {
    const { ticketId, isPrivate } = req.query;
    const filter = {};
    if (ticketId) filter.ticketId = ticketId;
    if (typeof isPrivate !== "undefined") {
      filter.isPrivate = isPrivate === "true";
    }
    const comments = await Comment.find(filter).sort({ createdAt: 1 });
    return res.json(comments);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Read one
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    return res.json(comment);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const { author, text, isPrivate } = req.body;
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      { author, text, isPrivate },
      { new: true, runValidators: true }
    );
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    return res.json(comment);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    return res.json({ message: "Deleted" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

export default router;
