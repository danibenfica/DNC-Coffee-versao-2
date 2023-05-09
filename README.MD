## DNC Coffee

O DNC Coffee é um site que apresenta uma cafeteria fictícia, com informações sobre a empresa, sua história, produtos e contatos. O site possui uma página inicial com um banner de destaque e uma seção "Produtos", que apresenta quatro cartões com imagens e descrições de produtos, cada um com um botão "COMPRAR AGORA". O site também inclui um menu de navegação com links para a página inicial, uma página "Sobre" com informações sobre a empresa e um link para abrir um modal com uma imagem e uma descrição mais detalhada, e uma página "Funcionamento" que pode ser aberta clicando em um link no menu de navegação ou em um botão na página inicial. Há também um botão "Fazer Pedido" no canto superior direito do menu de navegação.

## Arquivos e pastas

index.html: o arquivo HTML da página inicial do site
styles.css: o arquivo CSS do site
index.js: o arquivo JavaScript do site
assets/: uma pasta que contém as imagens usadas no site e os arquivos de estilo e funcionalidades
banner.png: a imagem de destaque da página inicial
image1.png, image2.png, image3.png, image4.png: imagens usadas nos cartões de produtos
logo.png: a imagem do logotipo da cafeteria
sobre.png: a imagem usada no modal da página "Sobre"

## Página inicial
A página inicial do site apresenta um banner de destaque com uma imagem de fundo e um título, seguido por uma seção "Produtos" com quatro cartões de produtos. Cada cartão de produto inclui uma imagem, uma descrição e um botão "COMPRAR AGORA".

O menu de navegação fica na parte superior da página e inclui links para a página inicial, a página "Sobre" e a página "Funcionamento", além de um botão "Fazer Pedido" no canto superior direito.

Página "Sobre"
A página "Sobre" do site apresenta uma imagem e uma descrição da empresa em um modal que é aberto clicando em um link no menu de navegação ou em um botão na página inicial.

Página "Funcionamento"
A página "Funcionamento" do site apresenta informações sobre como a empresa funciona e pode ser aberta clicando em um link no menu de navegação ou em um botão na página inicial.

Funcionalidades:

## Bloco de Código 1

### Descrição
Este bloco de código adiciona um evento de "mouseenter" e "mouseleave" aos elementos com a classe "card-body" em cada elemento com a classe "card" em uma lista de elementos, fazendo com que um botão de compra seja exibido ou oculto.

`cardBody.addEventListener("mouseenter", function() {
        btnBuy.style.display = "block";
    });

    cardBody.addEventListener("mouseleave", function() {
        btnBuy.style.display = "none";
    });`

### Variáveis
- `cards`: uma lista de elementos HTML com a classe "card-group" e "card"
- `card`: um elemento HTML com a classe "card"
- `cardBody`: um elemento filho do elemento "card" com a classe "card-body"
- `btnBuy`: um elemento filho do elemento "card" com a classe "btn-buy"

## Bloco de Código 2

### Descrição
Este bloco de código define uma função "openModal" que exibe um modal na tela ao adicionar a classe "open" ao elemento com o ID "window-modal" e adiciona um evento de clique ao modal para fechá-lo quando o usuário clicar no botão "X" ou no próprio modal.

    `    windowModal.addEventListener('click', (e) => {
        if(e.target.id == 'buttonX' || e.target.id == 'window-modal'){
            windowModal.classList.remove('open')
        }
    })
`

### Funções
- `openModal()`: exibe um modal ao adicionar a classe "open" ao elemento "window-modal" e adiciona um evento de clique ao modal para fechá-lo quando o usuário clicar no botão "X" ou no próprio modal.

`function openModal() {
    const windowModal = document.getElementById('window-modal') 
    windowModal.classList.add('open')}`

O intuito deste projeto é estudar as funcionalidades do JavaScript e do Bootstrap e o que podemos construir com essas ferramentas poderosas.

## Tecnologias utilizadas
O site foi desenvolvido usando as seguintes tecnologias:

### HTML:
A linguagem de marcação usada para estruturar o conteúdo do site.
### CSS: 
A linguagem de estilização usada para dar estilo ao site.
### JavaScript:
a linguagem de programação usada para adicionar interatividade ao site.
### Bootstrap:
Um framework de design responsivo usado para criar o menu de navegação e alguns outros elementos do site.
