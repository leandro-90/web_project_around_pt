<a id="readme-topo"></a>

<div align="center">

<img src="./images/logo.svg" alt="Logotipo Around The U.S." width="220" />

# Around The U.S.

**Uma galeria social interativa para compartilhar os lugares mais incríveis dos Estados Unidos e do mundo.**

[![Site no ar](https://img.shields.io/badge/site-no%20ar-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://leandro-90.github.io/web_project_around_pt/)
[![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-2ea44f?style=for-the-badge)](#-roadmap)
[![TripleTen](https://img.shields.io/badge/projeto-TripleTen-0f62fe?style=for-the-badge)](https://tripleten.com.br/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript%20ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![BEM](https://img.shields.io/badge/metodologia-BEM-000000?style=flat-square)
![Prettier](https://img.shields.io/badge/code%20style-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white)
![Responsivo](https://img.shields.io/badge/layout-responsivo-8A2BE2?style=flat-square)

[**Ver demonstração ao vivo**](https://leandro-90.github.io/web_project_around_pt/) · [Funcionalidades](#-funcionalidades) · [Tecnologias](#-tecnologias) · [Como executar](#-como-executar) · [Roadmap](#-roadmap)

</div>

---

## Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Arquitetura e estrutura de pastas](#-arquitetura-e-estrutura-de-pastas)
- [Destaques técnicos](#-destaques-técnicos)
- [Como executar](#-como-executar)
- [Deploy](#-deploy)
- [Aprendizados](#-aprendizados)
- [Roadmap](#-roadmap)
- [Como contribuir](#-como-contribuir)
- [Licença e créditos](#-licença-e-créditos)
- [Autor](#-autor)

---

## 📌 Sobre o projeto

**Around The U.S.** é uma aplicação web de página única (*single page*) que simula uma rede social de fotos de viagem. O usuário pode **editar o próprio perfil**, **publicar novos lugares** com título e imagem, **curtir** e **excluir** cartões e **ampliar** qualquer foto em um modal.

O projeto foi desenvolvido durante o bootcamp da **TripleTen** e consolida, na prática, os fundamentos do desenvolvimento front-end: HTML semântico, CSS organizado com a metodologia **BEM**, layout moderno com **Grid** e **Flexbox**, e **JavaScript puro** para manipulação do DOM e tratamento de eventos, sem nenhum framework ou biblioteca externa.

> 🎯 **Objetivo:** construir uma interface dinâmica e responsiva, com código limpo, componentes reutilizáveis (via `<template>`) e organização de arquivos pronta para escalar.

<p align="right"><a href="#readme-topo">⬆ voltar ao topo</a></p>

---

## 🎬 Demonstração

🔗 **Acesse:** [leandro-90.github.io/web_project_around_pt](https://leandro-90.github.io/web_project_around_pt/)

<!--
  DICA: adicione capturas de tela para deixar o README ainda mais profissional.
  1. Crie a pasta docs/ e salve as imagens (ex.: docs/desktop.png, docs/mobile.png).
  2. Remova os marcadores de comentário em volta do bloco abaixo.

<div align="center">
  <img src="./docs/desktop.png" alt="Around The U.S. em desktop" width="720" />
  <img src="./docs/mobile.png" alt="Around The U.S. em dispositivo móvel" width="220" />
</div>
-->

O site já abre com **seis cartões de exemplo**: Vale de Yosemite, Lago Louise, Montanhas Carecas, Latemar, Parque Nacional da Vanoise e Lago di Braies.

<p align="right"><a href="#readme-topo">⬆ voltar ao topo</a></p>

---

## ✨ Funcionalidades

| Recurso | Descrição |
| --- | --- |
| 👤 **Edição de perfil** | Modal com formulário para alterar nome e descrição. Os campos já abrem preenchidos com os valores atuais. |
| 🖼️ **Novo local** | Modal para criar um cartão com título e link de imagem (ambos obrigatórios; o link é validado como URL). |
| ❤️ **Curtir** | Botão de curtir em cada cartão, com estado ativo alternável. |
| 🗑️ **Excluir** | Remove o cartão da galeria instantaneamente. |
| 🔍 **Imagem ampliada** | Ao clicar na foto, abre um modal com a imagem em destaque e a legenda. |
| 🧱 **Cartões dinâmicos** | Cartões gerados por JavaScript a partir de uma lista inicial e de um `<template>` HTML. Os novos aparecem no topo da galeria. |
| 📱 **Layout responsivo** | Grade que se adapta à largura da tela, com ajustes específicos para telas de até 544 px. |
| ♿ **Acessibilidade básica** | HTML semântico, `lang="pt-BR"`, texto alternativo nas imagens e `aria-label` em todos os botões de ícone. |

<p align="right"><a href="#readme-topo">⬆ voltar ao topo</a></p>

---

## 🧰 Tecnologias

<div align="center">

| Camada | Tecnologia | Uso no projeto |
| :---: | :--- | :--- |
| **Marcação** | ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat-square) | Estrutura semântica (`header`, `main`, `section`, `footer`), `<template>` para os cartões e formulários nativos com validação (`required`, `type="url"`). |
| **Estilo** | ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat-square) | Metodologia BEM, **CSS Grid** (`repeat(auto-fit, 282px)`), **Flexbox**, *media queries*, `position: fixed` para os modais e `@import` para modularizar o CSS. |
| **Lógica** | ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square) | JavaScript ES6+ puro: `querySelector`, `addEventListener`, `classList`, `closest`, `importNode`, desestruturação e parâmetros padrão. |
| **Reset** | `normalize.css` | Padronização de estilos entre navegadores (pasta `vendor/`). |
| **Tipografia** | Inter (`fonts.css`) | Fonte declarada em `vendor/fonts.css` e aplicada com *fallback* para Arial e sans-serif. |
| **Qualidade** | ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=black&style=flat-square) | Formatação consistente do código (`.prettierignore` configurado). |
| **Versionamento** | ![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white&style=flat-square) ![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&style=flat-square) | Controle de versão e hospedagem do código. |
| **Hospedagem** | ![GitHub Pages](https://img.shields.io/badge/-GitHub%20Pages-222222?logo=githubpages&logoColor=white&style=flat-square) | Publicação estática do site. |

</div>

<p align="right"><a href="#readme-topo">⬆ voltar ao topo</a></p>

---

## 📂 Arquitetura e estrutura de pastas

O CSS segue a organização **BEM com arquivos por bloco** (*Nested BEM file structure*): cada bloco da interface tem o seu próprio arquivo, e um único ponto de entrada importa todos eles.

```text
web_project_around_pt/
├── 📁 blocks/            # Um arquivo CSS por bloco BEM
│   ├── page.css
│   ├── header.css
│   ├── content.css
│   ├── profile.css
│   ├── cards.css         # Grade (lista) de cartões
│   ├── card.css          # Cartão individual
│   ├── popup.css         # Modais (perfil, novo local, imagem)
│   └── footer.css
├── 📁 images/            # Logo, avatar, ícones SVG e placeholder
├── 📁 pages/
│   └── index.css         # Ponto de entrada: importa vendor/ e blocks/
├── 📁 scripts/
│   └── index.js          # Toda a lógica da aplicação
├── 📁 vendor/
│   ├── normalize.css     # Reset entre navegadores
│   └── fonts.css         # Declarações da fonte Inter
├── .prettierignore
├── index.html            # Estrutura da página, modais e <template> do cartão
└── README.md
```

### Fluxo da aplicação

```text
 Carregamento da página
          │
          ▼
 initialCards.forEach ──► renderCard() ──► getCardElement()  (clona o <template>)
                                                │
              ┌─────────────────────────────────┼───────────────────────────┐
              ▼                                 ▼                           ▼
     handleLikeButtonClick          handleDeleteButtonClick        handleImageClick
     (alterna estado ativo)         (remove o cartão)              (abre o modal de imagem)
```

<p align="right"><a href="#readme-topo">⬆ voltar ao topo</a></p>

---

## 🧠 Destaques técnicos

- **Componentização com `<template>`:** o cartão é definido uma única vez no HTML e clonado com `document.importNode`, evitando strings de HTML dentro do JavaScript.
- **Funções pequenas e com responsabilidade única:** `openModal`, `closeModal`, `fillProfileForm`, `getCardElement`, `renderCard` e os `handle…` de cada evento.
- **Parâmetros padrão e desestruturação:** `getCardElement({ name = "Lugar sem nome", link = "./images/placeholder.jpg" })` garante um cartão válido mesmo com dados incompletos.
- **Estado dos modais via classe CSS:** o modificador `popup_is-opened` controla a exibição, mantendo a lógica visual no CSS e o JavaScript enxuto.
- **Delegação por contexto com `closest`:** `event.target.closest(".card").remove()` exclui o cartão certo sem precisar de identificadores.
- **Grade fluida:** `grid-template-columns: repeat(auto-fit, 282px)` reorganiza as colunas sozinha conforme a largura da janela.
- **Validação nativa do HTML:** `required` e `type="url"` impedem o envio de formulários inválidos sem nenhum código extra.
- **Novos cartões em primeiro lugar:** `container.prepend(...)` coloca a publicação mais recente no topo da galeria.

<p align="right"><a href="#readme-topo">⬆ voltar ao topo</a></p>

---

## 🚀 Como executar

Não há dependências, *build* nem gerenciador de pacotes: é só HTML, CSS e JavaScript.

### Pré-requisitos

- Um navegador moderno (Chrome, Edge, Firefox ou Safari).
- [Git](https://git-scm.com/) (opcional, para clonar o repositório).

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/Leandro-90/web_project_around_pt.git

# 2. Entre na pasta do projeto
cd web_project_around_pt

# 3. Abra o index.html no navegador
#    (clique duas vezes no arquivo ou use uma extensão como o Live Server do VS Code)
```

### Executando com um servidor local (opcional)

```bash
# Python 3
python -m http.server 5500

# ou Node.js
npx serve .
```

Depois acesse `http://localhost:5500`.

### Formatando o código (opcional)

```bash
npx prettier --write .
```

<p align="right"><a href="#readme-topo">⬆ voltar ao topo</a></p>

---

## 🌐 Deploy

O site está publicado com o **GitHub Pages**. Para publicar a sua própria cópia do projeto:

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`.
4. Salve. Em poucos minutos o site fica disponível em `https://<usuario>.github.io/web_project_around_pt/`.

<p align="right"><a href="#readme-topo">⬆ voltar ao topo</a></p>

---

## 📚 Aprendizados

- Organização de CSS escalável com **BEM** e arquivos por bloco.
- Construção de layouts com **Grid** e **Flexbox** e ajustes por *media queries*.
- Manipulação do **DOM** e tratamento de **eventos** com JavaScript puro.
- Criação de **modais** acessíveis ao clique e reaproveitamento de componentes com `<template>`.
- Fluxo de trabalho com **Git e GitHub**, incluindo publicação no **GitHub Pages**.

<p align="right"><a href="#readme-topo">⬆ voltar ao topo</a></p>

---

## 📈 Roadmap

Melhorias planejadas para as próximas versões:

- [ ] Fechar os modais com a tecla **Esc** e com clique no fundo (*overlay*).
- [ ] Validação de formulários com mensagens de erro personalizadas.
- [ ] Persistir perfil e cartões com `localStorage`.
- [ ] Animações de abertura e fechamento dos modais.
- [ ] Refatorar a lógica em classes ou módulos ES (`import` / `export`).
- [ ] Integração com uma API para carregar e salvar os dados.
- [ ] Testes automatizados e verificação de acessibilidade (Lighthouse).

<p align="right"><a href="#readme-topo">⬆ voltar ao topo</a></p>

---

## 🤝 Como contribuir

Sugestões e correções são bem-vindas.

1. Faça um *fork* do projeto.
2. Crie uma branch para a sua alteração: `git checkout -b feature/minha-melhoria`
3. Faça o *commit*: `git commit -m "feat: descreve a melhoria"`
4. Envie para o seu repositório: `git push origin feature/minha-melhoria`
5. Abra um **Pull Request** explicando o que mudou.

---

## 📄 Licença e créditos

Este é um **projeto educacional**, desenvolvido como parte do bootcamp da [**TripleTen**](https://tripleten.com.br/).

- A estrutura inicial do projeto, o design de referência e as imagens dos cartões de exemplo fazem parte do material didático da TripleTen e são utilizados aqui exclusivamente para fins de aprendizagem.
- O código do repositório foi desenvolvido e adaptado pelo autor ao longo do curso.
- Este repositório **não define uma licença de software livre**. Se quiser reutilizar o código, entre em contato com o autor.

> Caso o autor adote uma licença no futuro (por exemplo, MIT), basta adicionar um arquivo `LICENSE` na raiz e atualizar esta seção.

---

## 👤 Autor

<div align="center">

**Leandro**

[![GitHub](https://img.shields.io/badge/GitHub-leandro--90-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/leandro-90)

Feito com dedicação durante a jornada de aprendizado em desenvolvimento web. ⭐ Se o projeto foi útil ou inspirador, deixe uma estrela no repositório!

<sub>© 2026 Around The U.S. · Projeto educacional TripleTen</sub>

</div>