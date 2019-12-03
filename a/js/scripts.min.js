$(function() {
	$('a[href*="#"]').click(function(e) {
		e.preventDefault();
		var src = $(this).attr('href')
		$('body,html').animate({
			scrollTop: $(src).offset().top
		},500)
	})
	$('.items1, .items2').owlCarousel({
	    loop:true,
	    autoplay: true,
	    nav: true,
	    dots: false,
	    center: true,
	    items: 1,
	    autoplayHoverPause: true,
	    responsiveClass:true,
	    responsive:{
	    	0: {
	    		items: 1,
	    		autoplay: false
	    	},
	    	768: {
	    		autoplay: true
	    	}
	    }
	});
	
	$('.reviews ul').owlCarousel({
	    loop:true,
	    autoplay: true,
	    nav: true,
	    center: true,
	    items: 4,
	    responsiveClass:true,
	    autoplayHoverPause: true,
	    responsive:{
	    	0: {
	    		items: 1,
	    		autoplay: false
	    	},
	    	768: {
	    		items: 3,
	    		autoplay: true
	    	}
	    }
	});
	$( ".tel-input, .tel-input1").keypress(function(evt) {
	  var charCode = (evt.which) ? evt.which : event.keyCode
	      if (charCode > 31 && (charCode < 48 || charCode > 57))
	          return false;
	      return true;
	});
	var cleave = new Cleave('.tel-input', {
	    blocks: [3, 3, 3, 2, 2],
	  	prefix: '+38',
	    delimeters: [' ', ' ', '-', '-'],
	   
	});
	var cleave = new Cleave('.tel-input1', {
	    blocks: [3, 3, 3, 2, 2],
	    prefix: '+38',
	    delimeters: [' ', ' ', '-', '-']
	});
	$('form').submit(function(e) {
 		// e.preventDefault();
 		// formSubmit($(this));
 	});

 	function formSubmit(form) {
			var $form = form,
	    	url = 'https://script.google.com/macros/s/AKfycbw2kTmyvLUy-TqYxaNKS2z8IGxJKzrsCH7BIgFcG-DXFh_4-zs/exec';
			$.ajax({
			    url: url,
			    method: "GET",
			    dataType: "json",
			    data: $form.serialize(),
			    success: function(response) {
			    	console.log('form submitted');
 					// window.location.href = 'https://kvadrat.store/thanks.html';
			    }
			})	
 	}
});
