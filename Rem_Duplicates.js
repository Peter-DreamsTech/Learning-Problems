function Remove_Duplicate_Merge(arr1, arr2){
    let set1 = new Set();

    for(let val of arr1){
        set1.add(val);
    }

    for(let val of arr2){
        set1.add(val);
    }

    return set1
}

// ................Optimized Code..........................
// function removeDuplicateMerge(arr1, arr2) {
//     return new Set([...arr1, ...arr2]);
// }

console.log(Remove_Duplicate_Merge([1,2,3,3,2,1,5],[5,6,7,3,8]));