const express = require('express');
const router =  express.Router();
const pool = require('../pool.js');

router.post('/',(req,res)=>{
	var $uname = req.body.uname;
	if(!$uname){
		res.send('User is real name does not exist');
		return;
	}

	var $country = req.body.country;
	if(!$country){
		res.send('User country does not exist');
		return;
	}
	
	var $email = req.body.email;
	if(!$email){
		res.send('User email does not exist');
		return;
	}

	var $upwd = req.body.upwd;
	if(!$upwd){
		res.send('User password does not exist');
		return;
	}
	//console.log(req.body)
	var sql = 'INSERT INTO hq_user VALUES(NULL,?,?,?,?,NULL,NULL)';
	pool.query(sql,[$uname,$upwd,$email,$country],(err,result)=>{
		if(err) throw err;
		res.send("Congratulations on your successful registration！");
	});
});

//检查用户名称
router.get('/checkUname',(req,res)=>{
	var $uname = req.query.uname;
	if(!$uname){
		res.send("User user can not be empty");
		return;
	}
	var sql = "select * from hq_user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1');//用户名已存在
		}else{
			res.send('0');//用户名可用
		}
	});
});

//用户密码
router.get('/checkUpwd',(req,res)=>{
	var $upwd = req.query.upwd;
	if(!$upwd){
		res.send("User password can not be empty");
		return;
	}
	var sql = "select * from hq_user where upwd=?";
	pool.query(sql,[$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('Password are available');
		}
	});
});

//邮箱

router.get('/checkEmail',(req,res)=>{
	var $email = req.query.email;
	if(!$email){
		res.send("The mailbox can not be empty");
		return;
	}
	var sql = "select * from hq_user where email=?";
	pool.query(sql,[$email],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('The mailbox is occupied');
		}else{
			res.send('The email can use it');
		}
	});
});

router.get('/checkCountry',(req,res)=>{
	var $country = req.query.country;
	if(!$country){
		res.send("The data can not be empty");
		return;
	}
	var sql = "select * from hq_user where country=?";
	pool.query(sql,[$country],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('The country can use it');
		}
	});
});





module.exports = router;