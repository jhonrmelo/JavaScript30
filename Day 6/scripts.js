const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let lCities = [];
//Primeira forma de jogar os dados na variavel cities
fetch(endpoint)
    .then(blob => blob.json())
        .then(data => lCities = data);

const cCities = [];
//Segunda forma
fetch(endpoint)
    .then(blob => blob.json())
        .then(data => cCities.push(...data));

const searchBox = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');      
searchBox.addEventListener('change', displayMatches);
searchBox.addEventListener('keyup', displayMatches);

function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex)  || place.state.match(regex);
    });
}

function displayMatches(){
    const MatchArray = findMatches(this.value,lCities);
    const html = MatchArray.map(place => {
        const regex =  new RegExp(this.value, 'gi');
        const cityname = place.city.replace(regex, `<span class="hl"> ${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl"> ${this.value}</span>`)
        return ` 
            <li>
                <span class="name"> ${cityname}, ${stateName}</span>
                <span class="population"> ${numberWithCommas(place.population)}</span>
            </li>
            `;  
        }).join('');
    suggestions.innerHTML = html;   
    //Chama a função que procura todos os objetos filtrados para recuperar o valor deles.
    AddPersonalEvent();
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Feitas por mim
function AddPersonalEvent(){
    const liData = document.querySelectorAll('li');
    liData.forEach(li => li.addEventListener('click', showAlert));
}

function showAlert(){
    alert(`You have clicked in the city ${this.textContent}`);
}

