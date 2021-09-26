import styled from 'styled-components';
//images
import COMP from '../../images/Comp1.png';
import COMPIMG from '../../images/ComputerEng.png';

export const Wrapper = styled.div`

    width: 100%;
    height: 236px;
    left: 0;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.46) 0%,
        rgba(0, 0, 0, 0.6) 100%
    ), url(${COMP});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    
    .arrow {
        position: absolute;
        left: 20px;
        top: 20px;
        z-index: 3;
    }

    .joinBtn {
        position: absolute;
        width: 76px;
        height: 28px;
        right: 18px;
        top: 14px;
        cursor: pointer;
        border: 0.8px solid #ffffff;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .joinBtnDesc {
        position: absolute;
        width: 60px;
        height: 16px;
        left: 8px;
        top: 6px;
        margin: 0;
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: #ffffff;
    }

    .title {
        position: absolute;
        width: 179px;
        height: 22px;
        left: 16px;
        top: 164px;
        margin: 0;
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 22px;
        color: #ffffff;
    }

    .description {
        position: absolute;
        width: 218px;
        height: 16px;
        left: 16px;
        top: 188px;
        margin: 0;
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #ffffff;
    }

    /* for large screen devices (768px and up) */
    @media (min-width: 768px) {
        width: 100%;
        height: 440px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)
                ,url(${COMPIMG});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
    
        .arrow,
        .joinBtn {
            display: none;
        }

        .title {
            width: 378px;
            height: 47px;
            left: 200px;
            top: 286px;
            font-size: 36px;
            line-height: 47px;
        }

        .description {
            width: 327px;
            height: 23px;
            left: 200px;
            top: 337px;
            font-size: 18px;
            line-height: 23px;
        
        }

    }
`;