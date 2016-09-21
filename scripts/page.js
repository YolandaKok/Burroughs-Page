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

// Open a link in a new window
function newWindow()
{
    window.open("https://en.wikipedia.org/wiki/William_S._Burroughs");
}

// Change the navigation menu
  $( document ).scroll(function() {
    if( $(this).scrollTop() > 100){
      $('.z').addClass('n');
      $('.navi').addClass('nav1');
    }
    else{
      $('.z').removeClass('n');
      $('.navi').removeClass('nav1');
    }
  });

// Change the style of a button using DOM

function imageChange() {
  var button = document.getElementById('info-button');
  button.addEventListener('mouseover', function(event){
    button.style.color = 'white';
    button.style.background = "black";
  });

  button.addEventListener('mouseout', function(event){
    button.style.color = 'black';
    button.style.background = 'white';
  });
}
