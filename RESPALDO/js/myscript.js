$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link'),
    $links = $('#menu').find('a')
  
		$menulink.click(function() {
  		$menulink.toggleClass('active')
  		$menu.toggleClass('active')
  		return false
	});

	$links.click(function(){
		$menulink.toggleClass('active')
		$menu.toggleClass('active')	
	});

	$('.rslides').responsiveSlides()
  	


});

var mq48 = window.matchMedia('(min-width:48em)')

function mediaQueries(mq48) {
	//https://www.youtube.com/watch?v=-LqZt5Z-Tcg
	if (mq48.matches) {
		// Mostrar iframe de video youtube
		document.getElementById('logos-video').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/-LqZt5Z-Tcg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	}else{
		// Mostrar link del video
		document.getElementById('logos-video').innerHTML = '<a href="https://www.youtube.com/watch?v=-LqZt5Z-Tcg" target="_blank"> Ver video</a>'
	}
}

mediaQueries(mq48)
mq48.addListener(mediaQueries)