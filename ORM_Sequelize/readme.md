## Desfazendo operações sequelize
Rodou o comando de migração antes de fazer alguma alteração importante em algum modelo e agora as tabelas do banco não estão como você precisa? Bom, já comentamos que as migrações em ORM também servem para termos um tipo de “versionamento” (feito através do arquivo SequelizeMeta no seu banco) e poder voltarmos o banco a um estado anterior à última alteração.

Como fazer isso? Através dos comandos:
```
npx sequelize-cli db:migrate:undo
```

Este comando vai desfazer somente a última migração feita, na ordem em que os arquivos são lidos e executados pelo Sequelize (de acordo com as datas e horários no nome dos arquivos). Se você tiver rodado 3 migrações - por exemplo, das tabelas Niveis, Turmas e Matriculas, o comando npx sequelize-cli db:migrate:undo vai desfazer apenas Matriculas.

Você pode rodar o mesmo comando novamente para ir desfazendo as migrações na ordem em que foram executadas, ou usar o comando:

```
db:migrate:undo --name [data-hora]-create-[nome-da-tabela].js
```

Para desfazer uma migração específica. Nesse caso, **lembre-se que só irá funcionar se não tiver nenhuma outra tabela relacionada a ela!**

## Desfazendo seeds
Os seeds servem para termos dados iniciais no banco, normalmente dados de exemplo e/ou para teste. Quando você quiser desfazer essa operação para limpar esses dados do banco, pode rodar o comando:

```
npx sequelize db:seed:undo
```
Para desfazer o último seed feito.

```
npx sequelize-cli db:seed:undo --seed nome-do-arquivo
```
Para desfazer seeds de uma tabela específica.

```
npx sequelize-cli db:seed:undo:all
```
Para desfazer todos os seeds feitos.

### Importante:

Ao contrário das migrações, não existe nenhum recurso de “versionamento” de seeds, só é possível incluir no banco e desfazer a operação (o que vai deletar os registros do banco).

Se você rodar o :undo em uma tabela e quiser mais tarde utilizar os seeds novamente na mesma tabela, os IDs deles serão outros.

Se você estiver migrando/seedando tabelas relacionadas, é sempre bom conferir os IDs de todas, do contrário o Sequelize vai lançar um erro de relação.


##  belongsTo para quê?

Se você pesquisou tutoriais sobre como fazer associações com Sequelize, pode ter visto que em alguns deles a associação 1:n (um para muitos) é feita utilizando somente o método hasMany(), sem acrescentar o belongsTo(). Vai funcionar? Então por que a documentação do Sequelize diz para utilizar os dois métodos juntos?

Vamos pegar o seguinte exemplo:

```
Equipe.hasMany(Atleta);
Atleta.belongsTo(Equipe);
```
Ou seja, uma equipe tem vários (hasMany) atletas, mas atletas pertencem à (belongsTo) somente uma equipe cada.

Bom, mas e aí?
Quando utilizamos o método Atleta.belongsTo(Equipe) o Sequelize cria, “por baixo dos panos” alguns métodos “getters” e “setters”, como por exemplo atleta.getEquipe().

O método Equipe.hasMany(Atleta) faz a associação na outra ponta, permitindo a criação do método equipe.getAtletas(). A criação destes métodos é um comportamento padrão do Sequelize, mesmo que não tenham sido usados no projeto que fizemos no curso.

Se utilizarmos somente um dos métodos - por exemplo, somente o hasMany em um dos lados da relação - seria possível usar o método para get (trazer) todas as atletas de uma equipe, mas não a equipe a que pertence uma atleta.