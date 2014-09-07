function findMinAndMax(enteredArray){
	var min = 100000; // Да се напише max стойност
	var max = -100000; // Да се напише min стойност
	for(var i = 0 ; i < enteredArray.length ; i++)
	{
		if(enteredArray[i] < min )
		{
			min = enteredArray[i];
		}
		if(enteredArray[i] > max)
		{
			max = enteredArray[i];
		}
	}
	console.log("Min -> " + min);
	console.log("Max -> " + max);
}

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);