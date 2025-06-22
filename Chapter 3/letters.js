function countBs(string){
    let counter = 0
    for (let index = 0; index < string.length; index++) {
        if(string[index]==='B'){
            counter++;
        }
        
    }
    return counter
}

console.log(countBs('BOB'))

function countChar(string,char){
    let counter = 0
    for (let index = 0; index < string.length; index++) {
        if(string[index]===char){
            counter++;
        }
        
    }
    return counter
}

console.log(countChar('lollypop','l'))