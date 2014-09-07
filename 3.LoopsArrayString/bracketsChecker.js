function checkBrackets(inputString){

	var openBrace = 0;
	var closeBrace = 0;
	for(var i = 0 ; i < inputString.length ; i++)
	{
		if(inputString[i] == '(')
		{
			openBrace++;
		}
		if(inputString[i] == ')')
		{
			closeBrace++;
		}
	}
	if(openBrace == closeBrace)
	{
		console.log("correct");
	}
	else
	{
		console.log("incorrect");
	}
} 

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');
