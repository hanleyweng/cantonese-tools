(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-8326496-6', 'auto');
ga('send', 'pageview');

setUserId();

// Setting User ID
function setUserId() {
	// will just store a random number in local store for now // Not the most reliable thing, especially in companies/schools/libraries

	if (typeof(Storage) !== "undefined") {
		if (!localStorage.randomNumber) {
			localStorage.randomNumber = Math.floor(Math.random() * 1000000000);
		}

		var randomLocalNumber = localStorage.randomNumber;
		ga('set', 'userId', randomLocalNumber); // Set the user ID using signed-in user_id.

		console.log("UID: "+randomLocalNumber);
	} else {
		console.log("Sorry! No Web Storage support..");
	}
}