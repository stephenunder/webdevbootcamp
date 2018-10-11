//printReverse() , use loop
function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

//isUniform() , variable that keeps track of first index , loop
function isUniform(arr) {
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] !== first) {
			return false;
		}
	}
	return true;
}

// //sumArray() , use loop , var that stores results
function sumArray(arr) {
	var total = 0;
	arr.forEach(function(element) {
		total += element;
	});
	return total;
}

// //max() , use loop, var that stores max number
function max(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}