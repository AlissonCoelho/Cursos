const moment = require('moment');

class adicionarAtendimento{
   async adicionar(schema, dados, res){
        
        const existe =  await schema.findOne({cliente: dados["cliente"],pet: dados["pet"], servico: dados["servico"]}).exec();
        
        const dataCriacao = moment().format();

        //validação dos dados 
        if (dados.cliente.length <= 5)
        {
            res.status(406).send('nome cliente deve maior que 5 caracteres');
            console.log('nome cliente deve maior que 5 caracteres');
            return;
        }

        dados.dataAtendimento = moment(dados.dataAtendimento, 'DD/MM/YYYY').format();
        if (!moment(dados.dataAtendimento).isAfter(dataCriacao))
        {
            res.status(406).send('Data deve ser maior ou igual a data atual');
            console.log('Data deve ser maior ou igual a data atual');
            return;
        }

        dados.dataCriacao = dataCriacao;
        
        if (!existe)
        {
            schema.create(dados, err => {if (err) 
                {
                    res.status(501).json(dados);
                    console.log('não foi criado', err);
                }}
            
            )
        }
        else
            //res.send('usuario já existe');
            res.status(409).json(dados);
            console.log('usuario já existe');
            
    }

}
module.exports = new adicionarAtendimento;