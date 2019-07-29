const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
//Variavel que verifica se o mouse esta clicado no momento de mudar o tempo do video    
let mouseDown = false;


video.addEventListener('click', togglePlay);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);
// Double click coloca como fullscreen
video.addEventListener('dblclick', setFullScreen);
//Time update é o evento que captura a mudança no tempo do video,  toda vez que ele ocorre chamo o metodo de handleProgress
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(x  => x.addEventListener('click', skip));
ranges.forEach( x => x.addEventListener('change', handleRangeUpdate));
ranges.forEach( x => x.addEventListener('mouseMove', handleRangeUpdate));
progress.addEventListener('click',scrub);
//Metodo para chamar a mudança do temporizador caso o mouse esteja clicado
progress.addEventListener('mousemove', (e) => {
    if(mouseDown){
        scrub(e);
    }
});
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false)


function togglePlay(){
   if(video.paused){
       video.play()
   }else{
       video.pause();
   }
}
const button = document.querySelector('.buttonpinto');
button.addEventListener('click',setFullScreen);

function setFullScreen(){
    video.requestFullscreen();
}
function handleRangeUpdate(){
video[this.name] = this.value;
}
//Muda a imagem do botão de pause
function updateButton(e){
  if(e.type === "play"){
      toggle.textContent = "►";
  }
  else{
      toggle.textContent= "▌▌";
  }
}
function handleProgress () {
const percent = (video.currentTime / video.duration)*100;
progressBar.style.flexBasis = `${percent}%`;
}
//Metodo que muda o tempo do video
function scrub (e){;
 const scrubTime = (e.offsetX / progress.offsetWidth)* video.duration;
video.currentTime = scrubTime;
}
function skip(e){
    //Dataset.skip manda o valor que esta no html
video.currentTime += parseFloat(this.dataset.skip);
}