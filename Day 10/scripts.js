const checkboxes =  document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);
checkboxes.forEach(x => x.addEventListener('click', handleCheck));

let lastChecked;
let inBetween = false;

function handleCheck(e){
    if(e.shiftKey && this.checked){
     checkboxes.forEach( x => {
         if(x === this || x === lastChecked){
            inBetween = !inBetween;  
         }

         if(inBetween){
             x.checked = true;
         }
     })   
    }
lastChecked = this;
}


