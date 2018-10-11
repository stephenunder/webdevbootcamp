//1
let one = -10;
while (one < 20) {
	console.log(one);
	one++;
}

//2
let two = 10;
while (two <= 40) {
	console.log(two);
	two += 2;
}

//3
// let three = 301;
// while (three < 334) {
// 	console.log(three);
// 	three += 2;
// }

let three = 300;
while (three <=333) {
  if (three % 2 !== 0) {
  	console.log(three);
  }
  three++;
}

//4
let four = 5;
while (four <= 50) {
  if (four % 3 === 0 && four % 5 === 0) {
  	console.log(four);
  }
  four++;
}