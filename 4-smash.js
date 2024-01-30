// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// function smash(words) {
//   return words.join(" ");
// }

const smash = words => words.join(" ").trim()

// function smash(words) {
//     let sentences = '';

//     for(let i = 0; i < words.length; i++){
//         sentences += words[i];
//         if(i != words.length -1 ) sentences += " "
//     }

//     return sentences
// }
console.log(smash(["hello", "world"]));
