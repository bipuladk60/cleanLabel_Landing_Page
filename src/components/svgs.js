import {ReactComponent as Svg1} from './assets/svg1.svg';
import {ReactComponent as Svg2} from './assets/svg-2.svg';
import {ReactComponent as Svg3} from './assets/svg3.svg';
import {ReactComponent as Svg4} from './assets/svg-4-01.svg';
import {ReactComponent as Logo} from './assets/finalLogo.svg';

export const SvgFirst = () => {
    return(
        <Svg1 width="100%" />
    );
}

export const SvgSecond = () => {
    return(
        <Svg2 width="100%"/>
    );
}
export const SvgThird = () => {
    return(
        <Svg3 width="80%"/>
    );
}
export const SvgFourth = () => {
    return(
        <Svg4 width="100%"/>
    );
}

export const LogoSvg = () => {
    return(
        <Logo width="20%"/>
    );
}

