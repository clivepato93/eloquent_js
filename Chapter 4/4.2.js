let myArray = ["A", "B", "C"];
// console.log(reverseArray(myArray));
// → ["C", "B", "A"];
// console.log(myArray);
function reverseArray(array){
    const newArray= []
    for (let index = 0; index < array.length; index++) {
        newArray.unshift(array[index])
        
    }
    // for (let index = array.length-1; index>=0; index--) {
    //     newArray.push(array[index])
    // }
    return newArray
}
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
function reverseArrayInPlace(arrayValue){
    for (let index = 0; index < Math.floor(arrayValue.length/2); index++) {
            // let old = array[i];
                // array[i] = array[array.length - 1 - i];
                // array[array.length - 1 - i] = old;
        [arrayValue[index],arrayValue[arrayValue.length-(1+index)]] = [arrayValue[arrayValue.length-(1+index)],arrayValue[index]]
        // console.log(arrayValue)
    }
}
console.log(arrayValue);
// → [5, 4, 3, 2, 1]