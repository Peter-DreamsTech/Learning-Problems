function FirstRepeatingCharacter(str) {
    let StrArray = []
    for(let char of str){
        if(StrArray.includes(char)){
            return char;
        }
        else{
            StrArray.push(char)
        }
    }
}

console.log(FirstRepeatingCharacter("abccddef"));