function countSubstringOccur(array){
	array[0] = array[0].toLowerCase();
	var counter = 0;
	var searchWord = array[0].length;
	var res = array[1].substring(0, searchWord);
	for(var i = 0 ; i < array[1].length; i++)
	{	
		res = array[1].substring(i, searchWord);
		res = res.toLowerCase();
		
			if(res == array[0])
			{
				counter++;
			}
		searchWord++;
	}
	console.log(counter);

}

countSubstringOccur(["in", "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]);


