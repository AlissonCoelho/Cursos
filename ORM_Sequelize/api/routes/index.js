//const bodyParser = require ('body-parser');
const pessoas = require("./pessoas");

module.exports = (app) => {
  app.use(pessoas);
};
