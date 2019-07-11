debugger;
//Pega todos os inputs com a classe controll e joga em uma variavel
const inputs = document.querySelectorAll('.controls input');


function handleUpdate(){
//Pega o sufixo que esta no data da propriedade que esta vindo para o handle e altera os valores dos inputs
const suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
//Percorre os inputs adicionando a propriedade 'listener' que cria o evento ao mexer na propriedade e a mover o mouse, chamando o metodo handle
inputs.forEach( input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));
