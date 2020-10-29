
function sendTweet() { 

  // activate the spreadsheet

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // select the range of data from the spreadsheet you'd like to tweet
  
  var data = sheet.getRange([X],[Y],[Z]).getValue();
  
  // say you want to take one random string from the range
  
  var n = Math.floor(Math.random() * data.length);
  var select = sheet.getRange([n],[Y]).getValue();
  
  // add your authentication keys
  
  var twitterKeys = {
		TWITTER_CONSUMER_KEY: "INSERT YOUR KEY",
		TWITTER_CONSUMER_SECRET: "INSERT YOUR KEY",
		TWITTER_ACCESS_TOKEN: "INSERT YOUR KEY",
		TWITTER_ACCESS_SECRET: "INSERT YOUR KEY",
	}
	var props = PropertiesService.getScriptProperties();
	props.setProperties(twitterKeys);
	var params = new Array(0);
	var service = new Twitter.OAuth(props);  
  
  if (!service.hasAccess()) {
		console.log("Authentication Failed");
	} else {
		console.log("Authentication Successful");
    
    // here you add what you want in the tweet, you can insert the randomly selected string, add spaces, hashtags, etc
    
		var status = select + " " + "#whateveryouwant";
		try {
			console.log(status);
			var response = service.sendTweet(status, params);
			console.log(response);
		} catch (e) {
			console.log(e)
		}
	}

  }
  
  // and you're done!



