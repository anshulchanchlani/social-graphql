var express= require('express');
var router = express.Router();
var path = require('path');
var graphQL = require('graphql');
var quoteSchema = require('../.././models/QuotesQLSchema');

router.post('/',function(request,response,next){
	console.log("Getting requets from dummy");
	console.log("Request.body is: ",request.body)
	 graphQL.graphql(quoteSchema,request.body).then(function(result){
	 	 
	 	console.log("Inside graphql");
	 	response.send(result);
	 	next();
	 })
	 	
	  
})

module.exports = router;