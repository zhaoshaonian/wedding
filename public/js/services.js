(async function(){
    var res= await ajax({
        type:'get',
        url:'http://www.mybasesite.com/services',
        datatype:'json'
    });

    //services
    var ps=res.services.slice(res.length);
    var html='';
    for(var i=0;i<9;i++){
        var {sid,href,img,title_href,title,details}=ps[i];
        html+=`<li class="cur">
        <a href="${href}"><img src="${img}" alt="" /></a>
            <h4><a href="${title_href}">${title}</a></h4><hr />
            <p>${details}</p>
        </li>`;
    }
    var parent=document.querySelector(
        '#services_bg #services .services_list ul'
    )
    parent.innerHTML=html;

    //store
    var ps=res.store.slice(res.length);
    var html='';
    for(var i=0;i<5;i++){
        var {sid,img,href}=ps[i];
        html+=`<li class="img">
        <div class="view view-tenth">
            <img src="${img}">
            <div class="mask">
                <h2>Share happiness</h2>
                <p>Enjoy life</p>
                <a class="info" href="${href}">Details</a>
            </div>
        </div>
    </li>`;
    }
    var parent=document.querySelector(
        '#store .shopping #storeShop #list #list_son1'
    )
    parent.innerHTML=html;


})();
