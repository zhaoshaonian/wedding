(async function(){
    var res= await ajax({
        type:'get',
        url:'http://www.mybasesite.com/team',
        datatype:'json'
    });

    //creative
    var ps=res.creative.slice(res.length);
    var html='';
    for(var i=0;i<6;i++){
        var {cid,img,href,details_href,cname,task}=ps[i];
        html+=`<div class="img_list">
        <div class="demo">
            <div class="box">
                <img src="${img}" alt=""/>
                <div class="box-content">
                    <div class="box-inner-content">
                        <a href="${href}" class="info">Details</a>
                    </div>
                </div>
            </div>
        </div>
        <a href="${details_href}"><h3>${cname}</h3></a>
        <p>${task}</p>
    </div>`;
    }
    var parent=document.querySelector(
        '#creative>.list'
    )
    parent.innerHTML=html;

})();
