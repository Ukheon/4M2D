import { Schema, model, models } from 'mongoose';
const itemSchema = new Schema({
	name: {
		type: String,
	},
	price: Number,
	seller: {
		type: Object,
		require: true,
		id: String,
		name: String,
	
	},
	subscribers: {
		type: Array,
		default: []
	},
	status: {
		type: String,
		default: '1',
	},
	images: {
		type: Array,
		default: [],
	},
	content: String,
	location: String,
	createdAt: Date,
});

export const item = models.item || model('item', itemSchema); 