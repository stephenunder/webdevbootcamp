let movies = [
  {
	  title: "Star Wars",
	  rating: 5,
	  hasWatched: true
  },
  {
  	title: "Star Trek",
  	rating: 4,
  	hasWatched: false
  },
  {
  	title: "Starship Troopers",
  	rating: 3,
  	hasWatched: false
  }
]

// movies.forEach(function(movie) {
// 	let result = "You have ";
// 	if (movie.hasWatched) {
// 		result += "watched ";
// 	} else {
// 		result += "not seen ";
// 	}
// 	result += "\"" + movie.title + "\" - ";
// 	result += movie.rating + " stars";
// 	console.log(result);
// });

//refactor
function buildString(movie) {
	let result = "You have ";
	if (movie.hasWatched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
}

movies.forEach(function(movie) {
	console.log(buildString(movie));
});