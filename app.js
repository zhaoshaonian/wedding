const express = require('express');
const bodyParser = require('body-parser');

const login=require('./routes/login');
const register=require('./routes/register');
const index=require('./routes/index');
const about=require('./routes/about');
const services=require('./routes/services');
const blog=require('./routes/blog');
const team=require('./routes/team');
/*引入路由模块*/


var app = express();
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));

//加载处理跨域模块
const cors=require("cors");
//允许哪个地址跨域访问
app.use(cors({
    origin:["http://www.mybasesite.com"],
    credentials:true
}));


app.listen(38435);

//托管静态资源到public目录下
app.use(express.static('public'));
//托管静态资源到index目录下
app.use(express.static('index'));
/*使用路由器来管理路由*/
app.use('/index',index);
/*关于 */
app.use('/about',about);
/*services */
app.use('/services',services);
/*博客 */
app.use('/blog',blog);
/*team */
app.use('/team',team);

/*登录 */
app.use('/login',login);
/*注册 */
app.use('/register',register);

