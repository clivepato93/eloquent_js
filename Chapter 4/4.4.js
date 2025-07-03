// function deepEqual(obj1, obj2) {
// 	const keys = Object.keys(obj1);
// 	const keys2 = Object.keys(obj2);

//      if (a == null || typeof a != "object" ||
//       b == null || typeof b != "object") return false;

// 	if (keys.length != keys2.length) {
// 		return false;
// 	}
// 	for (const key of keys) {
// 		if (typeof obj1[key] === "object" && typeof obj1[key] != null) {
// 			return deepEqual(obj1[key], obj2[key]);
// 		} else if (JSON.stringify(obj1[key]) === JSON.stringify(obj2[key])) {
// 			continue;
// 		} else {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// function deepEqual(obj1, obj2) {
// 	if(obj1===obj2) return true ;
// 	const keys = Object.keys(obj1);
// 	const keys2 = Object.keys(obj2);

// 	if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object")
// 		return false;

// 	if (keys.length != keys2.length) {
// 		return false;
// 	}
// 	for (const key of keys) {
// 		if (!obj2.hasOwnProperty(key)||!deepEqual(obj1[key],obj2[key])) {
// 			return false;
// 		}

// 	}
// 	return true;
// }

// let obj = { here: { is: "an" }, object: 2 };
// let obj3 = { here: { is: "an" }, object: 2 };

// const objA = {
// 	name: "Alice",
// 	age: 30,
// 	active: true,
// 	tags: ["dev", "js"],
// 	address: {
// 		city: "Wonderland",
// 		zip: 12345,
// 	},
// 	score: null,
// 	notes: undefined,
// };
// const objB = {
// 	name: "Alice",
// 	age: 30,
// 	active: true,
// 	tags: ["dev", "js", "ai"], // extra tag
// 	address: {
// 		city: "Wonderland",
// 		zip: 54321, // different zip
// 	},
// 	score: null,
// 	notes: undefined,
// };
// changed objB
// const objB = {
// 	name: "Alice",
// 	age: 30,
// 	active: true,
// 	tags: ["dev", "js"], // extra tag
// 	address: {
// 		city: "Wonderland",
// 		zip: 54321, // different zip
// 	},
// 	score: null,
// 	notes: undefined,
// };

// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, obj3));
// → true
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
// console.log(deepEqual(objA, objB));
