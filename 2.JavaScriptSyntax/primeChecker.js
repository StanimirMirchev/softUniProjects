function isPrime(value){
	var maxDivider = Math.sqrt(value);
	var divider = 2;
	var isPrime = true;

	while(isPrime && divider <= maxDivider)
	{
		if(value % divider == 0)
		{
			isPrime = false;
		}
		divider++;
	}

	return isPrime;
}

console.log(isPrime(7));
console.log(isPrime(254)); 
console.log(isPrime(587)); 