# Teste de front-end Elo7

Esse projeto foi criado com o propósito de atender aos requisitos do teste de front-end da empresa [Elo7](https://www.elo7.com.br/). Você pode encontrar os requisitos do teste [aqui](https://gist.github.com/elo7-developer/33a0844a9ac6953dd3e5).

### Dependências de desenvolvimento

Esse projeto foi desenvolvido utilizando React 17 com Typescript e Hooks.
A escolha por trás do Typescript deve-se primeiramente por preferência pessoal da autora do projeto, e também pela facilidade de entendimento do código quando feito em Typescript. Mesmo quando um projeto não está devidamente documentado, é possível entender as entidades que o projeto usa observando os tipos dos mesmos, além de evitar bugs por incompatibilidade de dados.

Esse projeto usa [ESlint](https://eslint.org/), [Prettier](https://prettier.io/) e [EditorConfig](https://editorconfig.org/) para formatação do código. O padrão utilizado é o recomendado pelo ESlint [com algumas poucas alterações a gosto da autora].

Combinando as três ferramentas, é possível ter um código padronizado e com formatação automatizada ao salvar um arquivo <3

Os componentes do projeto possuem testes unitários utilizado [Jest](https://jestjs.io/pt-br/) e [RTL](https://testing-library.com/). As ferramentas foram escolhidas por familiaridade da autora e por já virem instaladas no projeto gerado automaticamente com o [create-react-app](https://github.com/facebook/create-react-app), também por suporte da comunidade.

A estilização dos componentes é feita com [sass](https://sass-lang.com/). A preferência da autora para estilização é styles-components, mas acredito que utilizando sass posso me aproximar melhor da forma como o Elo7 trabalha, e também possuo familiaridade com essa ferramenta de estilização.

## Rodando o projeto localmente

Para ver o resultado do projeto na sua máquina, clone esse repositório, e dentro da pasta do projeto, execute os seguintes comandos:

Para instalar as dependências:

`npm install`

Para iniciar o servidor local:

`npm start`

Para rodar os testes:

`npm test`
