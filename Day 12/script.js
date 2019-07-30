const img = document.querySelector('.fon');
const pressed = [];
const secretcode  = 'hiii';
window.addEventListener('keyup', (e) => {
   pressed.push(e.key); 
   pressed.splice(-secretcode.length -1, pressed.length - secretcode.length); 
if(pressed.join('').includes(secretcode)){
    img.style.display = "block";
    cornify_add();
}
});