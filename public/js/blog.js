(async function(){
    var res= await ajax({
        type:'get',
        url:'http://www.mybasesite.com/blog',
        datatype:'json'
    });

    //blog
    var ps=res.blog.slice(res.length);
    var html='';
    for(var i=0;i<4;i++){
        var {bid,img,href_a,href_b,title,admin,comments,details,href}=ps[i];
        html+=`<div class="list">
        <div class="img_list">
            <ul>
                <li>01, Jul
                    <span>2016</span>
                </li>
            </ul>
            <div class="view view-tenth">
                <img src="${img}">
                <div class="mask">
                    <h2>Share happiness</h2>
                    <p>Enjoy life</p>
                    <a class="info" href="${href_a}">Details</a>
                </div>
            </div>
        </div>
        <div class="title_list">
            <a href="${href_b}"><h3>${title}</h3></a>
            <p><span>by</span>${admin}&nbsp;&nbsp;&nbsp;&nbsp;<span>${comments}</span>comments</p>
            <p>${details}</p>
            <div class="btn"><a href="${href}">Read More</a></div>
        </div>
    </div>`;
    }
    var parent=document.querySelector(
        '#blog .blog_right .blog_top'
    )
    parent.innerHTML=html;

})();
