$(function(){
	var pageNum = 0;

	for (var i = 0; i < $('.runPage').length; i++) {//初始页数的z-index
		$('.runPage').eq(i).css('z-index',20-2*i);
		$('.runPage').eq(i).children('div').css('z-index',20-2*i);
		$('.runPage').eq(i).children('img').css('z-index',19-2*i);
	};

	$('.nextBtn').bind('click',function(){
			if ( pageNum <= $('.runPage').length-1){
				runNext(pageNum);
			pageNum++;
			};
			console.log(pageNum);					
	});

	function runNext(index){
		$('.runPage').eq(index).addClass('runClass').children('img').addClass('imgRunClass');
		zIndexNext(index,$('.runPage').eq(index));
	}

	function zIndexNext(index,element){
		if ( index >= 1 ) {
			element.css('z-index',15+2*index);
		};	
		setTimeout(function(){
			if (index==0) {
				element.css('z-index',15+2*index);
			};
			element.children('div').css('z-index',14+2*index);
			element.children('img').css('z-index',15+2*index);		
		},1000);
	}

	$('.lastBtn').bind('click',function(){
			if ( pageNum >= 1 ) {				
			pageNum--;
			runLast(pageNum);
			};
			console.log(pageNum);					
	});

	function runLast(index){
		$('.runPage').eq(index).removeClass('runClass');
		zIndexLast(index,$('.runPage').eq(index));
	}

	function zIndexLast(index,element){
		if (index == 0) {
			element.css('z-index',20-2*index);
		};
		setTimeout(function(){
			element.css('z-index',20-2*index);
			element.children('div').css('z-index',20-2*index);
			element.children('img').css('z-index',19-2*index);		
		},1000);
	}
});