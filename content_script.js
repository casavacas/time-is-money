$(function load() {
	//reads from background.js and text prompt input
	chrome.storage.local.get('wage', function(items) {
	
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

