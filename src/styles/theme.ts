
export const theme = {
	width: {
		section: '1000px',
		table: '1000px',
		sideBar: '230px',
		mainMargin: '100px',
		button: '100px',
	},
	height: {
		header: '80px',
		topMargin: '80px',
		button: '35px',
		table: '40px',
		input: '45px',
	},
	colors: {},
	grayColors: {
		gray100: '#f0f3f5',
		gray200: '#e4e7ea',
		gray300: '#c8ced3',
		gray400: '#acb4bc',
		gray500: '#8f9ba6',
		gray600: '#73818f',
		gray700: '#5c6873',
		gray800: '#2f353a',
		gray900: '#23282c',
	},
	bgColors: {
		sideBar: '#2f2e33',
	},
	brandColors: {
		name: '#20a8d8',
		success: '#4dbd74',
		danger: '#f85032',
		button: '#3b94ee',
	},
	size: {
		title: '1.8em',
	},
};

export type brandColors = typeof theme.brandColors;
export type colors = typeof theme.colors;
export type grayColors = typeof theme.grayColors;
export type bgColors = typeof theme.bgColors;
export type size = typeof theme.size;
export type width = typeof theme.width;
export type height = typeof theme.height;
