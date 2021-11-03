const passpot = require('passport');
const bcrypt = require('bcrypt');
const jwt =require("jsonwebtoken");
const BearerStrategy = require('passport-http-bearer').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const {InvalidArgumentError} = require('../erros')
const Usuario = require('./usuarios-modelo');


function verificaUsuario (usuario)
{
    if (!usuario)
    {
        throw new InvalidArgumentError("Não existe usuario com esse email");
    }
}

async function verificaSenha (senha, senhaHash)
{
    const senhaValida = await bcrypt.compare(senha, senhaHash);
    if (!senhaValida)
    {
        throw new InvalidArgumentError("E-mail ou senha inválidos");
    }
}

passpot.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'senha',
            session: false
        }, async (emai, senha, done) =>
        {
            try
            {
                const usuario = await Usuario.buscaPorEmail(emai);
                verificaUsuario(usuario);
                await verificaSenha(senha,usuario.senhaHash);

                done(null, usuario);
            }
            catch (error)
            {
                done(error);
            }
            
        } )
)
passpot.use(
    new BearerStrategy(
        (token,done) =>
        { 
            try
            {
                const payload = jwt.verify(token, process.env.CHAVE_JWT);
                const usuario = Usuario.buscaPorId(payload.id);
                done(null, usuario);
            }
            catch (error)
            {
                done(error);
            }
            
        }
    )
)