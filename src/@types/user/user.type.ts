export interface IUser {
	id: number;
	nickname: string;
	email: string;
	thumbnail_image_url: string;
}

export interface IUserRes {
	code: number;
	result: IUser;
}