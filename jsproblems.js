// Round 1
const lengths = (arr) => {
	let wordLength = [];
	for (let i = 0; i < arr.length; i++){
		wordLength.push(arr[i].length);
	};
	return (wordLength);
};

// Round 2
const transmogrifier = (x, y, z) => {
	let transmogrified = Math.pow((x * y), z);
	return (transmogrified);
};

// Round 3
const toonify = (accent, sentence) => {
	let tooned;
	if (accent === "daffy"){
		tooned = sentence.replace(/s/gi, "th");
	}else if (accent === "elmer"){
		tooned = sentence.replace(/r/gi, "w");
	}else{
		tooned = sentence;
	};
	return (tooned);
};

// Round 4
const wordReverse = (sentence) => {
	let arr = [];
	let newSentence = sentence.split(" ").reverse().join(" ");
	return (newSentence);
};

// Round 5
const letterReverse = (sentence) => {
	let newSentence = sentence.split("").reverse().join("").split(" ").reverse().join(" ");
	return (newSentence);
};

// Round 6
const longest = (arr) => {
	let longestWord = "";
	for (i = 0; i < arr.length; i++) {
		if (arr[i].length > longestWord.length){
			longestWord = arr[i];
		};
	};
	return (longestWord);
};

// Final Round
const repMaster = (theInput, theFunction) => {
	let result = theFunction(theInput);
	return (result + " proves that I am the rep MASTER!");
};









































