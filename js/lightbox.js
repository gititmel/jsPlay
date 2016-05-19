$(document).ready(function(){
	console.log("lightbox ready");

	$("#lightboxTrigger").click( function(){
		$("#lightbox").fadeIn( 2000 );
	})

	$("#closeBtn").click( function(){
		$("#lightbox").hide();
	})

});