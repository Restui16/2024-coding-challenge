// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }

//   return result;
// };


// const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();
// const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);
const reverseSeq = n => Array.from({length: n}, ()=> n--)

console.log(reverseSeq(5));
