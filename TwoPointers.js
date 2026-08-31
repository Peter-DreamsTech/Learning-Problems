function TwoPointers(arr, target){
    let left = 0;
    let right = arr.length -1

    while(left < right){
        let sum = arr[left] + arr[right];

        if(sum === target){
            return [arr[left], arr[right]];
        }

        if(sum < target){
            left++;
        }
        else{
            right--;
        }
    }
    return -1;
}

console.log(TwoPointers([23,34,45,56,67,78,89,90], 135));
console.log(TwoPointers([23,34,45,56,67,78,89,90], 57));
console.log(TwoPointers([23,34,45,56,67,78,89,90], 59));