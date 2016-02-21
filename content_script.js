$(function load() {
	//reads from background.js and text prompt input
	chrome.storage.local.get('wage', function(items) {
<<<<<<< HEAD
	
	//parses through the text body of the document
	walk(document.body);

	//traverses through nodes in the document
	function walk(node) 
	{

  		var child, next;

 		 switch ( node.nodeType )  
  			{
    			case 1:  // Element
   				case 9:  // Document
    			case 11: // Document fragment
      			child = node.firstChild;
    		  while ( child ) 
      			{
       				 next = child.nextSibling;
        			walk(child);
       				 child = next;
     			 }
     				 break;

    			case 3: // Text node
    			  handleText(node);
 			       break;
  			}
	}

	function handleText(textNode) 
	{
  		var s = textNode.nodeValue;
 		var intIndexOfMatch = s.indexOf( "$" ); // was $
 		//var intSpaceAfter = s.substring(intIndexOfMatch).indexOf(" ");
 		

   		while (intIndexOfMatch != -1){
    	//console.log(intIndexOfMatch); 
    	//get the index of the first space following the $ sign
    	var spaceIndex = intIndexOfMatch + 
                        s.substring(intIndexOfMatch).indexOf(" "); //add in letters
       
    	//var spaceIndex = s.indexOf(" "); 
    	//console.log(spaceIndex); 
   		 //get the string of what is between the '$' and the ' ' 
    	var numString = s.substr((intIndexOfMatch + 1), spaceIndex - 1); 
   		 //console.log(numString); 
    	//turn that string into an int
   		var cost = parseFloat(numString);
   		// console.log(cost);  
    	//send cost to hours to pay
    	var hours = hoursToPay(cost); 
    	//console.log(hours); 
    	hours = hours.toString(); 
    	hours = hours.concat(" hours of work ");  
    	var stringToRemove = s.substring(intIndexOfMatch, spaceIndex);
    	s = s.replace( stringToRemove, " " + hours); //had hours in right 
    
    
    	// Get the index of any next matching substring.
   		intIndexOfMatch = s.indexOf( "$" );
   		
		}

  		textNode.nodeValue = s;
	}

	//calculates how many wage hours a given price input is
	function hoursToPay(cost) 
	{
    	var hourlyWage = items.wage;
   		var finalHours = cost/hourlyWage;
    	var finalHours = finalHours.toFixed(2); 
    	return finalHours; 
	}

  });
	
}); 

=======
		console.log(items);
		var wage = parseFloat(items.wage);
		//console.log(wage);
		var searchedText = '$';
		//console.log("print 3");
		var foundin = $('div:contains("'+searchedText+'")');
		foundin.each( function( i, element){
			console.log(i);
			//console.log(element.);
			var str = $(this)[0].innerHTML;
			//console.log(str);
			//console.log(str.indexOf('$'));
			//console.log(str.indexOf('.'));
			//console.log(str.indexOf('.') - str.indexOf('$'));
			var str1 = str;
			while (str.indexOf('$' >= 0 && str.indexOf('.') >= 0)){
				var i = str.indexOf('.') - str.indexOf('$');
				//console.log(i);
				if (i < 10 && i >=1){
					//console.log(true);
					var numer = str.substring(str.indexOf('$')+1, str.indexOf('.'));
					var a = parseInt(numer);
					console.log(a);
					var dec = str.substring(str.indexOf('.')+1, str.indexOf('.')+3);
					//console.log(dec);	
					var d = parseInt(dec);
					var ans = a+d/100;
					//console.log (ans);
					console.log( Math.round(ans/wage*100)/100.0);
					console.log("hours");
					var hours =  Math.round(ans/wage*100)/100.0;
					str1 	+= str.substring(0, str.indexOf('$')) + hours ;
					str1 	+= ' hours'+ str.substring(str.indexOf('.')+3, str.length);
					$(this).html(str1);
				}
			}
			if (str.indexOf('$') >= 0 && str.indexOf('.') >= 0){
				
			}
		});		
	});
	
});
>>>>>>> 5f3a81ffe3dee3888f5ea46fd1901c3eebaba219
