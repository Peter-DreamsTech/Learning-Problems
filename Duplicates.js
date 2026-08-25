function Duplicates(arr){
    let seen = new Set();
    let duplicate = new Set();

    for(let num of arr){
        if(seen.has(num)){
            duplicate.add(num)
        }
        else{
            seen.add(num)
        }
    }

    console.log(seen);
    console.log(duplicate);
}

console.log(Duplicates([1,2,6,3,1,3,6,6]));