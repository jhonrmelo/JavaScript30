const dogs = [{
    name: 'Snickers',
    age: 2
}, {
    name: 'hugo',
    age: 8
}];


function makeGreen() {
    var p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}
// Regular
console.log('hello');
// Interpolated
var teste = 'teste';
console.log('Hello i am a %s string!', teste);
console.log(`Hello i am a ${teste} string!`);

// Styled
console.log(' %c I am some great text', 'font-size:50px; background-color:red; text-shadow:10px 10px 0 blue')
// warning!
console.warn('deu ruim menor');
// Error :|

console.error('deu mais ruim ainda menor');

// Info
console.info('Teste');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong');

// clearing
//console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
//console.clear();
dogs.forEach(x => { 
console.group(`${x.name}`);
console.log(`This is ${x.name}`);
console.log(`${x.name} is ${x.age} years old`);
console.log(`${x.name} is ${x.age * 7 } years old`);
console.groupEnd(`${x.name}`);
});
// counting
console.count('teste');
console.count('teste');
console.count('teste');
console.count('teste');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

      console.table(dogs);