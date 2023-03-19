import 'styled-components';
import { colors, brandColors, size, width, height, bgColors, grayColors } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        width: width;
        height: height;
        colors: colors;
        grayColors: grayColors;
        bgColors: bgColors;
        brandColors: brandColors;
        size: size;
    }
}
