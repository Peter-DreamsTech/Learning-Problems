function PairsSumsEqualsTarget(Arr, Target){
    for(let i=0; i<Arr.length - 1; i++){
        for(let j=i+1; j<Arr.length; j++){
            if(Arr[i] + Arr[j] === Target){
                return[Arr[i],Arr[j]];
            }
        }
    }
}

console.log(PairsSumsEqualsTarget([2, 7, 11, 15], 18))
console.log(PairsSumsEqualsTarget([2, 7, 11, 15], 9))