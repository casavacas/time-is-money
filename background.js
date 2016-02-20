document.getElementById("submit").addEventListener("click", function(){
<<<<<<< HEAD

    
=======
	console.log("listening");
	var wage = document.forms["inputForm"]["wage"].value;
	console.log(wage);
	chrome.storage.local.set({'wage': wage}, function() {
		console.log('settings saved');
	});
>>>>>>> 5d1c727f454c612e42b41ad6092b2eef4cba7b3e
});