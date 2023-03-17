import { ENV } from '@/config/env';
import { instance } from './root';

export const getUserMe = async () => {
    return instance.get(ENV.BASE_URL + '/api/user/me').then((res) => res.data);
};