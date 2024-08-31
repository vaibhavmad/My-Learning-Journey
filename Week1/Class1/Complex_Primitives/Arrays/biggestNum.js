let numberArray = [1, 2, 3, 4, 5, 6, 7, 19, 21, 99, 84];

let biggestNum = 0;

for (let i = 0; i <= numberArray.length; i++){
    if (numberArray[i] > biggestNum){
        biggestNum = numberArray[i]
    }
}
console.log("The biggest nunber in the given list is " + biggestNum)


