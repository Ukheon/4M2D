
import axios from 'axios';
import { ENV } from '@/config/env';

export const instance = axios.create({
    baseURL: ENV.BASE_URL,
});

instance.defaults.withCredentials = true;