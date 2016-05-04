window.onload=function(){
	var isTouch="ontouchstart" in window;
	if(isTouch){
		var mousedown="touchstart";
		var mousemove="touchmove";
		var mouseup="touchend";
	}else{
		var mousedown="mousedown";
		var mousemove="mousemove";
		var mouseup="mouseup";
	}

	var banner=document.querySelector(".banner");
	var inner=document.querySelector(".inner");
	var lis=inner.querySelectorAll("li");
	var iw=banner.offsetWidth;
	var i=0;
	var movex=0;  //走到哪
	inner.addEventListener(mousedown,function(e){
		e.preventDefault();
		var stime=e.timeStamp;		
		var e=isTouch?e.changedTouches[0]:e;
		var dx=e.clientX;
		var lengX;
		var mx;
		var dir;
		inner.style.transition="none";
		function moveS(e){
			var e=isTouch?e.changedTouches[0]:e;
			mx=e.clientX;
			lengX=mx-dx;
			// dir=lengX>0?"right":"left";
			inner.style.webkitTransform="translate3d("+(movex+lengX)+"px,0,0)";
		}
		function upS(e){
			var etime=e.timeStamp;
			var lenT=etime-stime;
			if(lengX<0){
				movexy(1);
			}
			else{
				movexy(-1);
			}
			function movexy(a){
				if(Math.abs(lengX)>iw/2||(lenT<100&&Math.abs(lengX)>30)){
					i+=a;
					if(i<0){
						i=0;
					}
					else if(i>lis.length-1){
						i=lis.length-1;
					}
					movex=-i*iw;
					inner.style.transition="transform .3s";
					inner.style.webkitTransform="translate3d("+movex+"px,0,0)";
				}
				else{
					movex=-i*iw;
					inner.style.transition="transform .3s";
					inner.style.webkitTransform="translate3d("+movex+"px,0,0)";
				}
			}
			

			inner.removeEventListener(mousemove,moveS);
			inner.removeEventListener(mouseup,upS);
		}
		inner.addEventListener(mousemove,moveS);
		inner.addEventListener(mouseup,upS);
		
	})
	
	var btn=document.querySelectorAll('.btns li')
	var img=document.querySelectorAll('.inner img')
	// console.log(img)
	var index=0;
	var t=setInterval(move,2000)
	function move(){
		index++;
		if(index>img.length-1){
			index=0;
		}
		for (var i = 0; i < img.length; i++) {
			img[i].style.display="";  
 		    btn[i].style.background="";
		}
		    img[index].style.display="block";
 		    btn[index].style.background="#fff";
	}




var isTouch="ontouchstart" in window;
	if(isTouch){
		var mousedown="touchstart";
		var mousemove="touchmove";
		var mouseup="touchend";
	}else{
		var mousedown="mousedown";
		var mousemove="mousemove";
		var mouseup="mouseup";
	}

	var wriper=document.querySelector(".wriper");
	var slide=document.querySelector(".slide");
	var li=slide.querySelectorAll("li");
	var sw=wriper.offsetWidth;
	var t=0;
	var movex1=0;  //走到哪
	slide.addEventListener(mousedown,function(e){
		e.preventDefault();
		var stime1=e.timeStamp;		
		var e=isTouch?e.changedTouches[0]:e;
		var dx1=e.clientX;
		var lengX1;
		var mx1;
		var dir;
		slide.style.transition="none";
		function moveS(e){
			var e=isTouch?e.changedTouches[0]:e;
			mx1=e.clientX;
			lengX1=mx1-dx1;
			// dir=lengX>0?"right":"left";
			slide.style.webkitTransform="translate3d("+(movex1+lengX1)+"px,0,0)";
		}
		function upS(e){
			var etime1=e.timeStamp;
			var lenT1=etime1-stime1;
			if(lengX1<0){
				movexy1(1);
			}
			else{
				movexy1(-1);
			}
			function movexy1(a){
				if(Math.abs(lengX1)>sw/2||(lenT1<100&&Math.abs(lengX1)>30)){
					t+=a;
					if(t<0){
						t=0;
					}
					else if(t>li.length-1){
						touchstart1=li.length-1;
					}
					movex1=-t*sw;
					slide.style.transition="transform .3s";
					slide.style.webkitTransform="translate3d("+movex1+"px,0,0)";
				}
				else{
					movex1=-t*sw;
					slide.style.transition="transform .3s";
					slide.style.webkitTransform="translate3d("+movex1+"px,0,0)";
				}
			}
			

			slide.removeEventListener(mousemove,moveS);
			slide.removeEventListener(mouseup,upS);
		}
		slide.addEventListener(mousemove,moveS);
		slide.addEventListener(mouseup,upS);
		
	})

























}
