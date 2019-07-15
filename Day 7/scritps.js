
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const isAdult = people.some(x => {
      const date = new Date();
      const age = date.getFullYear() - x.year;
    if(age >= 19){
        return true;
    }
});
console.log(isAdult);
  // Array.prototype.every() // is everyone 19 or older?
  const isEveryoneAdult = people.every(x => {
    const date = new Date();
    const age = date.getFullYear() - x.year;
  if(age >= 19){
      return true;
  }
  });
  console.log(isEveryoneAdult);
  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const idComment = comments.find(x=> {
      if(x.id === 823423 ){
          return true;
      }
  });
  console.log(idComment);
  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423

  const index = comments.findIndex(x=> {
    x.id === 823423;
  });

    //Apaga o index na posição 1, primeira forma
  comments.splice(index,1);


  
//  Os três pontos evitam dois arrays
//Segunda forma de fazer criando um novo array
 //const newCommentes = [
   //  ...comments.splice(0,index),
    // ...comments.splice(index + 1)
 //]; 