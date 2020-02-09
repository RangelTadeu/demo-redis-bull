const routes = require("express").Router();

const QueueController = require("./app/controllers/QueueController");

routes.get("/withoutQueue", QueueController.withoutQueue);
routes.get("/usingQueue", QueueController.usingQueue);

module.exports = routes;
