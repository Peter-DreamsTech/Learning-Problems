function CountVowelsConsonants(str){
    let consonants = {}, vowels = {};

    for(let char of str){
        if(char === " "){
            continue;
        }
        else if("aeiouAEIOU".includes(char)){
            vowels[char] = (vowels[char] || 0) + 1;
        }
        else{
            consonants[char] = (consonants[char] || 0) + 1;
        }
    }
    return { consonants , vowels }     // Return as objects to get a clear output
    // return [ consonants , vowels ]    
}

console.log(CountVowelsConsonants("Peter"));
console.log(CountVowelsConsonants("Completed Counting Vowels and Consonants separtely"));