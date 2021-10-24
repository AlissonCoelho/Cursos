const moment = require('moment');

class adicionarAtendimento{
   async adicionar(schema, dados, res){
        
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

        const existe =  await schema.findOne({cliente: dados["cliente"],pet: dados["pet"], servico: dados["servico"]}).exec();
        
        if (!existe)
        {
            schema.create(dados, err => {if (err) 
                {
                    res.status(501).json(err);
                    console.log('usuario não foi criado', err);
                }
                else
                {
                    res.status(201).json(dados);
                    console.log('usuario criado')
                    return;
                }
            }
                
            
            )
        }
        else
        {
            //res.send('usuario já existe');
            res.status(409).json(dados);
            console.log('usuario já existe');
        }
            
    }
   async listar(schema, res)
    {
        const Usuarios = await schema.find();

        console.log(Usuarios);
        console.log('usuario encontrados')
        res.status(200).json(Usuarios);
        return;
    }
    async buscarPorId(schema,id, res)
    {
        const Usuario = await schema.find({ _id:id});

        if(!Usuario.length)
        {
            console.log('usuario não encontrado')
            res.status(404).send("Não encontrado");
            return;
        }
        console.log('usuario encontrado')
        res.status(200).json(Usuario[0]);
        return;
    }
    async alterar(schema,id,dados, res)
    {

        //validação dos dados 
        if (dados.cliente.length <= 5)
        {
            res.status(406).send('nome cliente deve maior que 5 caracteres');
            console.log('nome cliente deve maior que 5 caracteres');
            return;
        }

        const agora = moment().format();

        dados.dataAtendimento = moment(dados.dataAtendimento, 'DD/MM/YYYY').format();

        if (!moment(dados.dataAtendimento).isAfter(agora))
        {
            res.status(406).send('Data deve ser maior ou igual a data atual');
            console.log('Data deve ser maior ou igual a data atual');
            return;
        }

        const Usuario = await schema.findByIdAndUpdate({ _id:id},dados);
        next();
        console.log("usuario: ",Object.entries(Usuario).length)

        if(!Object.entries(Usuario).length)
        {
            console.log('usuario não encontrado')
            res.status(404).send("Não encontrado");
            return;
        }

        console.log('usuario alterado')
        res.status(200).json(Usuario);
        return;
    }
    async deletar(schema,id, res)
    {
        const Usuario = await schema.findOneAndDelete({ _id:id});

        if(!Object.entries(Usuario).length)
        {
            console.log('usuario não deletado')
            res.status(404).send("Não deletado");
            return;
        }
        console.log('usuario deletado')
        res.status(200).json(Usuario);
        return;
    }

}
module.exports = new adicionarAtendimento;