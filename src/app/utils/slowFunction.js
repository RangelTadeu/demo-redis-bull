module.exports = {
  async slow() {
    const wait = ms => new Promise((r, j) => setTimeout(r, ms));

    await wait(5000);
  }
};
