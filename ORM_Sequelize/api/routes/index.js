//const bodyParser = require ('body-parser');
const pessoas = require("./pessoas");
const niveis = require("./niveis");
const turmas = require("./turmas");
const Matricula = require("./matriculas");

module.exports = (app) => {
  app.use(pessoas);
  app.use(niveis);
  app.use(turmas);
  app.use(Matricula);
};
