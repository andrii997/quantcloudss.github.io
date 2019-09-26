$(document).ready(function() {

	/*feedback form*/

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	    $('#banner h1').each(function (){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+80) {
	            $('#header').css('padding', '5px 0');
	            $('#header').css('background', 'rgba(1, 44, 78, 0.95)');
	            $('#header').css('border-bottom', '1px solid #113F63');
	        }else{
	        	$('#header').css('padding', '20px 0');
	        	$('#header').css('background', 'none');
	        	$('#header').css('border-bottom', 'none');
	        }
	    });

	    $('#what').each(function (){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+80) {
	            $('.btn-up').css('display', 'flex');
	        }else{
				$('.btn-up').css('display', 'none');
	        }
	    });


	});


$(window).scroll(function (){
    $('#banner h1').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+80) {
            $('#header').css('padding', '5px 0');
            $('#header').css('background', 'rgba(1, 44, 78, 0.95)');
            $('#header').css('border-bottom', '1px solid #113F63');
        }else{
        	$('#header').css('padding', '20px 0');
        	$('#header').css('background', 'none');
        	$('#header').css('border-bottom', 'none');
        }
    });
});

$(window).scroll(function (){
    $('#what').each(function (){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+80) {
            $('.btn-up').css('display', 'flex');
        }else{
			$('.btn-up').css('display', 'none');
        }
    });
});
