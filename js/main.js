$(document).ready(function(){


	$('header nav ul.menu > li').click(function(){
		var menuIndex = $(this).index();

		if(menuIndex == 0){
			$('html, body').animate({scrollTop: 0}, 1000);
		}else if(menuIndex == 1){
			$('html, body').animate({scrollTop: $('.skills').offset().top - 80}, 1000);
		}else if(menuIndex == 2){
			$('html, body').animate({scrollTop: $('.gallery').offset().top - 80}, 1000);
		}else if(menuIndex == 3){
			$('html, body').animate({scrollTop: $('.social').offset().top - 80}, 1000);
		}

		return false;
	});

	$('.intro .intro-info').click(function(){
		$(this).html("rahasia wkwk");
		return false;
	});	

	// Scroll to top
	$('.totop').click(function(){
		$('html, body').animate({scrollTop: 0}, 1000)
	});

	$(window).scroll(function(){
		
		var wScroll = $(this).scrollTop();
		

		// Scroll value
		$('.scroll > p').html(wScroll);

		// Show & hide to top button
		if(wScroll > $('.intro').offset().top){
			$('.totop').css({
				'opacity': '.9',
				'cursor': 'pointer'
			});
		}else{
			$('.totop').css({
				'opacity': '0',
				'cursor': 'default'
			});
		}


		// Skills Scroll
		if(wScroll > $('.skills').offset().top - $(window).height() ){
			var offset = Math.min(0, wScroll - $('.skills').offset().top + 300);
			$('.skills').css({
				'transform': 'translate('+ offset + 'px' + ')'
				// 'opacity': ''+ wScroll / $('.skills').height() * .8 +''
			});
		}


		if(wScroll > $('.skills').offset().top){
			$('.gallery').css({'opacity': '1'});
			$('.gallery').addClass('animated bounceInUp');
		}


	});


});