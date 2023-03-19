import { theme } from '@/styles/theme';
import styled, { useTheme, withTheme } from 'styled-components';

const Header = () => {
    return <StyledHeader>
        <StyledHeaderSection>
			헤더부분을 담당하게 될것같아요
        </StyledHeaderSection>
    </StyledHeader>;
};

export default Header;


const StyledHeader = styled.header`
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

const StyledHeaderSection = styled.section`
	height: 60px;
	width: ${(props) => props.theme.width.section};
	line-height: 60px;
	margin: 0 auto;

`;