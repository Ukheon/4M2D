import axios, { Axios } from 'axios';
import styled from 'styled-components';
import { login } from '@/api/login';
import { ENV } from '@/config/env';

const index = () => {
    const handleKakaoLoginClick = async () => window.location.replace(`https://kauth.kakao.com/oauth/authorize?client_id=${ENV.KAKAO_ID}&redirect_uri=${ENV.REDIRECT_URI}&response_type=code`);

    return <StyledLoginSection>
        <StyledTitle>
			현재 서비스는<br /> 카카오톡 로그인만<br /> 가능합니다.
			
        </StyledTitle>
        <StyledImg src={'assets/kakao_login.png'} onClick={handleKakaoLoginClick}></StyledImg>
    </StyledLoginSection>;
};

export default index;


const StyledLoginSection = styled.div`
	width: 340px;
	height: 230px;
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	padding: 30px;
	border: 1px solid black;
	background: white;
	border-radius: 5px;
`;

const StyledTitle = styled.h2`
	width: 100%;
`;

const StyledImg = styled.img`
	width: 100%;
	margin-top: 30px;
	height: 50px;
	cursor: pointer;
`;