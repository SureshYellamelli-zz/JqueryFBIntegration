
  $( document ).ready(function() {	  
	  
		$("#ProfileTab").hide();
		$("#FeedTab").hide();
		
		$('#profile a').click(function (e) {
			$("#FeedTab").hide();
			$("#ProfileTab").show(); })
		
		
		$('#feed a').click(function (e) {
			$("#ProfileTab").hide();
			$("#FeedTab").show(100); })


  });