const Queue = require("../libs/queue");

class QueueController {
  async withoutQueue(req, res) {
    //run function without queue
    await require("../utils/slowFunction").slow();

    return res.status(200).json({ message: "I'm so slow =/" });
  }

  async usingQueue(req, res) {
    //run job using queue
    await Queue.add("slowJob", { message: "Running in the backgroud" });

    return res.status(200).json({ message: "I'm really fast!" });
  }
}

module.exports = new QueueController();
