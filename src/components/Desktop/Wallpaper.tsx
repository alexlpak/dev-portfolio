import styled from 'styled-components';
import WaveSVG from '../../assets/svg/wave.svg';

const Ocean = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #015871;
    opacity: .25;
`;

const Wave = styled.div`
    background: url(${WaveSVG}) repeat-x;
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 198px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
    &:nth-of-type(2) {
        top: -175px;
        animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, swell 7s ease -1.25s infinite;
        opacity: 1;
    }
    @keyframes wave {
        0% {
            margin-left: 0;
        }
        100% {
            margin-left: -1600px;
        }
    }
    @keyframes swell {
        0%, 100% {
            transform: translate3d(0, -25px, 0);
        }
        50% {
            transform: translate3d(0, 5px, 0);
        }
    }
`;

const WallpaperWrapper = styled.div`
    background: radial-gradient(ellipse at center, #fffeea 0%, #fffeea 35%, #b7e8eb 100%);
    overflow: hidden;
`;

const Wallpaper = () => {
    return (
        <WallpaperWrapper>
            <Ocean>
                <Wave />
                <Wave />
            </Ocean>
        </WallpaperWrapper>
    );
};

export default Wallpaper;