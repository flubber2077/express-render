import express, { json, urlencoded } from "express";
import thingsRoutes from "./src/routes/things.js";

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => res.status(200).json({ message: "Hello World!" }));
app.get("/things", thingsRoutes);