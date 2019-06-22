
function onloadPage()
{
    window.addEventListener('keydown', playsound);

    function playsound(e)
    {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      
      
        if(!audio)
        {
            console.log("Não há audio para essa tecla");
            return;
        }
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');

    }
    const keys = Array.from(document.querySelectorAll('key'));

    keys.forEach(key => key,addEventListener('transitionend',removeTransiction));


}
