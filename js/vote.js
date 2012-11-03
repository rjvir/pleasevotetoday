$(document).ready(function(){
	
	Parse.initialize("owJbCZgSppWgEw942LmPnkAqcpptSetm2zjj1Vt4", "99YVWDdOmrkPgXKYPW2I52kqNEkGfb41Eo8UPIds");
	
	$(".submit").click(function() {
		//Grab data from entry field and split by commas
		var str= ($(".form").val());
		var n=str.split(",");
		//maybe they do newline split rather than commas
		
		//initialize db storage names
		var PleaseVoteToday = Parse.Object.extend("PleaseVoteToday");
		
		//initialize regexp to strip everything except numbers
		var patt = /'g'/[0-9];
		
		//loop through array of separated numbers sending them to db
		for (var i = 0; i < n.length; i++) {
			var numbers = new PleaseVoteToday();
			n[i].match(patt);
			n[i] = n[i].replace(/\D/g,'');
			//alert(n[i]);
			//send that shit to parse
			numbers.save(
				{number: n[i]}, 
				{
 	 				success: function(object) {
	    				//alert("yay! it worked");
  					}
  				}
  			)
		}
	alert("See you at the polls!");
	$(".form").val("");	
	})
	
})