import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
	_id: Number,
	nickname: {
		type: String,
	},
	email: {
		type: String,
		require: true,
	},
	thumbnail_image_url: String,
	items: {
		type: Array,
		default: [],
	},
	subscribes: {
		type: Array,
		defualt: [],
	},
	token: {
		type: String,
		default: "",
	},
	createdAt: Date
});

export const user = models.user || model('user', userSchema); 