function ReversingNumber(num){
    let rem, Rev = 0;

    while(num !== 0){
        rem = num % 10;
        Rev = Rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return Rev;
}

console.log(ReversingNumber(267));
console.log(ReversingNumber(48067));