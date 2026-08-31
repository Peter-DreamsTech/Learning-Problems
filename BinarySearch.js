function BinarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(left<=right){

        let mid = Math.floor((left + right) / 2);
        
        if(arr[mid] === target){
            return [mid , arr[mid]];
        }

        if(target > arr[mid]){
            left = mid +1;
        }
        else{
            right = mid - 1;
        }
    }
    return -1;
}

console.log(BinarySearch([12,23,34,56,67,78,89,90],34));
console.log(BinarySearch([12,23,34,56,67,78,89,90],67));