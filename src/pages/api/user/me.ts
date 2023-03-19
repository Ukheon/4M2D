import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { connectMongo } from '@/utils/connectMongo';
import { user } from '@/modles/models';
import { CODE } from '@/config/code';



interface Properties {
        nickname: string;
        profile_image: string;
        thumbnail_image: string;
    }

interface Profile {
        nickname: string;
        thumbnail_image_url: string;
        profile_image_url: string;
        is_default_image: boolean;
    }

interface KakaoAccount {
        profile_nickname_needs_agreement: boolean;
        profile_image_needs_agreement: boolean;
        profile: Profile;
        has_email: boolean;
        email_needs_agreement: boolean;
        is_email_valid: boolean;
        is_email_verified: boolean;
        email: string;
    }

interface IKakaoUser {
        id: number;
        connected_at: Date;
        properties: Properties;
        kakao_account: KakaoAccount;
    }





export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const { access_token } = req.cookies;
		
        if (!access_token) res.status(200).json({ code: CODE.failed, message: '유효하지 않은 토큰' });
        const userMe_url = 'https://kapi.kakao.com/v2/user/me';
        const userRes = await axios.get<IKakaoUser>(userMe_url, {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            }
        }).then((res) => res.data);
		
        if (!userRes) res.status(200).json({ code: CODE.failed, message: '유저 정보 없음' });
        await connectMongo();
        
        const userInfo = await user.findOne({ id: userRes.id });

        if (!userInfo) {
            const userConfig = {
                id: userRes.id,
                nickname: userRes.properties.nickname,
                email: userRes.kakao_account.email,
                thumbnail_image_url: userRes.properties.thumbnail_image
            };
            await user.create(userConfig);
            console.log('유저 생성');
            res.status(200).json({ code: CODE.success, result: userConfig });
            res.end();
        }
		
		


        res.status(200).json({
            code: 2000, result: {
                user: userInfo,
            } });
    }
    res.status(404);
	
};