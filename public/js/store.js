window.onload = function(){
    var storeShop = document.getElementById("storeShop");
    var u1 = document.getElementById("list_son1");
    var u2 = document.getElementById("list_son2");
    u2.innerHTML = u1.innerHTML;    
    function go(){
        if(u2.offsetWidth-storeShop.scrollLeft<=0){    /*offsetWidth:u2可见区域的宽；scrollLeft：d1左边被卷去的长度*/
            storeShop.scrollLeft-=u2.offsetWidth;
        } else {
            storeShop.scrollLeft++;
        }
    }
    var run = setInterval(go,20);
    storeShop.onmouseover = function(){    /*鼠标进过清除定时器*/
        window.clearInterval(run);
    }
    storeShop.onmouseout = function(){    /*鼠标移开继续轮播*/
        run = setInterval(go,20);
    }
}