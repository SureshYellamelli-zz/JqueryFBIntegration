
  $(document).ready(function() {	  
	  
		$("#ProfileTab").hide();
		$("#FeedTab").hide();

		$('#profilelink a').click(function (e) {
			$("#FeedTab").hide();
			$("#ProfileTab").show(); 
		    $("#feedlink" ).removeClass( "active" );
		     $("#profilelink" ).addClass( "active" );
		})		
		
		$('#feedlink a').click(function (e) {
			$("#ProfileTab").hide();
			$("#FeedTab").show(100); 
			 $("#profilelink" ).removeClass( "active" );
			 $("#feedlink" ).addClass( "active" );


		})
 
  var myFacebookToken = 'EAACEdEose0cBAOHattDCoCQ1hgZBWZBGkZB3eqtcryqLBMZAhZBSdZB8sBY21C3pwoiOTg6WiZCJzUJvI32e8tklzptPxREsjJ14S04VkdSwt8CK4ZC3rKJI6liBem566CBuUqX3tY7aMnKkA7tKsKdM8pJETe5FxSY0PGN3z0920RQtic8gkL2u';


 	function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{
                success : function(response){
                   $("#name").text(response.name);
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);

                }
            }
        );
    }
    $("#facebookBtn").on('click',getFacebookInfo)

			
  });