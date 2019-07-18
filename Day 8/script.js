const canvas = document.querySelector('#draw');
const cts = canvas.getContext('2d');
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mouseup', removeDrawing);
canvas.addEventListener('mouseout', removeDrawing);

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
//Define o tamanho dinamico do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//Define  o formato da linha desenhada
cts.lineCoin = 'round';
cts.lineCap = 'round';

//Metodo que cria as linhas
function draw(e) {
    console.log(e);
    //Verifica se o mouse esta clicado
    if (!isDrawing)
        return;
    //Define o tamanho da linha dinamicamente
    cts.strokeStyle = `hsl(${hue}, 100%,50%)`
    cts.beginPath();
    //Start from
    cts.moveTo(lastX, lastY);
    //Goes to
    cts.lineTo(e.offsetX, e.offsetY);
    cts.stroke();
    //Define a ultima posição como o lugar onde o mouse esta
    lastX = e.offsetX;
    lastY = e.offsetY;
    
    hue++;
    if (hue >= 360)
        hue = 0

    if (cts.lineWidth >= 100 || cts.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction === true) {
        cts.lineWidth++;
    } else {
        cts.lineWidth--;
    }

}

function setDrawing(e) {
    isDrawing = true;
}

function removeDrawing() {
    isDrawing = false;
}