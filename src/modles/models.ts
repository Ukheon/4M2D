import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    _id: Number,
    nickname: String,
    email: String,
    thumbnail_image_url: String,
});

export const user = models.user || model('user', userSchema); 