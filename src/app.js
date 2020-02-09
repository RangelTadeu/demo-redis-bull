require("dotenv").config();

const express = require("express");
const { setQueues, UI } = require("bull-board");
const Queue = require("./app/libs/queue");

class AppController {
  constructor() {
    this.express = express();

    //add queues to dashboard
    setQueues(Queue.queues.map(queue => queue.bull));

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());

    //using bull dashboard on this route
    this.express.use("/admin/queues", UI);
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppController().express;
