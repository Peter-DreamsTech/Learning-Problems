function Sec_Large(arr){
    let large = arr[0];
    let Sec_large;
    for(let i=1; i<=arr.length; i++){
        if(arr[i] > large){

            Sec_Large = large;
            large = arr[i];

            console.log(i ,"-", Sec_Large, "<" ,large);
        }
        else if(Sec_Large < arr[i]){
            Sec_Large = arr[i]

            console.log(i ,"-", Sec_Large, "<" ,large);
        }
    }

    return Sec_Large;
}

console.log(Sec_Large([1,5,7,3,785,3,7,98,34,23]));