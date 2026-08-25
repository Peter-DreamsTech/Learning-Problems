function ReverseString(str){

    let Reversed = ""

    for(let char of str){
       Reversed = char + Reversed
    }

    return Reversed;
}

console.log(ReverseString("Peter"));
console.log(ReverseString("Peter Is Node.js Dev"));