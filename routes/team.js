const express=require('express');
var router=express.Router();

var pool=require('../pool.js');
router.get("/", (req, res) => {
    var obj={};
    (async function () {
        
        //hq_creative
        await new Promise(function (open) {
            var sql = `SELECT * FROM hq_creative WHERE cid!=0 order by cid;`
            pool.query(sql, [], (err, result) => {
                if (err) console.log(err);
                obj.creative=result;
                open();
            });
        })
        
        res.send(obj);
    })();
    
});


//导出
module.exports=router;
