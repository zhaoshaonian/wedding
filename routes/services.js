const express=require('express');
var router=express.Router();
var pool=require('../pool.js');

router.get("/", (req, res) => {
    var obj={};
    (async function () {
        
        //hq_services
        await new Promise(function (open) {
            var sql = `SELECT * FROM hq_services WHERE sid!=0 order by sid;`
            pool.query(sql, [], (err, result) => {
                if (err) console.log(err);
                obj.services=result;
                open();
            });
        })
        
        
        //hq_store
        await new Promise(function (open) {
            var sql = `SELECT * FROM hq_store WHERE sid!=0 order by sid;`
            pool.query(sql, [], (err, result) => {
                if (err) console.log(err);
                obj.store=result;
                open();
            });
        })
        
        res.send(obj);
    })();
    
});


//导出
module.exports=router;
