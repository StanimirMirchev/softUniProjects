function reverseWordsInString(str){
	var currStr = '';
	var newStr = '';
	for(var i = 0 ; i < str.length ; i++)
	{
		if(str[i] != ' ')
		{
			currStr = currStr + str[i];
		}
		else
		{
			for(var j  = currStr.length - 1 ; j >= 0 ; j--)
			{
				newStr = newStr + currStr[j];
			}
			newStr = newStr + ' ';
			currStr = '';
		}
	} 
		if(currStr != '')
		{
			for(var j  = currStr.length - 1 ; j >= 0 ; j--)
			{
				newStr = newStr + currStr[j];
			}
		}
	console.log(newStr);
}

reverseWordsInString("Hello, how are you.");
reverseWordsInString("Life is pretty good, isn’t it?")