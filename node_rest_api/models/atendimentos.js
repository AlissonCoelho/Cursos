class adicionarAtendimento{
   async adicionar(schema, dados,req, res){

        const existe =  await schema.findOne({cliente: dados["cliente"],pet: dados["pet"], servico: dados["servico"]}).exec();
        console.log("existe: ",existe);
        
        if (!existe)
        {
            schema.create(dados)
            res.status(200).send("Usuario criado");
        }
        else
            res.status(500).send("Usuario já existe");
    }

}
module.exports = new adicionarAtendimento;