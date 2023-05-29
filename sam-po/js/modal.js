$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
//modal 2
$(document).ready(function($) {
	$('.popup-open2').click(function() {
		$('.popup-fade2').fadeIn();
		return false;
	});	
	
	$('.popup-close2').click(function() {
		$(this).parents('.popup-fade2').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade2').fadeOut();
		}
	});
	
	$('.popup-fade2').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
//modal 3
$(document).ready(function($) {
	$('.popup-open3').click(function() {
		$('.popup-fade3').fadeIn();
		return false;
	});	
	
	$('.popup-close3').click(function() {
		$(this).parents('.popup-fade3').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade3').fadeOut();
		}
	});
	
	$('.popup-fade3').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
//modal 4
$(document).ready(function($) {
	$('.popup-open4').click(function() {
		$('.popup-fade4').fadeIn();
		return false;
	});	
	
	$('.popup-close4').click(function() {
		$(this).parents('.popup-fade4').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade4').fadeOut();
		}
	});
	
	$('.popup-fade4').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
//modal 5
$(document).ready(function($) {
	$('.popup-open5').click(function() {
		$('.popup-fade5').fadeIn();
		return false;
	});	
	
	$('.popup-close5').click(function() {
		$(this).parents('.popup-fade5').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade5').fadeOut();
		}
	});
	
	$('.popup-fade5').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
//modal 6
$(document).ready(function($) {
	$('.popup-open6').click(function() {
		$('.popup-fade6').fadeIn();
		return false;
	});	
	
	$('.popup-close6').click(function() {
		$(this).parents('.popup-fade6').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade6').fadeOut();
		}
	});
	
	$('.popup-fade6').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
//modal 7
$(document).ready(function($) {
	$('.popup-open7').click(function() {
		$('.popup-fade7').fadeIn();
		return false;
	});	
	
	$('.popup-close7').click(function() {
		$(this).parents('.popup-fade7').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade7').fadeOut();
		}
	});
	
	$('.popup-fade7').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
//modal 8
$(document).ready(function($) {
	$('.popup-open8').click(function() {
		$('.popup-fade8').fadeIn();
		return false;
	});	
	
	$('.popup-close8').click(function() {
		$(this).parents('.popup-fade8').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade8').fadeOut();
		}
	});
	
	$('.popup-fade8').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
//modal 9
$(document).ready(function($) {
	$('.popup-open9').click(function() {
		$('.popup-fade9').fadeIn();
		return false;
	});	
	
	$('.popup-close9').click(function() {
		$(this).parents('.popup-fade9').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade9').fadeOut();
		}
	});
	
	$('.popup-fade9').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});