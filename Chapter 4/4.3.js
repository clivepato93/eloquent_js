function arrayToList(array){
let obj= {}
let curr =obj;
for (let index = 0; index < array.length; index++) {
    
        curr.value = array[index]
        if(index+1==array.length){
            curr.rest=null
        }
        else{

            curr.rest = {}
            curr = curr.rest
        }
    
}
return obj
}

// console.log(arrayToList([10,20]))
// → {value: 10, rest: {value: 20, rest: null}}

function listToArray(obj){
    const array = []
    for (obj; obj; obj = obj.rest) {
       array.push(obj.value)
        
    }
    return array
}

// console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

function prepend(value,rest){
return {value,rest}
}

// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}


function nth(list,num){
      if (!list) return undefined;

    if(!num){
    return list.value
}
return nth(list.rest,--num)
}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20