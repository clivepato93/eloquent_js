


// class ListIterator {
//   constructor(list) {
//     this.list = list;
//   }

//   next() {
//     if (this.list == null) {
//       return {done: true};
//     }
//     let value = this.list.value;
//     this.list = this.list.rest;
//     return {value, done: false};
//   }
// }

class Group {
	// Your code here.
	constructor(array =[]) {
	     this.array = [...new Set(array)];
	}

	has(value) {
		const pos = this.array.indexOf(value);
		if (pos != -1) {
			console.log(` ${value} is in the array, position ${pos}`);

		}
		return pos;
	}
    
    add(value){
        this.has(value)?null:this.array.push(value)
    }

    delete(value){
        const position = this.has(value)
        this.array = this.array.slice(0,position).concat(this.array.slice(position+1))
        console.log(this.array)
    }

	static from(array) {
		// const group = new Group(array);

		return new this(array);
	}

}

Group.prototype[Symbol.iterator]= function(){
    return new GroupIterator(this)
}

class GroupIterator{
    constructor(group){
        this.group = [...group.array]
    }

    next(){
        if(this.group.length==0){

            return {done:true}
        }
        this.value = this.group[0]
        this.group = this.group.slice(1)
        return {value:this.value,done:false}
        
    }
}

let group = Group.from([10, 20]);
    for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

// const test = new GroupIterator(group)
// console.log(test.next())
// console.log(group)