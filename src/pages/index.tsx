import { getUserMe } from '@/api/user';
import { ENV } from '@/config/env';
import { useEffect } from 'react';

export default function Home() {

    const handleKakaoLoginClick = async () => window.location.replace(`https://kauth.kakao.com/oauth/authorize?client_id=${ENV.KAKAO_ID}&redirect_uri=${ENV.REDIRECT_URI}&response_type=code`);
    useEffect(() => {
        (async () => {
			
            const res = await getUserMe();
            console.log(res);
        })();
    }, []);
    return (
        <div onClick={handleKakaoLoginClick}>
            카카오 로그인
        </div>
    );
}
