var mongoose = require('mongoose')
const QuotesSchema = new mongoose.Schema({
	quote:{
		type:String
	},
	author:{
		type:String
	}
});

 
const Quote = mongoose.model('Quotes',QuotesSchema);
module.exports = Quote;


// Get all quotes by  Author.
module.exports.getQuotesByAuthor = function(root,args){
	return new Promise(function(resolve,reject){
		Quote.find({"author":args.author},function(err,data){
			err?reject(err):resolve(data)
		})
	});
}

module.exports.getAllQuotes = function(){
	return new Promise(function(resolve,reject){
		console.log("inside getAllQuotes");
		Quote.find({},function(err,data){
			err?reject(err):resolve(data);
		})
	});
}
module.exports.addQuote = function(root,args){
	return new Promise(function(resolve,reject){
		var newQuote  = new Quote(args);

		newQuote.save(function(err,res){
			err?reject(err):resolve(res);
		})
	})
}

