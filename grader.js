function average(scores) {
    // add all scores together
  let total = 0;
  scores.forEach(function(score) {
    total += score;
  });
  // divide by total number of scores
  let avg = total / scores.length;
  // round average
  return Math.round(avg);
}

let scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); // should return 94

let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); // should return 68
