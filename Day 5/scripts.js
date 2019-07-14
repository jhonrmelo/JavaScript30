function toggleOpen(){
    this.classList.toggle('open');
}
function toggleActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');   
    }
}   //Adiciona controle de eventos para as propriedades filtradas
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))