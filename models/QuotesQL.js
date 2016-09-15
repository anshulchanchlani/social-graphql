var graphql = require('graphql');

var quoteType = new graphql.GraphQLObjectType({
	name:'Quote',
	fields:{
		_id:{type: new graphql.GraphQLNonNull(graphql.GraphQLID)},
		quote:{type:   graphql.GraphQLString},
		author:{type:   graphql.GraphQLString}
	}
});

module.exports = quoteType;