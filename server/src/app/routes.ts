import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
    return res.send("main - ok");
});

export default routes;