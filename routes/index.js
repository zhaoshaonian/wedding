const express=require('express');
var router=express.Router();
var pool=require('../pool.js');

router.get("/", (req, res) => {
    var obj={};
    (async function () {
        //hq_index_carousel
        await new Promise(function (open) {
            var sql = `SELECT * FROM hq_index_carousel WHERE cid!=0 order by cid;`
            pool.query(sql, [], (err, result) => {
                if (err) console.log(err);
                obj.carousel=result;
                open();
            });
        })
        //hq_index_home
        await new Promise(function (open) {
            var sql = `SELECT * FROM hq_index_home WHERE hid!=0 order by hid;`
            pool.query(sql, [], (err, result) => {
                if (err) console.log(err);
                obj.home=result;
                open();
            });
        })
        //hq_services
        await new Promise(function (open) {
            var sql = `SELECT * FROM hq_services WHERE sid!=0 order by sid;`
            pool.query(sql, [], (err, result) => {
                if (err) console.log(err);
                obj.services=result;
                open();
            });
        })
        //hq_portfolio
        await new Promise(function (open) {
            var sql = `SELECT * FROM hq_portfolio WHERE pid!=0 order by pid;`
            pool.query(sql, [], (err, result) => {
                if (err) console.log(err);
                obj.portfolio=result;
                open();
            });
        })
        //hq_creative
        await new Promise(function (open) {
            var sql = `SELECT * FROM hq_creative WHERE cid!=0 order by cid;`
            pool.query(sql, [], (err, result) => {
                if (err) console.log(err);
                obj.creative=result;
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
        //hq_test
        await new Promise(function (open) {
            var sql = `SELECT * FROM hq_test WHERE tid!=0 order by tid;`
            pool.query(sql, [], (err, result) => {
                if (err) console.log(err);
                obj.test=result;
                open();
            });
        })
        //hq_blog
        await new Promise(function (open) {
            var sql = `SELECT * FROM hq_blog WHERE bid!=0 order by bid;`
            pool.query(sql, [], (err, result) => {
                if (err) console.log(err);
                obj.blog=result;
                open();
            });
        })
        //hq_user
        await new Promise(function (open) {
            var sql = `SELECT * FROM hq_user WHERE uid!=0 order by uid;`
            pool.query(sql, [], (err, result) => {
                if (err) console.log(err);
                obj.user=result;
                open();
            });
        })
        res.send(obj);
    })();
    
});


//导出
module.exports=router;
