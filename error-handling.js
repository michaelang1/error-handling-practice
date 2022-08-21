// 1;
function sum(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}
try {
	let res = sum(null);
	console.log(res); // not executed
} catch (e) {
	if (e instanceof TypeError) {
		console.error(e.name + ' : ' + e.message);
	}
}

// 2.
function sayName(name) {
	if (typeof name === 'string') {
		console.log(name);
	} else {
		throw new Error('Invalid name! Must be a string!');
	}
}

// tests;
try {
	sayName('Alex');
	sayName(1);
} catch (e) {
	console.error(e.name + ' : ' + e.message);
}

// 3.
function greet(greeting) {
	if (!greeting) {
		throw new Error('There was no greeting given.');
	}

	console.log(greeting);
}

try {
	greet('How are you?');
	greet('');
	// greet(0);
	// greet(null);
	// greet(undefined);
	// greet(NaN);
} catch (e) {
	console.error(e.name + ' : ' + e.message);
}
