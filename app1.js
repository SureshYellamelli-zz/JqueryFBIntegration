
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
 
  var myFacebookToken = 'EAACEdEose0cBANHEi0ilmuPp0tGP1KucK3VHPcveGz6z1MNwTusDnEGj5VhfguAeznp3Yr8Eiceee8sFZA3hBXwAw2FYzMCtgS4vYmviNINy8AX5hISix18PktWBLaoREZB3EZBNsr33g30LZB3TAU68tGuwT5OHHlzJbmUr0As2XHGMBGuj';


 	function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{
                success : function(response){
                   $("#name").text(response.name);
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);                   
 					$("#myBirthDay").text(response.birthday);

                }
            }
        );
    }
    $("#facebookBtn").on('click',getFacebookInfo)

			
  });