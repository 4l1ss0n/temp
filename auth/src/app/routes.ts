import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
    return res.send("auth - ok");
});

export default routes;