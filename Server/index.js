import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import commentsRouter from "./routes/comments.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const defaultOrigins = [
  "http://localhost:5173",
  "https://we-analyze-assignment-ty5r.vercel.app",
  "https://we-analyze-assignment-ty5r-j4g2whjok-riyat121s-projects.vercel.app"
];
const envOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const allowedOrigins = envOrigins.length ? envOrigins : defaultOrigins;

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true
  })
);

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/comments", commentsRouter);

connectDB(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
