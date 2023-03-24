interface IUser {
	_id: number
	nickname: string,
	email: string,
	thumbnail_image_url: string,
	items: [],
	subscribes: [],
	token: string,
	createdAt: string,
}

interface IUserRes {
	code: number;
	result: IUser;
}
