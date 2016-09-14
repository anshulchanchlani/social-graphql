import mongoose from 'mongoose';
import Quote from './Quotes';
import {getSchema} from '@risingstack/graffiti-mongoose';

mongoose.connect('mongodb://localhost/27017/quotesdb');

export default getSchema([Quote]);