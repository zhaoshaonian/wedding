(async function(){
    var res= await ajax({
        type:'get',
        url:'http://www.mybasesite.com/index',
        datatype:'json'
    });
    var ps=res.carousel.slice(res.length-5);
    /* banner1 */
    var html='';
        var {cid,img,href,title,pic,title_h1,details,button}=ps[0];

        html+=`<a href="${href}"><img src="${img}" alt="" /></a>
        <div class="caption">
            <h3>${title}</h3>
            <img src="${pic}" alt="" />
            <h1>${title_h1}</h1>
            <p>${details}</p>
            <div class="btn"><a href="${button}">Read More</a></div>
        </div>`;
    var parent=document.querySelector(
        '.main_visual>.main_image>ul>li'
    );
    parent.innerHTML=html;

    /* banner2 */
    var {cid,img,href,title,pic,title_h1,details,button}=ps[1];
    var html='';
    parent=parent.nextElementSibling;
    html+=`<a href="${href}"><img src="${img}" alt="" /></a>
    <div class="caption">
        <h3>${title}</h3>
        <img src="${pic}" alt="" />
        <h1>${title_h1}</h1>
        <p>${details}</p>
        <div class="btn"><a href="${button}">Read More</a></div>
    </div>`;
    parent.innerHTML=html;

    /* banner3 */
    var {cid,img,href,title,pic,title_h1,details,button}=ps[2];
    var html='';
    parent=parent.nextElementSibling;
    html+=`<a href="${href}"><img src="${img}" alt="" /></a>
    <div class="caption">
        <h3>${title}</h3>
        <img src="${pic}" alt="" />
        <h1>${title_h1}</h1>
        <p>${details}</p>
        <div class="btn"><a href="${button}">Read More</a></div>
    </div>`;
    parent.innerHTML=html;

    /* banner4 */
    var {cid,img,href,title,pic,title_h1,details,button}=ps[3];
    var html='';
    parent=parent.nextElementSibling;
    html+=`<a href="${href}"><img src="${img}" alt="" /></a>
    <div class="caption">
        <h3>${title}</h3>
        <img src="${pic}" alt="" />
        <h1>${title_h1}</h1>
        <p>${details}</p>
        <div class="btn"><a href="${button}">Read More</a></div>
    </div>`;
    parent.innerHTML=html;

    /* banner5 */
    var {cid,img,href,title,pic,title_h1,details,button}=ps[4];
    var html='';
    parent=parent.nextElementSibling;
    html+=`<a href="${href}"><img src="${img}" alt="" /></a>
    <div class="caption">
        <h3>${title}</h3>
        <img src="${pic}" alt="" />
        <h1>${title_h1}</h1>
        <p>${details}</p>
        <div class="btn"><a href="${button}">Read More</a></div>
    </div>`;
    parent.innerHTML=html;

    /*index-home*/
    var ps=res.home.slice(res.length-3);
    var html='';
    for(var i=0;i<ps.length;i++){
        var {hid,img,href,title,details,readmore_href}=ps[i];
        html+=`<div class="service">
        <img src="${img}" alt=""/>
        <h3><a href="${href}">${title}</a></h3>
        <p>${details}</p>
        <div class="title">
            <a href="${readmore_href}">Read More</a>
        </div>
    </div>`;
    }
    var parent=document.querySelector(
        '#home .home_content .home_bottom'
    )
    parent.innerHTML=html;

    //services1
    var ps=res.services.slice(res.length);
    var html='';
    for(var i=0;i<4;i++){
        var {sid,href,img,title_href,title,details}=ps[i];
        html+=`<li class="cur">
        <a href="${href}"><img src="${img}" alt="" /></a>
            <h4><a href="${title_href}">${title}</a></h4><hr />
            <p>${details}</p>
        </li>`;
    }
    var parent=document.querySelector(
        '#services_bg #services #banner ul'
    )
    parent.innerHTML=html;
    
    //portfolio
    var ps=res.portfolio.slice(res.length);
    var html='';
    for(var i=0;i<5;i++){
        var {pid,href,img,title_href,title,details}=ps[i];
        html+=`<li><img src="${img}" alt=""/></li>`;
    }
    var parent=document.querySelector(
        '#portfolio .wrap .slide ul'
    )
    parent.innerHTML=html;

    //creative
    var ps=res.creative.slice(res.length);
    var html='';
    for(var i=0;i<3;i++){
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
        '#creative_bg #creative .list'
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

    //test
    var ps=res.test.slice(res.length);
    var html='';
    for(var i=0;i<3;i++){
        var {tid,img,tname,title,details}=ps[i];
        html+=`<li>
        <img src="${img}" alt="" />
        <h3>${tname}</h3>
        <p>${title}</p>
        <p>${details}</p>
    </li>`;
    }
    var parent=document.querySelector(
        '#test_bg .test ul'
    )
    parent.innerHTML=html;

    //blog
    var ps=res.blog.slice(res.length);
    var html='';
    for(var i=0;i<3;i++){
        var {bid,img,href_a,href_b,title,admin,comments,details}=ps[i];
        html+=`<div class="img_list">
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
                <a class="info" href="${href_b}">Details</a>
            </div>
        </div>
        <a href="${href_a}"><h3>${title}</h3></a>
        <p><span>by</span>${admin}&nbsp;&nbsp;&nbsp;&nbsp;<span>${comments}</span>comments</p>
        <p class="m_top">${details}</p>
    </div>`;
    }
    var parent=document.querySelector(
        '#blog_bg #blog .list'
    )
    parent.innerHTML=html;

})();
