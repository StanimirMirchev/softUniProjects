function calcSupply(value,value2,value3){
	var agesToEat = value2 - value ;
	var foodForOneYear = 365 * value3;
	var foodForLife = agesToEat * foodForOneYear;
	foodForLife = Math.floor(foodForLife);

	if(foodForLife < 20000)
	{
		var string = foodForLife  + "kg of chocolate would be enough until I am "  + value2 + " years old";
		return string;
	}
	else if(foodForLife < 35000)
	{
		var string = foodForLife  + "kg of fruits would be enough until I am " + value2 + " years old";
		return string;
	}
	else
	{
		var string = foodForLife  + "kg of nuts would be enough until I am " + value2 + " years old";
		return string;
	}

}

console.log(calcSupply(38,118,0.5));
console.log(calcSupply(20,87,2));
console.log(calcSupply(16,102,1.1));