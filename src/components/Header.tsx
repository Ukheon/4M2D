import { UserAtom } from "@/atoms/user";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import Link from "next/link";

const Header = () => {
	const user = useRecoilValue(UserAtom);

	const handleLogout = () => {};

	return (
		<StyleSection>
			<StyledHeader>
				<img src={"assets/headerLogo.png"} />
				<StyledUserInfo>
					{user ? (
						<>
							<Link href={"/regi"}>
								<MdOutlineSell size={20} />
								판매하기
							</Link>
							<Link href={"/info"}>
								<AiOutlineUser size={20} />
								내정보
							</Link>
							<Link href={"/"} onClick={handleLogout}>
								<BiLogOut size={20} alignmentBaseline={"middle"} />
								로그아웃
							</Link>
						</>
					) : (
						<Link href={"/login"}>
							<BiLogIn size={20} />
							로그인
						</Link>
					)}
				</StyledUserInfo>
			</StyledHeader>
		</StyleSection>
	);
};

export default Header;

const StyleSection = styled.header`
	position: sticky;
	top: 0;
	width: 100%;
	height: 60px;
	padding: 0 16px;
	line-height: 60px;
	border-bottom: 1px solid black;
	margin-bottom: 48px;
	background: white;
`;

const StyledHeader = styled.section`
	display: flex;
	justify-content: space-between;
	height: 60px;
	width: ${(props) => props.theme.width.section};
	line-height: 60px;
	margin: 0 auto;
`;

const StyledUserInfo = styled.div`
	display: flex;
	> a {
		text-decoration: none;
		color: black;
		cursor: pointer;
		> svg {
			margin-right: 2px;
		}
		display: flex;
		align-items: center;
		margin-left: 20px;
	}
`;
