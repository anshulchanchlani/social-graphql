var graphql = require('graphql');
var Quote = require('./Quotes');
var quoteType  = require('./QuotesQL');

module.exports ={
	addQuote:{
		type:quoteType,
		args:{
			author:{
				type: graphql.GraphQLString
			},
			quote:{
				type: graphql.GraphQLString
			}
		},
		resolve:Quote.addQuote

	}
};