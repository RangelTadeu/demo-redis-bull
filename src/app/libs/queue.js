const Queue = require("bull");
const redis = require("../../config/redis");

const jobs = require("../jobs");

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, redis),
  name: job.key,
  handle: job.handle,
  onFail: job.onFail,
  options: job.options
}));

module.exports = {
  queues,
  add(name, data) {
    const queue = this.queues.find(queue => queue.name === name);

    return queue.bull.add(data, redis);
  },
  process() {
    this.queues.forEach(queue => {
      queue.bull.process(queue.handle);

      queue.onFail("failed", (job, err) => {
        queue.onFail();
        console.log(`Job failed: ${job.key}`);
      });
    });
  }
};
