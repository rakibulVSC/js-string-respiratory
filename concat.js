
let reverse='';

const sentences='I am learning web dev';

for (const sentence of sentences){
    // console.log(sentence)
    reverse=sentence+reverse;
}
console.log(reverse)