import express from "express";
import cors from "cors";
import routes from "./app/routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(331, () => {
    console.log("auth server on");
});