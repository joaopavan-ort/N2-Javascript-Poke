const backSprite = document.getElementById('backSprite');
const start = document.getElementById('start');
const startDiv = document.getElementById('comeco');
const grass = document.getElementById('grass');
const fire = document.getElementById('fire');
const water = document.getElementById('water');

grass.addEventListener('click', () => {
    backSprite.setAttribute('src', 'imagem/venusaurback.png');
    startDiv.style.display = 'flex';
    fire.style.color = ""; fire.style.backgroundColor = "";
    water.style.color = ""; water.style.backgroundColor = "";
    grass.style.color = "lime"; grass.style.backgroundColor = "green";
})

fire.addEventListener('click', () => {
    backSprite.setAttribute('src', 'imagem/charizardback.png');
    startDiv.style.display = 'flex';
    fire.style.color = "orange"; fire.style.backgroundColor = "red";
    water.style.color = ""; water.style.backgroundColor = "";
    grass.style.color = ""; grass.style.backgroundColor = "";
})

water.addEventListener('click', () => {
    backSprite.setAttribute('src', 'imagem/blastoiseback.png');
    startDiv.style.display = 'flex';
    fire.style.color = ""; fire.style.backgroundColor = "";
    water.style.color = "cyan"; water.style.backgroundColor = "blue";
    grass.style.color = ""; grass.style.backgroundColor = "";
})


start.onclick = () => {
    document.getElementById('batalha').setAttribute('style', 'display: block;');
}