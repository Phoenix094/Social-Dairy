import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const URL = "mongodb://localhost:27017/SocialDairy";
const PORT = process.env.PORT || 5000;

mongoose.connect(
	URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Connected to MongoDB");
	}
);

app.listen(PORT, () => {
	console.log(`server is running on : ${PORT}`);
});

// mongoose.set("useFindAndModify", false);
mongoose.set("strictQuery", true);