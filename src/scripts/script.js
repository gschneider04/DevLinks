

function toogleMode(){
    const html = document.documentElement

    // FAZENDO UMA VERIFICAÇÃO COM CONDICIONAL PARA REMOVER O LIGHT-MODE E ADICIONAR POSTERIORMENTE 

    // if(html.classList.contains('light-mode')){
    //     html.classList.remove('light-mode')
    // } else {
    //     html.classList.add('light-mode')
    // }

    //USANDO UM MÉTODO MAIS FACIL PARA FAZER A TROCA DE MODE
    html.classList.toggle('light-mode');

    const image = document.querySelector("#profile img");
    //Buscar a tag img e substituir a imagem quando tiver light-mode
     if(html.classList.contains('light-mode')){
        image.setAttribute('src', 'src/assets/profile_blue_background.png');
        image.setAttribute('alt', 'Foto de Gustavo Schneider de camiseta verde, cabelo penteado para a vertical, ohando diretamente para a camera. Com uma cor de fundo azul');
    } else {
        image.setAttribute('src', 'src/assets/profile_yellow_background.png');
        image.setAttribute('alt', 'Foto de Gustavo Schneider de camiseta verde, cabelo penteado para a vertical, ohando diretamente para a camera. Com uma cor de fundo amarela');
    };
};