import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';

import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, (error) => {
	if (error) {
		console.log("Not connected to mongo");
	} else {
		console.log("Connected to MongoDB");
	}
});

app.listen(PORT, () => {
	console.log(`server is running on : ${PORT}`);
});

// mongoose.set("useFindAndModify", false);
mongoose.set("strictQuery", true);

app.use("/posts", postRoutes);
