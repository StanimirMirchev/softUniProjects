function divisionBy3(value){
	
	
	
	var sum = 0;
	while(value >= 1)
	{
		sum += value % 10;
		value =Math.floor(value / 10);
	}
	
	if(sum % 3 == 0)
	{   
		var message = "the number is divided by 3 without remainder";
		return message;
	}
	else
	{	
		var message2 = "the number is not divided by 3 without remainder";
		return message2;
	}
	
}

console.log(divisionBy3(12));
console.log(divisionBy3(188));
console.log(divisionBy3(591));