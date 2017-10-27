var express = require('express');
var router = express.Router();

/* GET home page. */


router.post('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*')//读取文件
	var temp=[]
	switch(req.body.abc){
		case'1':temp=[1,2,3,4,5]
		break;
		case'2':temp=[5,6,7,8,9]
		break;
	}
	res.send(temp)
})

module.exports = router;
