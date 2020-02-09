//exportar todos os arquivos desta pasta como objetos

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

const jobs = fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .map(file => {
    let job = require(path.join(__dirname, file));
    return job;
  });

module.exports = jobs;
