const passport = require("passport");

module.exports = {
  local: (req, res, next) => {
    passport.authenticate(
      "local",
      { session: false },
      (erro, usuario, info) => {
          if(erro && erro.name === 'InvalidArgumentError')
          {
            console.log("Erro InvalidArgumentError",erro.message);
            res.status(401).json({erro: erro.message})
            return
          }
          if(erro)
          {
            console.log("Erro generico",erro.message);
            res.status(500).json({erro: erro.message})
            return;
          }
          if(!usuario)
          {
            return res.status(401).json();
          }
          req.user = usuario;
          next();
      }
    ) (req, res, next);
  },
  bearer: (req, res, next) => {
    passport.authenticate(
      "bearer",
      { session: false },
      (erro, usuario, info) => {
          if(erro && erro.name === 'JsonWebTokenError')
          {
            console.log("Erro JsonWebTokenError",erro.message);
            res.status(401).json({erro: erro.message})
            return
          }
          if(erro && erro.name === 'TokenExpiredError')
          {
            console.log("Erro tempo expirado",erro.message);
            res.status(401).json({erro: erro.message, expiradoEm: erro.expiredAt})
            return;
          }
          if(erro)
          {
            console.log("Erro generico",erro.message);
            res.status(500).json({erro: erro.message})
            return;
          }
          if(!usuario)
          {
            return res.status(401).json();
          }
          req.token = info.token;
          req.user = usuario;
          next();
      }
    ) (req, res, next);
  },
};
