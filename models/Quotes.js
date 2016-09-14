import mongoose from 'mongoose';
const QuotesSchema = new mongoose.Schema({
	quote:{
		type:String
	},
	author:{
		type:String
	}
});




const Quote = mongoose.model('Quotes',QuotesSchema);
export default Quote;

