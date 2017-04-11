
  $( document ).ready(function() {
	  
	  
		$("#ProfileTab" ).hide();
		$('#profile a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
		$("#ProfileTab").css("display: visible")
		
	})


  });