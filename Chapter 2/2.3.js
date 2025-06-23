const row = 8

for (let index = 0; index < row; index++) {
    let string = '';
    for (let j = 0; j < row; j++) {
        const char=(j+index)%2?'#':' '
        string= string+char
        
    }
    console.log(string)
}