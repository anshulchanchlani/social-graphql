var graphql = require('graphql');
var Quote  = require('./Quotes.js');
var quoteType = require('./QuotesQL.js');


module.exports = {
	 quotes:{
	 	type: new graphql.GraphQLList(quoteType),
	 	resolve: Quote.getAllQuotes
	 },

	 quotesByAuthor:{
	 	type: new graphql.GraphQLList(quoteType),
	 	args:{
	 		author:{
	 			type:  graphql.GraphQLString
	 		}
	 	},
	 	resolve: Quote.getQuotesByAuthor
	 }
};
