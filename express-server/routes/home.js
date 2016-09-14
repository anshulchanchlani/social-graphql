var express= require('express');
var router = express.Router();
var path = require('path');

router.get('/',function(request,response,next){
	console.log('');
	response.sendFile(path.join(__dirname,'../../views/index.html'));
	next();
})

module.exports = router;