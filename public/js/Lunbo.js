
function LbMove(boxID,btn_left,btn_right,btnBox,Car,direction,way,moveLengh,speed,Interval,number){
				var        _ID   = $("#"+boxID+"");
				var  _btn_left   = $("#"+btn_left+"");
				var _btn_right   = $("#"+btn_right+"");
				var    _btnBox   = $("#"+btnBox+"");
				var        jsq   = 0
				var      timer     ;
				var         cj     ;
				var     no_way   = 0;
				var  no_wayGet   = 0;
				var       fade   = 0;
				var   new_time   = new Date;
				
				var ID_liLen , ID_liheight , cbtmBtn ;
				ID_liLen    = _ID.find("li").length;
				ID_liheight = _ID.find("li").innerHeight();
				
				if(direction == "left" || direction == "right"){
					_ID.find("ul").width(ID_liLen*moveLengh);
					}else if(direction == "top" || direction == "bottom"){
						_ID.find("ul").height(ID_liLen*moveLengh);
						_btnBox.hide()
						}else if(direction == "fade"){
							_ID.find("ul").width(moveLengh).height(ID_liheight);
							_ID.find("li").eq(0).show().siblings().hide();
							_ID.find("li").css({"position":"absolute","left":0,"top":0});
							}
				_btnBox.empty();
				for(i=0;i<ID_liLen;i++){
					_btnBox.append("<span></span>");
					};
				_btnBox.find("span").eq(0).addClass("cur");

				if(way == false){
						_btn_left.hide();
						_btn_right.hide();
						_btnBox.hide();
						}
				
				
				function Carousel(){
					if(way == false){
						no_way++;
						
						if(direction == "left"){
							_ID.find("ul").css({"left":-no_way});	
							no_wayGet = parseInt(_ID.find("ul").css("left"));
							if(no_wayGet == -moveLengh){
								no_way = 0
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"left":0});
								}
						}

						if(direction == "right"){
								
							no_wayGet = parseInt(_ID.find("ul").css("left"));
							if(no_wayGet == 0){
								no_way = -moveLengh
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"left":0});
								}
							_ID.find("ul").css({"left":no_way});
						}
						
						if(direction == "top"){
							_ID.find("ul").css({"top":-no_way});	
							no_wayGet = parseInt(_ID.find("ul").css("top"));
							if(no_wayGet == -moveLengh){
								no_way = 0
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"top":0});
								}
						}
						
						if(direction == "bottom"){
								
							no_wayGet = parseInt(_ID.find("ul").css("top"));
							if(no_wayGet == 0){
								no_way = -moveLengh
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"top":0});
								}
							_ID.find("ul").css({"top":no_way});
						}
						
						
						}else if(way == true){

						if(direction == "left"){
							_ID.find("ul").animate({left:-moveLengh},speed,function(){
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"left":0});
								});	
							if(jsq<ID_liLen-1){
								jsq++;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = 0;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									}
							
						}
						
						if(direction == "right"){
							_ID.find("li:last").insertBefore(_ID.find("li:first"));
							_ID.find("ul").css({"left":-moveLengh});
							_ID.find("ul").stop().animate({left:0},speed);
							if(jsq>0){
								jsq--;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = ID_liLen-1;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									}
							
						}
						
						if(direction == "top"){
							_ID.find("ul").animate({top:-moveLengh},speed,function(){
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"top":0});
								});	
						}
						
						if(direction == "bottom"){
							_ID.find("li:last").insertBefore(_ID.find("li:first"));
							_ID.find("ul").css({"top":-moveLengh});
							_ID.find("ul").stop().animate({top:0},speed);
								
						}
						if(direction == "fade"){
							
							if(fade<ID_liLen-1){
								fade++;
								}else{fade = 0}
							_ID.find("li").eq(fade).fadeIn(speed).siblings().fadeOut(speed);
							_btnBox.find("span").eq(fade).addClass("cur").siblings().removeClass("cur");
							
						}
					
					}
					}
					
					
				if(Car == true){
						
					if(ID_liLen>number){
						timer =	setInterval(Carousel,Interval);
						}else{
							clearInterval(timer);
							_btn_left.hide();
							_btn_right.hide();
							_btnBox.hide();
							}
					}else{
						clearInterval(timer);
						}
				_ID.find("li").hover(function(){
					clearInterval(timer);
					},function(){
						if(Car == true){
							if(ID_liLen>number){
								timer =	setInterval(Carousel,Interval);
								}else{
									clearInterval(timer);
									_btn_left.hide();
									_btn_right.hide();
									_btnBox.hide();
									}
							}else{
								clearInterval(timer);
								}
						});
					
					
				_btn_right.hover(function(){
					clearInterval(timer);
					},function(){
						if(Car == true){
							if(ID_liLen>number){
								timer =	setInterval(Carousel,Interval);
								}else{
									clearInterval(timer);
									_btn_left.hide();
									_btn_right.hide();
									_btnBox.hide();
									}
							}else{
								clearInterval(timer);
								}
						
						}).click(function(){
							if(new Date - new_time>500){
								new_time = new Date;
							
							if(direction == "left" || direction == "right"){
								_ID.find("ul").animate({left:-moveLengh},speed,function(){
									_ID.find("li:first").insertAfter(_ID.find("li:last"));
									_ID.find("ul").css({"left":0});
									});	
								}
							
							
							if(direction == "top" || direction == "bottom"){
								_ID.find("ul").animate({top:-moveLengh},speed,function(){
									_ID.find("li:first").insertAfter(_ID.find("li:last"));
									_ID.find("ul").css({"top":0});
									});	
								}
							if(direction == "fade"){
							
							if(fade>0){
								fade--;
								}else{fade = ID_liLen-1}
									_ID.find("li").stop(true,true).eq(fade).fadeIn(speed).siblings().fadeOut(speed);
									
								}
							if(jsq<ID_liLen-1){
								jsq++;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = 0;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									};
							
								
								}else{};
							});
				_btn_left.hover(function(){
					clearInterval(timer);
					},function(){
						if(Car == true){
							if(ID_liLen>number){
								timer =	setInterval(Carousel,Interval);
								}else{
									clearInterval(timer);
									_btn_left.hide();
									_btn_right.hide();
									_btnBox.hide();
									}
							}else{
								clearInterval(timer);
								}
						}).click(function(){
							if(new Date - new_time>500){
								new_time = new Date;

							if(direction == "left" || direction == "right"){
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"left":-moveLengh});
								_ID.find("ul").stop().animate({left:0},speed);
								}
							
							if(direction == "top" || direction == "bottom"){
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"top":-moveLengh});
								_ID.find("ul").stop().animate({top:0},speed);
									
								}
							if(direction == "fade"){
							
							if(fade<ID_liLen-1){
								fade++;
								}else{fade = 0}
									_ID.find("li").stop(true,true).eq(fade).fadeIn(speed).siblings().fadeOut(speed);
									
								}
							if(jsq>0){
								jsq--;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = ID_liLen-1;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									};
								}else{};
							});
					
				_btnBox.find("span").hover(function(){
					clearInterval(timer);

					},function(){
						if(Car == true){
							if(ID_liLen>number){
								timer =	setInterval(Carousel,Interval);
								}else{
									clearInterval(timer);
									_btn_left.hide();
									_btn_right.hide();
									_btnBox.hide();
									}
							}else{
								clearInterval(timer);
								}
						}).click(function(){
							if(new Date - new_time>500){
								new_time = new Date;
							cbtmBtn = $(this).index();
							$(this).addClass("cur").siblings().removeClass("cur");
							if(direction == "fade"){
											_ID.find("li").eq(cbtmBtn).fadeIn(speed).siblings().fadeOut(speed);
										}else{
							if(cbtmBtn>jsq){
								cj =cbtmBtn - jsq;
								jsq = cbtmBtn;
								
								_ID.find("ul").stop().animate({left:-moveLengh*cj},speed,function(){
									for(i=0;i<cj;i++){
										_ID.find("ul").css({"left":0})
										_ID.find("li:first").insertAfter(_ID.find("li:last"));
										};
									});
								}else{
									cj = jsq - cbtmBtn;
									jsq = cbtmBtn;
									_ID.find("ul").css({"left":-moveLengh*cj});
									for(i=0;i<cj;i++){
										_ID.find("ul").stop().animate({left:0},speed);
										_ID.find("li:last").insertBefore(_ID.find("li:first"));
										};
									};
									};
								}else{};
							});
}


var dir=1;//每步移动像素，大＝快
var speed=15;//循环周期（毫秒）大＝慢
var MyMar=null;

function Marquee(){//正常移动
	var scrollbox = document.getElementById("scrollbox");
	var scrollcopy = document.getElementById("scrollcopy");
	if(dir>0&&(scrollcopy.offsetWidth-scrollbox.scrollLeft)<=0){
		scrollbox.scrollLeft=0;
	}
	if(dir<0 &&(scrollbox.scrollLeft<=0)){
		scrollbox.scrollLeft=scrollcopy.offsetWidth;
	}
		scrollbox.scrollLeft+=dir;
}

function onmouseoverMy(){
	window.clearInterval(MyMar);
}//暂停移动

function onmouseoutMy() {
	MyMar=setInterval(Marquee,speed);
}//继续移动

function r_left(){
	if(dir==-1)
	dir=1;
}//换向左移

function r_right(){
	if(dir==1)
	dir=-1;
}//换向右移

function IsIE(){
	var browser=navigator.appName
	if((browser=="Netscape")){
		return false;
	}
	else if(browser=="Microsoft Internet Explorer"){
		return true;
	}else{
		return null;
	}
}

var _IsIE = IsIE();
var _MousePX = 0;
var _MousePY = 0;
var _DivLeft = 0;
var _DivRight = 0;
var _AllDivWidth = 0;
var _AllDivHeight = 0;

function MoveDiv(e){

	var obj = document.getElementById("scrollbox");
	_MousePX = _IsIE ? (document.body.scrollLeft + event.clientX) : e.pageX;
	_MousePY = _IsIE ? (document.body.scrollTop + event.clientY) : e.pageY;
	//Opera Browser Can Support ''window.event'' and ''e.pageX''
	
	var obj1 = null;

	if(obj.getBoundingClientRect){
		//IE
		obj1 = document.getElementById("scrollbox").getBoundingClientRect();
		_DivLeft = obj1.left;
		_DivRight = obj1.right;
		_AllDivWidth = _DivRight - _DivLeft;
	}else if(document.getBoxObjectFor){
		//FireFox
		obj1 = document.getBoxObjectFor(obj); 
		var borderwidth = (obj.style.borderLeftWidth != null && obj.style.borderLeftWidth != "") ? parseInt(obj.style.borderLeftWidth) : 0;
		_DivLeft = parseInt(obj1.x) - parseInt(borderwidth);
		_AllDivWidth = Cut_Px(obj.style.width);
		_DivRight = _DivLeft + _AllDivWidth;
	}else{
		//Other Browser(Opera)
		_DivLeft = obj.offsetLeft;
		_AllDivWidth = Cut_Px(obj.style.width);
		var parent = obj.offsetParent;
		
		if(parent != obj){
			while (parent){  
				_DivLeft += parent.offsetLeft; 
				parent = parent.offsetParent;
			}
		}
		_DivRight = _DivLeft + _AllDivWidth;
	}

	var pos1,pos2;
	pos1 = parseInt(_AllDivWidth * 0.4) + _DivLeft;
	pos2 = parseInt(_AllDivWidth * 0.6) + _DivLeft;

	if(_MousePX > _DivLeft && _MousePX < _DivRight){
		if(_MousePX > _DivLeft && _MousePX < pos1){
			r_left(); //Move left
		}
		else if(_MousePX < _DivRight && _MousePX > pos2){
			r_right(); //Move right
		}
		if(_MousePX > pos1 && _MousePX < pos2){
			onmouseoverMy(); //Stop
			MyMar=null;
		}else if(_MousePX < pos1 || _MousePX > pos2){
			if(MyMar==null){
				MyMar=setInterval(Marquee,speed);
			}
		}
	}
}

function Cut_Px(cswidth){
	cswidth = cswidth.toLowerCase();
	if(cswidth.indexOf("px") != -1){
		cswidth.replace("px","");
		cswidth = parseInt(cswidth);
	}
	return cswidth;
}

function MoveOutDiv(){
	if(MyMar == null){
		MyMar=setInterval(Marquee,speed);
	}
}

