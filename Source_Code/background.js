var dataObj = {'wage': 10.00};
document.getElementById("submit").addEventListener("click", function(){
	console.log("listening");
	var wage = document.forms["inputForm"]["wage"].value;
	console.log(wage);
	chrome.storage.local.set({'wage': wage}, function() {
		dataObj['wage'] = wage;
		console.log('settings saved');
	});

    chrome.tabs.getSelected(null, function(tab) {
    var code = 'window.location.reload();';
    chrome.tabs.executeScript(tab.id, {code: code});
    });

});