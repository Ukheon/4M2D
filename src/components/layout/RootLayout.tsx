import { getUserMe } from "@/api/user";
import { UserAtom } from "@/atoms/user";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import Header from "../Header";
import styled from "styled-components";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const setUser = useSetRecoilState(UserAtom);
	const { isLoading } = useQuery<IUserRes>("userMe", getUserMe, {
		onSuccess: (data) => {
			setUser(data.result || null);
		},
	});

	if (isLoading) return <div></div>;

	return (
		<>
			<Header />
			<StyledMain>{children}</StyledMain>
		</>
	);
};

export default RootLayout;

const StyledMain = styled.main`
	width: ${(props) => props.theme.width.section};
	margin: 0 auto;
`;
