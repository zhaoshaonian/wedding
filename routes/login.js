const express = require('express');
const router =  express.Router();
const pool = require('../pool.js');

router.post('/',(req,res)=>{
	var $uname = req.body.uname;
	var $upwd = req.body.upwd;
	if(!$uname){
		res.send('用户名不存在');
		return;
	}
	if(!$upwd){
		res.send('用户密码不存在');
		return;
	}
	var sql = "SELECT * FROM hq_user WHERE uname=? AND upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('登录成功');
		}else{
			res.send('用户名或密码错误');
		}
		//res.send(result);
	});
});

module.exports=router;