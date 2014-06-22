exports.sumOfEvenFibonacciNumbers = function(n){
	var sum = 0;

	var firstNum = 0;
	var secondNum = 1;
/*
	var result = 0;
	var fibSum = 0;*/

/*	var sumFibEven = 0;
	var sumFib = 0;
	var fib = [];*/

 	for (var i = 0; i < n; i++) {
/* 		if ((result % 2) == 0) {
 			fibSum += result;
 		};*/

 		firstNum += secondNum;
 		sum += firstNum;
		
/*		result = firstNum + secondNum;
		secondNum = firstNum;
		firstNum = result;*/

	};	

	//console.log(function);

 	console.log(sum);

 	//var sumOfEvenFibonacciNumbers = 

 	//console.log(sumOfEvenFibonacciNumbers);

	return sum;
};