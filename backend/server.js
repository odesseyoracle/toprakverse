import express from "express";
import "./config.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => {
  console.log(`Dog Server is running on http://localhost:${port} 🐕`);
});
