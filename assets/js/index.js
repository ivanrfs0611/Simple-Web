$(document).ready(function(){
	var video1 = document.getElementById("berita_video");
	video1.currentTime = 0;
	$(".mute-bt").click(function(){
		if($(this).hasClass("stop"))
		{
			var ban_video = document.getElementById("berita_video");
			$("#ban_video").prop('muted', false);
			$(this).removeClass("stop");
		}
		else{
			var ban_video = document.getElementById("berita_video");
			$("#ban_video").prop('muted', true);
			$(this).addClass("stop");
		}
	});

	$(".play-bt").click(function(){
		$(".play-bt").hide();
		$(".pause-bt").show();
		var ban_video = document.getElementById("berita_video");
		if($(".stop-bt").hasClass("active")){
			ban_video.currentTime = 0;
		}
		ban_video.play();                                         
	});
	$(".pause-bt").click(function(){
		$(".play-bt").show();
		$(".pause-bt").hide();
		$(".pause-bt").addClass("active");
		$(".stop-bt").removeClass("active");
		var ban_video = document.getElementById("berita_video");
		ban_video.pause();                                         
	});
	$(".stop-bt").click(function(){
		$(".play-bt").show();
		$(".pause-bt").hide();
		$(".pause-bt").removeClass("active");
		$(".stop-bt").addClass("active");
		var ban_video = document.getElementById("berita_video");
		ban_video.currentTime = 0;
		ban_video.pause();                                         
	});
});


$(window).scroll(function() {
	if ($(".sticky").offset().top > 100) {
		$(".sticky").addClass("fixed");
	} else {
		$(".sticky").removeClass("fixed");
	}
});


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$(document).on('click', 'a.page-scroll', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});



$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1300);
				return false;
			}
		}
	});
});$('.navbar').affix({
	offset: { top: $('.navbar').offset().top }
});


