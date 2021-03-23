#Squad Management Tool#

Esse projeto foi desenvolvido com:

- React
- Redux
- JavaScript
- CSS
- HTML


##How to run##

Primeiro você vai precisar usar o `npm i` para instalar todas as dependências necessárias.

E então se você quiser rodar o projeto pode usar:

`npm start` - para rodar em desenvolvimento.

or

`npm run build` - para montar a aplicação para produção.

##About the project##

Para o desenvolvimento deste projeto eu priorizei as features e layout sujeridos no desafio. 
Consegui deixar o layout relativamente próximo do que foi pedido, para tal utilizei apenas Html e CSS puros, sem bibliotecas de componentes.
Em relação às features, infelizmente, não consegui implementar todas no período, porém todas as features da tela inicial estão funcionando como pedido, já na página de criação e edição nem todas features estão funcionando idealmente:

- É possível cadastrar  e editar times, porém o usuário ainda poderia cadastrar o mesmo jogador várias vezes no mesmo time.

- As validações para os campos obrigatórios estão funcionando.

- O campo não está com o layout idealmente implementado e não é possível utilizar  drag n drop.

- Os jogadores selecionado pelo usário ao clicar não aparecem no campo ainda, mas são registrados no estado da aplicação.

- Ao mudar a formação os jogadores selecionados são deselecionados, como pede o desafio.

- No momento de editar infelizmente os dados atuais do time em questão não vão aparecer, mas é possível editá-lo preenchendo os campos ainda assim.

Apesar de incompleto julgo que no projeto é possível observar meus conhecimentos nas linguagens utilizadas, tenho certeza que com um pouco mais de tempo disponível teria finalizado completamente o projeto.

###Outras informações###

O projeto está utilizando mocks para seus gets de Times e Jogadores. Para estes gets e qualquer outras chamadas http que quisesse fazer no futuro criei uma apiService, uma service genérica para realizar as chamadas.

Se houvesse um pouco mais de tempo priorizaria terminar as features e layout em 100%, componentizar um pouco mais o projeto e criar testes.


###end###
