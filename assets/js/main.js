$(document).ready(function(){

	$(window).scroll(function(){
		var st=$(window).scrollTop();

		if(st+$(window).height()+50>=$('#about-section').position().top){
			$('.block-left').css('left','0px');
			$('.block-right').css('right','0px');
		}

		if(st+$(window).height()+50>=$('.skills').position().top){
			$('.skill-bar').each(function(){
				$(this).find('.skill-percent-bg').css('width',$(this).find('span').text());
			});
		}
	});
	
});