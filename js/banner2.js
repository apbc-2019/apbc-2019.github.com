<script type="text/javascript">
	var index = 0;
	var imgnum = $('.banner ul li').length;
	var nmun='';
	var imgwidth = $('.banner ul li').width();
	var allimgwidth = imgwidth*imgnum;
	$('.banner ul').css('width',allimgwidth);
	
	
	$('.banner').hover(function(){
		clearInterval(p);
		$('.banner .u').fadeIn();
	},function(){
		pic();
		$('.banner .u').fadeOut();
		});
	
	function pic(){
		
		p=setInterval(function(){
			index++;
			
			if(index>=imgnum){
				index=0;
			}
			
			selectimg(index);
	
		},3000);
		
	}
	
	function selectimg(index){
		$('.banner ul').animate({'margin-left':'-' + imgwidth*index + 'px'},600);
		$('.con a').eq(index).addClass('active').siblings('a').removeClass('active');
	}
	
	
	$('.banner .left').click(function(){
		index-=1;
		if(index<0){
				index=imgnum-1;
			}
		selectimg(index);
		
	});
	
	$('.banner .right').click(function(){
		index+=1;
		if(index>imgnum-1){
				index=0;
			}
		selectimg(index);
		
	});
	
	for(var ni=0;ni<imgnum;ni++){
		nmun +="<a href='javascript:;'></a>";
	}
	$('.banner .con').html(nmun);
	$('.banner .con a').eq(0).addClass('active');
	
	$('.con a').each(function(i){
		$(this).click(function(){
		    index=i;
			$('.banner ul').animate({'margin-left':'-' + imgwidth*i + 'px'},600);
			$('.con a').eq(index).addClass('active').siblings('a').removeClass('active');
		});
	});	
	
	pic();
</script>