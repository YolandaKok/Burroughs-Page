document.getElementById("info-button").onclick = function () {
        location.href = "https://en.wikipedia.org/wiki/William_S._Burroughs";
    };
// smooth scrolling between the sections
  $(document).ready(function(){
	$('a[href^="#"]').on('click',function (event){
	    event.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
