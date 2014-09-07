function printNumbers(number){
	var massive = new Array();
	var index = -1;
	if(number > 1)
	{	
		for(var i = 1 ; i < number ; i++ )
		{	
			if((i % 4 != 0 ) && (i % 5 != 0 ))
			{   
				index++;
				massive[index] = i;

			}
		}
		console.log(massive.join());
	}
	else
	{
		console.log("no");
	}
}

printNumbers(20);
printNumbers(-5);
printNumbers(13); 