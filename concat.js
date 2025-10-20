
let reverse='';

const sentences='I am learning web dev';

// for (const sentence of sentences){
//     // console.log(sentence)
//     reverse=sentence+reverse;
// }
// console.log(reverse)

let rev=0;

for (let i = 0;i<=sentences.length;i++){


    console.log(i)
    console.log(sentences[i]);
    const letter=sentences[i];
    rev=letter+rev;
}