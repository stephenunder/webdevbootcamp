// var nums = [45, 65, 77, 34];

// myForEach(arr, func)

// myForEach(nums, function(num) {
// 	console.log(num);
// });

function myForEach(arr, func) {
	//loop through array
	for (var i = 0; i < arr.length; i++) {
		//call func for each item in array
    func(arr[i]);
	}
}

Array.prototype.myForEach = function(func) {
	for(var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}