import { item } from '@/modles/item';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectMongo } from '@/utils/connectMongo';


export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
	} else if (req.method === 'POST')
		await connectMongo();
	await item.create({
		name: '상풍팝니다~',
		user: {
			id: '11basc',
			name: '권욱헌',
		},
		content: 'aa',
		location: 'aa',
		createdAt: new Date(),
	});
	
	res.status(200).json({ code: 2000, message: 'OK' });
};