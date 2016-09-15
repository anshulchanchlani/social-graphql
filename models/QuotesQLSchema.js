var graphql = require('graphql');
var quoteType = require('./QuotesQL');
var quoteQueries = require('./QuotesQueries');
var quoteMutations = require('./QuotesMutations');

var mainQuery = new graphql.GraphQLObjectType({
	name:'Query',
	fields:{
		quotes: quoteQueries.quotes,
		quotesByAuthor: quoteQueries.quotesByAuthor
	}
});

var mainMutation = new graphql.GraphQLObjectType({
	name:'Mutation',
	fields:{
		addQuote: quoteMutations.addQuote
	}
})

var schema = new graphql.GraphQLSchema({
	query:mainQuery,
	mutation: mainMutation
});

module.exports  = schema;