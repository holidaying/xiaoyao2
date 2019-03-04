	$(function(){
		var i=0;
		var $btn = $('.section-btn li'),
			$wrap = $('.section-wrap'),
			$arrow = $('.arrow');
		
		/*当前页面赋值*/
		function up(){i++;if(i==$btn.length){i=0};}
		function down(){i--;if(i<0){i=$btn.length-1};}
		if(i<0)    /*先++ 后判断 再执行*/
	        {
	        	i=0;
	        }
	        else if(i>6)
	        {
	        	i=6;
	        }
		
		
		
    $(".section-wrap").height($(window).height()); 
	  var T=$(window).height()/2-$("#circle").height()/2;
      $("#circle").css("top",T);

      /*缩放窗口*/
      $(window).resize(function(event) {
			$(".section-wrap").height($(window).height()); 
		   T=$(window).height()/2-$("#circle").height()/2;
          $("#circle").css("top",T);

      });
	  
	   var T=$(window).height()/2-$("#circle").height()/2;
      $("#circle").css("top",T);
	  
		
		/*页面滑动*/
		function run(){
			$btn.eq(i).addClass('on').siblings().removeClass('on');	
			$wrap.attr("class","section-wrap").addClass(function() { return "put-section-"+i; }).find('.section').eq(i).find('.title').addClass('active');
		};
		
		/*右侧按钮点击*/
		$btn.each(function(index) {
			$(this).click(function(){
				i=index;
				run();
			})
		});
		
		/*翻页按钮点击*/
		$arrow.one('click',go);
		function go(){
			up();run();	
			setTimeout(function(){$arrow.one('click',go)},1000)
		};
		
		/*响应鼠标*/
		$wrap.one('mousewheel',mouse_);
		function mouse_(event){
			if(event.deltaY<0) {up()}
			else{down()}
			run();
			setTimeout(function(){$wrap.one('mousewheel',mouse_)},1000)
		};
		
		/*响应键盘上下键*/
		$(document).one('keydown',k);
		function k(event){
			var e=event||window.event;
			var key=e.keyCode||e.which||e.charCode;
			switch(key)	{
				case 38: down();run();	
				break;
				case 40: up();run();	
				break;
			};
			setTimeout(function(){$(document).one('keydown',k)},1000);
		}
		
		 function fun(delta){
			 var i=0;
       	 if(i<=0)    /*先++ 后判断 再执行*/
	        {
	        	$('section-wrap').addClass('.ul-hover');
	        }
	        else if(i>6)
	        {
	        	i=6;
	        }
       }

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	});
/*lx*/	
	$(function() {
	 $("#lx-box").height($(window).height()); 
	  });  
//方案	
	$(function() {
	 $('.xxk-cp li').click(function(){
	 $(this).addClass('cp-current').siblings().removeClass('cp-current'); 
	  });
	  
	  
    $(".xxk-cp ul li").click(function(){
		var index = $(this).index();
		number = index;
		$('.xq-current ul li').hide();
		$('.xq-current ul li:eq('+index+')').show();
	});	 
// 产品
    $('.xxk-cp1 li').click(function(){
	 $(this).addClass('cp-current').siblings().removeClass('cp-current'); 
	  });
	  
   $(".xxk-cp1 ul li").click(function(){
		var index = $(this).index();
		number = index;
		$('.cp-currrnt .cp-ul .cp-li').hide();
		$('.cp-currrnt .cp-ul .cp-li:eq('+index+')').show();
	});	 
	
}) 
	
//公司简介	
	
$(function(){
	$('.fd-btn li').hover(function(){
		$(this).animate({width:'100px'},300);	
	},function(){
	$(this).animate({width:'69px'},300);	
	});
});	
	
$(document).ready(function(){

	$(".side ul li").hover(function(){
		$(this).find(".sidebox").stop().animate({"width":"124px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#35308F"})	
	},function(){
		$(this).find(".sidebox").stop().animate({"width":"54px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#222"})	
	});
	
});

//回到顶部
function goTop(){
	$('html,body').animate({'scrollTop':0},600);
}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

