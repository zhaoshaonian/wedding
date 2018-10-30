const express=require('express');
var router=express.Router();

var pool=require('../pool.js');
router.get("/", (req, res) => {
    var obj={};
    (async function () {
       
        //hq_blog
        await new Promise(function (open) {
            var sql = `SELECT * FROM hq_blog WHERE bid!=0 order by bid;`
            pool.query(sql, [], (err, result) => {
                if (err) console.log(err);
                obj.blog=result;
                open();
            });
        })
        res.send(obj);
    })();
    
});


//导出
module.exports=router;
