// https://www.codewars.com/kata/5556282156230d0e5e000089

// function DNAtoRNA(dna) {
//     let rna = "";

//     for(let i = 0; i < dna.length; i++){
//         if(dna[i] === "T"){
//             rna += "U";
//         } else {
//             rna += dna[i]
//         }
//     }
    
//     return rna
// }

// const DNAtoRNA = (dna) => dna.split("").map(el => (el === "T" ? "U" : el)).join("")

const DNAtoRNA = (dna) => dna.replaceAll("T", "U");
console.log(DNAtoRNA("TTGT"));