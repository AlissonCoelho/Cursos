const passpot = require('passport');
const bcrypt = require('bcrypt');
const jwt =require("jsonwebtoken");
const BearerStrategy = require('passport-http-bearer').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const {InvalidArgumentError} = require('../erros')
const Usuario = require('./usuarios-modelo');
const blacklist = require('../../redis/manipula-blacklist');

function verificaUsuario (usuario)
{
    if (!usuario)
    {
        throw new InvalidArgumentError("Não existe usuario com esse email");
    }
}

async function verificaTokenBlacklist (token)
{
    const verificaToken = await blacklist.contenToken(token)
    if (verificaToken)
    {
        throw new jwt.JsonWebTokenError('Token inválido por logout')
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
        async (token,done) =>
        { 
            try
            {
                await verificaTokenBlacklist(token);
                const payload = jwt.verify(token, process.env.CHAVE_JWT);
                const usuario = await Usuario.buscaPorId(payload.id);
                let info = {token: token};
                console.log("info",info);
                done(null, usuario,info );
            }
            catch (error)
            {
                done(error);
            }
            
        }
    )
)