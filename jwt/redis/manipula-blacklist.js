const blacklist = require('./blacklist');
const {promisify} = require('util');
const jwt = require('jsonwebtoken');
const {createHash} = require('crypto');


function gerarHash(token)
{
    //Criar hash do token para ter um tamanho unico
    return createHash('sha256').update(token).digest('hex');
}


const existsAsync = promisify(blacklist.exists).bind(blacklist);
const setAsync = promisify(blacklist.set).bind(blacklist);

module.exports = {
    adicionar: async token =>
    {
        const tokenHas = gerarHash(token);
        const dataExpiracao = jwt.decode(token);
        await setAsync(tokenHas,"");
        blacklist.expireat(tokenHas,dataExpiracao.exp);
    },
    contenToken: async token =>
    {
        const tokenHas = gerarHash(token);
        const result = await existsAsync(tokenHas);
        return result ===1;
    }

}