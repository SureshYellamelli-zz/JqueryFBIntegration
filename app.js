
  $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAHzNdA6NpFZClPEiugXZAazWsZBd2cABOAM892sEhFR5COJZBAJVab4NnF6i8R39tp8YjgGwCCdWy3kqMU87VZBlx9TO1UbU6ocgW94bsfXMZAITujrfBxcsZCyEDjwRiX4r1f9M1jCFDwNvOCfmJ8vaOtUXDZCGgQZDZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);

                }
            }
        );
    }
    $("#facebookBtn").on('click',getFacebookInfo)
  });