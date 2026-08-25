function nonRepeatingChar(str){

    let CharFreq = {};

    for(let char of str){
        CharFreq[char] = (CharFreq[char] || 0) + 1
    }

    for(let val of str){
        if(CharFreq[val] === 1){
            return val;
        }
    }
}

console.log(nonRepeatingChar("aabbcde"));