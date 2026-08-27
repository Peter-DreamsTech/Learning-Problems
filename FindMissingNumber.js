function MissingNumber(arr, num){

    let val = num * (num + 1) / 2;
    let Number = arr.reduce((acc, cur) => acc + cur , 0);
    let MissingNumber = val - Number;

    return MissingNumber;

}

console.log(MissingNumber([1,2,3,5], 5));
console.log(MissingNumber([1,3,4,5,6,7,8,9,10], 10)); 
