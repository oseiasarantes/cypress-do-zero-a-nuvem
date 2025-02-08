# Cypress Project

<img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="45" height="45"/>         <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" width="45" height="45"/>

Projeto destinado ao aprendizado de Cypress para uso em testes automatizados de frontentd.

## Pré-requisitos

É preciso que você tenha Node.js e npm instalados para rodar esse projeto.

> Aqui temos as versões `v18.15.0` e `9.5.0` do Node.js e npm, respectivamente. Sugiro que utilize as mesmas ou as versões mais recentes.

## Instalação

Execute `npm install` (ou `npm i` para versão mais curta) para instalar as dev dependencies.

## Testes

> **Nota:** Antes de rodar os testes, faça uma cópia do arquivo `cypress.env.example.json` como `cypress.env.json`, para que nos testes reais, você insira credenciais válidas para os testes.
>
> O arquivo `cypress.env.json` está incluso no [`.gitignore`](./.gitignore) e isso te deixa seguro de que informações confidenciais não sejam versionadas.

Execute `npm test` (ou `npm t` para versão mais curta) para rodar os testes no modo headless.

Ou, execute `npm run cy:open` a fim de abrir o Cypress no modo interativo.

___

Esse projeto foi feito atualizado durante os estudos por [Oséias](https://github.com/oseiasarantes).