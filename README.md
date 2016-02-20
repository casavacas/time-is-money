"# time-is-money" 

This is a project by Alexis, Henry, Nick, and Rob for Mhacks on Feb 20, 2016.
This web chrome extension app will look at the text in a web page and replace
all money values (number in after a '$' sign) with the number of hours you 
would have to work to earn that much money. For example, if you earn $10/hour
and you visit the amazon page for an item priced at $15, it will replace the 
'$15' text with '1.5 hours'. 


from Chris: 

Oh forgot to mention

[9:37] 
Now that you have that "items" object, you should put all your searching code inside of that function from chrome.storage.local.get

[9:38] 
Right now it's just outside, so it needs to be brought in so that "anonymous" function wraps all of it
