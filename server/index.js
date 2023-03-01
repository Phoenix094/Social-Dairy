import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());

const URL =
	"mongodb+srv://phoenix:phoenix94@cluster0.zbsuiom.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(URL, (error) => {
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
