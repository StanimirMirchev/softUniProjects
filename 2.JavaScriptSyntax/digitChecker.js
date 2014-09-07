function checkDigit(number){
	if(number < 1000)
	{
		return false;
	}
	else
	{
		var newNumber  = new Number();
		newNumber = number / 100;
		newNumber = Math.floor(newNumber);
		newNumber = newNumber % 10;
		
		if(newNumber == 3)
		{
			console.log(true);
		}
		else
		{
			console.log(false);
		}

	}

}
checkDigit(1235);
checkDigit(25368);
checkDigit(123456);
