import mongoose from 'mongoose';
import styled from 'styled-components';

export const connectMongo = async () => {
    mongoose.connect(process.env.MONGO_URI + '');
};