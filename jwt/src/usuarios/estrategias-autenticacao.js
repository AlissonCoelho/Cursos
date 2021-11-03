const passpot = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Usuario = require('./usuarios-modelo');

const {InvalidArgumentError} = require('../erros')

const bcrypt = require('bcrypt')

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
            usenameField: 'email',
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