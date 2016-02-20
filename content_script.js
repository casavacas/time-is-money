console.log("hello");
document.getElementById("submit").addEventListener("click", function(){

	var str = document.forms["inputForm"]["wage"].value;
	console.log(str);
	var wage = parseInt(str);
	console.log(wage);



	$(function() {
		var foundin = $('div:contains("'+searchedText+'")');
		foundin.each( function( i, element){
			console.log(i);
			console.log(element);
			$(this).css("font-weight", "Bold");
			var str = $(this)[0].innerHTML;
			console.log(str);
			console.log(str.indexOf('$'));
			console.log(str.indexOf('.'));
			console.log(str.indexOf('.') - str.indexOf('$'));
			if (str.indexOf('$') >= 0 && str.indexOf('.') >= 0){
				var i = str.indexOf('.') - str.indexOf('$');
				console.log('-------');
				console.log(i);
				if (i < 10 && i >=1){
					console.log(true);
					$(this).css('text-decoration', 'underline');
					var numer = str.substring(str.indexOf('$')+1, str.indexOf('.'));
					var a = parseInt(numer);
					console.log(a);
					var dec = str.substring(str.indexOf('.')+1, str.indexOf('.')+3);
					console.log(dec);	
					var d = parseInt(dec);
					var ans = a+d/100;
					console.log (ans);
					
				}
			}
		});
	});
	
});