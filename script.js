//1
for (i = 1; i < 8; i++){
    console.log(i);
  }

console.log("========");

//2
for (i = 5; i <= 25; i += 3){
    console.log(i);
  }
  console.log("========");

//3a
const wizards = [
    "Harry Potter", 
    "Hermione Granger", 
    "Ron Weasley"
];

//3b
for (i = 0; i < wizards.length; i++){
    console.log(`${i + 1}. ${wizards[i]}`);
}
console.log("========");
//4a
let harryPotterMovies = 0;

//4b
while (harryPotterMovies <= 7) {
    console.log(harryPotterMovies);
    harryPotterMovies++;
  }
  console.log("========");
//4c
console.log(harryPotterMovies)

//BONUS
//5A
const hogwartHouses = [
    "Gryffindor",
    "Hufflepuff", 
    "Ravenclaw", 
    "Slytherin"
];
console.log("========");
//5B
    for (char of hogwartHouses){
        for (houses of char)
        console.log(houses);
    };

//6A
const quote = [
    "Yer", 
    "A", 
    "Wizard", 
    "Harry"
];

//6B **Review this one again**
// USING A FOR OF LOOP
let sentence = "";
for (word of quote){
  // console.log(word);
  sentence += `${word} `;
  console.log(sentence);
}
console.log(sentence.trim());

// USING A FOR LOOP
// let sentence = "";
// for (i = 0; i < quote.length; i++){
//   console.log(quote[i]);
//   sentence += `${quote[i]} `;
//   console.log(sentence);
// }
// console.log(sentence.trim());


// let sentence = "";
// while (quote !== sentence){
//   console.log(quote.join(" "));
//   break;
// }
