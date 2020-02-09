module.exports = {
  key: "slowJob",
  async handle({ data }) {
    const { message } = data;
    require("../utils/slowFunction").slow();
    console.log(message);
  },
  async onFail() {
    //do something on fail
  }
};
