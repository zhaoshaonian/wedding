function $(id){
	return document.getElementById(id);
}

//异步对象的创建
function createXhr(){
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}