function range(start, end, step = 1) {
	const numbers = [];
	if (step < 0) {
		for (start; start >= end; start += step) {
			numbers.push(start);
		}
	} else {
		for (start; start <= end; start += step) {
			numbers.push(start);
		}
	}
	return numbers;
}


function sum(numbers) {
	let total = 0;

	for (let index = 0; index < numbers.length; index++) {
		total += numbers[index];
	}

	return total;
}

// console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));

// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
