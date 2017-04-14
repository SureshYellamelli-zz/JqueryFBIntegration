
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
 
  var myFacebookToken = 'EAACEdEose0cBAMTZAuoyQABi9AV9HDOVk7tqN1ItvRKuOkfktORcURdwayrMa9ydZCIesUFWSIiCBPCXPr31gN5ZBuX86mIdlaTGLfLgAetZAkIhlotAv0OKDzMh6eH24gfhS6Uw01um4ZBdrUzrjfZCLdhMKaJZC3PFbynSncTtNPCW53LSRFY';


 	function getFacebookProfile(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{
                success : function(response){
                   $("#name").text(response.name);
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);                   
 					$("#myBirthDay").text(response.birthday);

 					var school,college;
					jQuery.each( response.education, function( i, value ) {		
							jQuery.each( value, function( i, val ) {	
								if(i === 'school'){									
									jQuery.each( val, function( i, source ) {
											if(i === 'name'){
												school = source;
											}
									});									
								}
								if(val === 'High School'){									
									$("#mySchool").text(school.toUpperCase());
								}
								if(val ==='College'){
									$("#myCollage").text(school.toUpperCase());
								}
						});
					});
                }
            }
        );
    }


    function getFacebookFeed(){
   	  $.ajax('https://graph.facebook.com/me/feed?access_token='+myFacebookToken+'&limit=20&fields=from,name,message,created_time,story' ,{
              success : function(response){
              	var htmltext = '';
               	jQuery.each(response, function( i, value ) {           		
            		jQuery.each(value, function( j, val ) {
            		 	jQuery.each(val, function(k, test ) {            		
            	 			if (k === 'message' || k === 'story'){
            	 				htmltext +=  test + "<br>";            	 				
            	 		}
            		});		
            	});
            });	
        }
    });
    }

    $("#facebookBtn").on('click',getFacebookProfile);
  	$("#feedBtn").on('click',getFacebookFeed);
			
  });