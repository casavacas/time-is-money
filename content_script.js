
//console.log("print 2");
$(function() {
	chrome.storage.local.get('wage', function(items) {
		console.log(items);
		var wage = parseFloat(items.wage);
		//console.log(wage);
		var searchedText = '$';
		//console.log("print 3");
		var foundin = $('div:contains("'+searchedText+'")');
		foundin.each( function( i, element){
			console.log(i);
			console.log(element);
			var str = $(this)[0].innerHTML;
			//console.log(str);
			console.log(str.indexOf('$'));
			console.log(str.indexOf('.'));
			console.log(str.indexOf('.') - str.indexOf('$'));
			var str1 = '';
			var x = 0;
			//console.log(x);
			while (str.indexOf('$') >= 0 && str.indexOf('.') >= 0 && x<10){
				var i = str.indexOf('.') - str.indexOf('$');
				//console.log("i");
				//console.log(i);
				if (i < 10 && i >=1){
					//console.log(true);
					var numer = str.substring(str.indexOf('$')+1, str.indexOf('.'));
					var a = parseInt(numer);
					//console.log(a);
					var dec = str.substring(str.indexOf('.')+1, str.indexOf('.')+3);
					//console.log(dec);	
					var d = parseInt(dec);
					var ans = a+d/100;
					// console.log (ans);
					// console.log( Math.round(ans/wage*100)/100.0);
					console.log("hours");
					var hours =  Math.round(ans/wage*100)/100.0;
					str1 	+= str.substring(0, str.indexOf('$')) + hours ;
					str1 	+= ' hours';
					console.log(str1);
					$(this).html(str1);
					str =  str.substring(str.indexOf('.')+3, str.length);
					console.log(str);
				}x++;
			}
			if (str.indexOf('$') >= 0 && str.indexOf('.') >= 0){
				
			}
		});		
	});
	
});