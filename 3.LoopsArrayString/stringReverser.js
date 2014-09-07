function reverseString(string){
	var newString = new String();
	

	for(var i = string.length - 1 ; i >= 0 ; i--)
	{
		newString += string[i];
	}
	return newString;
} 

console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));
