//创建mysql连接池
const mysql = require('mysql');
var pool = mysql.createPool({
  host: 'www.mybasesite.com',
  user: 'root',
  password: '123456',
  database: 'wedding',
  connectionLimit: 10 
});
//把创建好的连接池导出
module.exports = pool;




