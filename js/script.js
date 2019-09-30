$(document).ready(function() {

	/*Header menu*/

	$(".header-menu img").click(function(e){
		e.preventDefault();
		$("#menu").toggleClass("show");
	});

	$("#menu a").click(function(){

		setTimeout(function() {
			$(".header-menu img").click();
		}, 200);
		
	});

	$(document).on('click','.milk-shadow',function(){
		$(".header-menu img").click();
	});

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

	$(function () {
		$('.popup-modal').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
			modal: true
		});
		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
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


$("#software .box").click(function(e) {
  e.preventDefault();
  $("#software .box").removeClass('active');
  $(this).addClass('active');
});

$("#software .box.software-1").click(function(e) {
  $("#software .software-screen img").attr("src","img/software/screen-1.jpg");
});
$("#software .box.software-2").click(function(e) {
  $("#software .software-screen img").attr("src","img/software/screen-2.jpg");
});
$("#software .box.software-3").click(function(e) {
  $("#software .software-screen img").attr("src","img/software/screen-3.jpg");
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('white-popup-block');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


