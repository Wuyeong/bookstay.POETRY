$(function(){
	$(".notice> ul> li").click(function(){
		$(this).children(".text_info").slideToggle();
		$(this).siblings().children(".text_info").slideUp();
	});
});
$(function(){
	$(".notice> ul> li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
			
		}

	});
});

//이 js 파일 전체를 옮기기//




