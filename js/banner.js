$(function(){
			var $banner=$(".main");
			var	$picUl=$(".pic ul");
			var $picLi=(".pic ul li");
			var $tabLi=$(".tab li");
			var $btnA=$(".main .btn a");
			var $imgWidth=$(".pic ul li img").width();
			var nowTime = new Date();
			var index=0;

			var timer=setInterval(function(){
				index++;
				next();
			},2000);

			$banner.hover(function(){
				$(".main .btn").css('display','block');
				clearInterval(timer);	
			},function(){
				$(".main .btn").css('display','none');
				timer=setInterval(function(){
				index++;
				next();
			},2000);
			})
			$tabLi.click(function(){
				 // alert($(this).index());
				
				   index=$(this).index();
					 $(this).addClass('on').siblings().removeClass('on');
					 $picUl.animate({//通过改变ul的margin来达到轮播图片的方法，所以这里$picUl.animate
						marginLeft:-$imgWidth*(index+1)+'px'//index++后，index=1，-$imgWidth*1没有意义，从2开始
					},300);

				})

			$btnA.click(function(){
				 if (new Date() - nowTime > 300) {//当前时间减去上一次时间大于300毫秒才执行
				 	//next()方法动画执行300毫秒，然后后回调函数，回调判断处理index的值，如果不限制时间，
				 	//那一直点击就会出现，index一直加却没有回调函数，所以处理不了Index,index就会脱离限制范围。
					nowTime = new Date();
					i=$(this).index();
					i?index++:index--;
					// alert(index);
					next();	//next方法不是为下一张的方法，当index--时也则为上一张	
					 // $(".main p").text(index);
				}	
			}).mousedown(function () {
        	return false;
    });
			// function show(){
			// 	$picUl.animate({
			// marginLeft:-$imgWidth*(index+1)+'px'
			// 		},300);
			// }
			function next(){

				var indexLi=index;
				//判断下标，最后一张时按钮也要回到第一个
				if(indexLi>=$tabLi.length){
					indexLi=0;
				}
				else if(indexLi<0){
					indexLi=$tabLi.length - 1;
				}

				$tabLi.eq(indexLi).addClass('on').siblings().removeClass("on");

				$picUl.animate({//通过改变ul的margin来达到轮播图片的方法，所以这里$picUl.animate
					marginLeft:-$imgWidth*(index+1)+'px'//index++后，index=1，-$imgWidth*1没有意义，从2开始
				},300,function(){
				//回调函数，动画函数执行完执行，当第七张图时，让图片立即复位
					if(index==$tabLi.length){//tabLi是圆点的数，有七个，通过判断这个li的长度
					//这个方法是上面执行完才会执行，所以会有动画，如果.pic不加头尾的话，就
					//会有图七到空白的动画，然后再在.pic的li里图七后面加个图一,就会有图七轮播到图七的画面,然后再立即复位到-800px,原始图一处;
						$picUl.css('marginLeft',-$imgWidth+'px');
						index=0;
						// alert($tabLi.length);
					}else if(index<0){
						$picUl.css('marginLeft',-$imgWidth*($tabLi.length)+'px');
						index = $tabLi.length - 1;
					}
				});
			}
		})