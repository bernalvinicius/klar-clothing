# Klar Clothings

![Preview-Screens](https://raw.githubusercontent.com/bernalvinicius/klar-clothing/master/src/assets/images/klar.png)

Se você quiser dar uma olhada em todas as telas da aplicação, elas estão [aqui](https://klar-klothing.netlify.app/).

## Porquê?

Este projeto faz parte do meu portfólio pessoal, fiz apenas com o intuito de aprimorar minhas habilidades em React.js, então, ficarei feliz se você pudesse me fornecer algum feedback sobre o projeto, código, estrutura ou qualquer coisa que você pode relatar que poderia me tornar um desenvolvedor melhor!


Consiste em fazer um projeto que simula um E-Commerce (de roupas) utlizando React.


O tanto quanto possível busquei construir uma interface amigável e funcional ao utilizador.


Contacte-me: vini_bernal@hotmail.com


Conecte-se a mim no [LinkedIn](https://www.linkedin.com/in/vin%C3%ADcius-bernal-19254027/)

## Algumas observações sobre esse App

**1** - Foi construído com a base do `create-react-app`.

**2** - Para este desafio utilizei `node-sass` nas estilizações e também o `Material-UI`, que traz todos os recursos do Material Design para projetos em React.

**4** - O gerenciamento de estado da aplicação foi feito utlizando `redux`.

## Funcionalidades

- Header component:

  - Esse componente é fixo e é renderizado em todos as páginas, é possível acessar cada Menu da aplicação, ver o carrinho de compras e o modal de adicionar um Novo Produto;

- Home Page:

  - É renderizada uma lista com as cinco categorias de roupas que a loja comercializa;
  - Ao clicar no `card` de alguma categoria, o usuário é redirecionado para a página que mostra todos os items disponíveis para a respectiva categoria.

- Shop Page:

  - Na tela `shop page`, é renderizada uma lista que contém 1/3 dos produtos de todas as categorias. Cada categoria tem por _default_ 12 produtos cadastrados. Então na página _shop page_ aparecerem 4 produtos de cada uma das 5 categorias;
  - O usuário tem a opção de clicar no produto que gosta e adicionar ao carrinho;

- Category Page:

  - Nessa tela aparecem todos os produtos da respectiva categoria que o usuário clicou, ele tem a opção de adicionar ao carrinho, ver a foto, descrição e preço do produto.

- Carrinho de Compras:

  - Quando o utilizador clica em `Add ao Carrinho`, o componente do do carrinho de compras é atualizando adicionando um novo item a lista já existente;
  - Ao clicar no ícone do Carrinho de Compras, o usuário pode ver cada item da sua lista, e também tem a opção de clicar no botão de `Finalizar Compra`. Ao clicar nesse botão, ele é direcionado para a `checkout page`.

- Checkout Page:

  - Nessa página é exibido ao utilizador uma tabela com 5 colunas: Produto, Descrição, Quantidade, Preço e Remover;
  - Com essa tabela, é possível visualizar cada um dos itens que foi adicionado ao carrinho;
  - O utilizador pode subtratir/adicionar itens ao carrinho clicando nos botões disponibilizados na coluna quantidade;
  - O utilizador pode remover totalmente o item do carrinho, mesmo que o respectivo item esteja sendo comprado em várias quantidades;
  - É renderizado dinamicamente ao utilizador o valor total de sua compra, bem como a quantidade de itens existentes no carrinho;

- Dialog Cadastrar Produto:
  - Ao clicar no botão `Cadastrar Produto`, é renderizado ao utilizador um Dialog Modal com 4 campos a serem preenchidos:
    - Categoria do Produto, com um `Menu Select`o utilizador pode escolher entre Ternos, Sapatos, Relógios, Calças ou Camisas;
    - Após selecionar a Categoria, deve preencher os inputs de Nome, Preço e URL do Produto;
    - Essa funcionalidade não está aplicada;

## Iniciando a Aplicação

### Pré-requisitos

Para executar este projeto no modo de desenvolvimento, você precisará de um ambiente básico para executar um aplicativo React, que pode ser encontrado [aqui.](https://reactjs.org/docs/getting-started.html)

### Instalando

**Clonando este repositório**

```
$ https://github.com/bernalvinicius/klar-clothing.git
$ cd klar-clothing
```

**Instalando dependências**

```
$ yarn
```

_ou_

```
$ npm install
```

**Rodar Aplicação**

Com todas as dependências instaladas e o ambiente configurado corretamente, agora você pode executar o aplicativo::

```
$ npm start
```

## Construído com

**Obs:** Abaixo falarei sobre alguns plugins, todos eles no [Visual Studio Code](https://code.visualstudio.com/).

Após gerar um novo projeto com 'npx create-react-app', criei alguns arquivos extras para deixar a aplicação pré-configurada em níveis de compilação e indentação.

Foram criados os seguintes arquivos: (na raiz do projeto):

- **.editorconfig:**

Para este arquivo ser válido, deve ser adicionada e extensão [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig). Com a extensão instalada e o arquivo criado, pode-se definir determinadas indicações de estilo de código. Coisas como quantos espaços uma tab deve ter. Isso pode reduzir o atrito ao trabalhar com uma equipe com vários programadores. Para maiores informações: [EditorConfig](https://editorconfig.org/).

- **.prettierrc**

Para esse arquivo ser válido, deve ser adicionada a extensão [Prettier – Code formatter](https://prettier.io/). O Prettier nada mais é do que um formatador de código, ele garante que todo o código emitido esteja em conformidade com um estilo consistente. Por exemplo, você pode escrever uma linha de código que fique muito grande, pode limitar o tamanho máximo da linha para 60 caracteres e então o Prettier fará o trabalho de organizar o código para você. Com a extensão instalada e o arquivo criado pode-se dar início a configuração do arquivo. Para maiores informações: [Prettier](https://prettier.io/).

- **jsconfig.json**

O arquivo jsconfig.json especifica os arquivos raiz e as opções para os recursos fornecidos pelo serviço de JavaScript. Por exemplo, por padrão o serviço de idioma JavaScript analisará e fornecerá o IntelliSense para todos os arquivos em seu projeto JavaScript. Se você desejar especificar quais arquivos excluir ou incluir para fornecer o IntelliSense adequado, pode utilizar uma propriedade no jsconfig.json para isso. Para maiores informações: [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig).

- **.eslintrc.js**

O ESLint foi projetado para ser configurável, você pode desativar todas as regras e executar apenas com a validação básica de sintaxe, ou misturar e combinar as regras agrupadas e as regras personalizadas. Configuramos o ESLint através do arquivo .eslintrc.js, nele é especificado todas informações de configuração que desejamos aplicar. Para maiores informações: [Documentação do ESLint](https://eslint.org/docs/user-guide/configuring). Você também deve instalar a extensão do [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Após a criação de todos esse arquivos e extensões, foram instaldas as seguintes dependências:

- [React](https://reactjs.org/) - Biblioteca JavaScript para criar interfaces de usuário
- [React-Router](https://reactrouter.com/) - Rotas
- [react-redux](https://github.com/reduxjs/react-redux) - Ligações oficiais do React para Redux.
- [redux](https://redux.js.org/) - Redux é um contêiner de estado previsível para aplicativos JavaScript.
- [redux-logger](https://github.com/LogRocket/redux-logger#readme) - Uma ferramenta de registro Redux de produção que permite reproduzir problemas como se eles tivessem acontecido em seu próprio navegador.
- [redux-persist](https://github.com/rt2zz/redux-persist#readme) - O uso básico envolve adicionar `persistReducer` e `persistStore` à configuração da aplicação.
- [reselect](https://github.com/reduxjs/reselect#readme) - Biblioteca _seletora_ simples para Redux, inspirada em getters do NuclearJS, assinaturas em re-frame e speedskater.
- [ESlint](https://eslint.org/) - Linter
- [eslint-config-airbnb](https://github.com/airbnb/javascript) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme) - Desativa todas as regras desnecessárias ou que podem entrar em conflito com o Prettier
- [eslint-import-resolver-alias](https://github.com/johvin/eslint-import-resolver-alias#readme) - Este é um plugin simples de resolução de importação de módulo Node.js para eslint-plugin-import, que suporta resolução nativa de módulo Node.js, módulo de alias/mapeamento e extensões de arquivos personalizados
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Este plugin oferece suporte à sintaxe de importação/exportação do ES2015+ (ES6+) e evitar problemas com erros de ortografia de caminhos de arquivos e nomes de importação
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme) - Verificador AST (árvore abstrata de sintaxe) estático para regras de acessibilidade em elementos JSX
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#readme) - Executa o Prettier como uma regra do ESLint e relata as diferenças como problemas individuais do ESLint
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras específicas de aprendizagem para ESLint
- [eslint-plugin-react-hooks](https://github.com/facebook/react) - Aplica as regras dos Hooks
- [Prettier](https://github.com/prettier/prettier) - Formatador de código
- [prop-types](https://github.com/facebook/prop-types) - Verificação de tipo de tempo de execução para React props e objetos semelhantes. Você pode usar prop-types para documentar os tipos pretendidos de propriedades passados aos componentes. O React verificará os props passados para seus componentes em relação a essas definições e avisará em desenvolvimento se eles não corresponderem
- [customize-cra](https://github.com/arackaf/customize-cra#readme) - Fornece um conjunto de utilitários para personalizar as configurações das versões 02 e 03 do create-react-app, aproveitando as principais funcionalidades do react-app-rewired
- [customize-cra-react-refresh](https://github.com/esetnik/customize-cra-react-refresh#readme) - Fornece uma maneira simples de integrar react-refresh ao seu create-react-app usando customize-cra e @pmmmwh/react-refresh-webpack-plugin
