$(document).ready(function() {

		var score = 0;
	
		

	$(document).on("click", "#increase-5", function() {
		// alert("works!");
		score = score + 5;
		$("#score").html(score + " points");
	});

	$(document).on("click", "#decrease-5", function() {
		// alert("works!");
		score = score - 5;
		$("#score").html(score + " points");
	});

	$(document).on("click", "#submit-custom-score", function() {
		score = parseInt($("#custom-score").val());
		$("#score").html(score + "points");
	});


});