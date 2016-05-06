

$(document).ready(function() {

    $(document).on("click", "#change-red", function() {
    	$("#red-div")
    		.css ("background-color", "red");
    });

    $(document).on("click", "#change-green", function() {
		$("#green-div")
			.css("background-color", "green");
	});

	$(document).on("click", "#change-blue", function() {
		$("#blue-div")
			.css("background-color", "blue");
	});

	$(document).on("click", "#make-big", function() {
    	$("#big-div").toggleClass("big-red");
    		
    });

	$(document).on("click", "#make-small", function() {
    	$("#small-div").addClass("small-green");
    		
    });

    $(document).on("click", "#animate-div", function() {
    	$("#change-div").toggleClass("animation");
    		
    });

   	$(document).on("click", "#create-overlay", function() {
   		$(".overlay").show();
   	});

    $(document).on("click", ".overlay", function() {
      $(this).hide();
    });




});

