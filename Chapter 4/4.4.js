function deepEqual(obj1, obj2) {
	const keys = Object.keys(obj1);
	const keys2 = Object.keys(obj2);

     if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

	if (keys.length != keys2.length) {
		return false;
	}
	for (const key of keys) {
		if (typeof obj1[key] === "object" && typeof obj1[key] != null) {
			return deepEqual(obj1[key], obj2[key]);
		} else if (JSON.stringify(obj1[key]) === JSON.stringify(obj2[key])) {
			continue;
		} else {
			return false;
		}
	}

	return true;
}

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = { here: { is: "an" }, object: 2 };

const objA = {
	name: "Alice",
	age: 30,
	active: true,
	tags: ["dev", "js"],
	address: {
		city: "Wonderland",
		zip: 12345,
	},
	score: null,
	notes: undefined,
};
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
const objB = {
	name: "Alice",
	age: 30,
	active: true,
	tags: ["dev", "js"], // extra tag
	address: {
		city: "Wonderland",
		zip: 54321, // different zip
	},
	score: null,
	notes: undefined,
};

// console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(objA, objB));
