//1
for (let i = -10; i < 20; i++) {
	console.log(i);
}

//2
// for (let i = 10; i <= 40; i += 2) {
// 	console.log(i);
// }

for (let i = 10; i <=40; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

//3
for (let i = 300; i <= 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}

//4
for (let i = 5; i <= 50; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(i);
	}
}