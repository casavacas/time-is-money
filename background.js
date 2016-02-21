document.getElementById("submit").addEventListener("click", function(){

	console.log("listening");
    //reads input from text button prompt
	var wage = document.forms["inputForm"]["wage"].value;
	console.log(wage);
    //saves data locally
	chrome.storage.local.set({'wage': wage}, function() {
		console.log('settings saved');
	});

    chrome.tabs.query({
    active: true,               // Select active tabs
    lastFocusedWindow: true     // In the current window
    }, 
    function(tabs) {
    // Since there can only be one active tab in one active window, 
    //  the array has only one element
    var tab = tabs[0];
    // Javascript to reload the page
    var code = 'window.location.reload();';
    // Execute the code for the current tab
    chrome.tabs.executeScript(tab.id, {code: code});
    });

});
