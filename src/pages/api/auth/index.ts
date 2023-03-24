import { ENV } from '@/config/env';
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface IKakaoTokenRes {
	access_token: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		const { code } = req.query;
		if (!code) {
			console.log(code, '없음');
			
		}
		
		const token_url = 'https://kauth.kakao.com/oauth/token';
		const client_id = ENV.KAKAO_ID;
		const redirect_uri = ENV.REDIRECT_URI;
		
		const config = {
			grant_type: 'authorization_code',
			client_id,
			redirect_uri,
			code,
		};
		
		const { data: tokenRes } = await axios.post<IKakaoTokenRes>(token_url, config, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
			}
		}).then((res) => res);
		
		res.setHeader('Set-cookie', `access_token=${tokenRes.access_token}; Path=/`);
		res.status(200).redirect('http://localhost:3000');
	} else {
		res.status(200).redirect('http://localhost:3000');
	}
    
};