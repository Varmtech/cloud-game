import React, {useState} from "react";
import styled from 'styled-components'
import {ReactComponent as NotificationIcon} from '../../../../img/icons/notification.svg';
import {colors} from "../../../../Helpers/UI/constants";
import {Swiper, SwiperSlide} from 'swiper/react';
import AvatarEx1 from '../../../../img/userAvatarEx.png';

import 'swiper/css';
import "swiper/css/pagination";
import {ButtonWrapper, PageContainer, SectionHeader} from "../../../../Helpers/UI";
import Header from "../../../header";
import {ReactComponent as ArrowLeft} from "../../../../img/icons/chevron-left.svg";
import CheckIcon from "../../../../img/icons/check.svg";
import {CustomButton} from "../../../common/CustomButton";
import {ReactComponent as PlayCircleIcon} from "../../../../img/icons/play.svg";


export default function ChooseAvatarAndNickname() {
    const [activeBackgroundColor, setActiveBackgroundColor] = useState();
    const [nickname, setNickname] = useState('');

    const backgroundColors = [
        '#013094',
        '#D62500',
        '#FC8831',
        '#FDAC00',
        '#FFFFFF',
        '#E5D8BF',
        '#1689B4',
        '#0C7955',
        '#C4DAC6',
        '#E1716C',
        '#B37B5E',
        '#9F93E9',
    ];

    const handleChangeInput = (e) => {
        console.log(e.currentTarget)
    }

    return (
        <AvatarPageContainer backgroundColor={colors.cream}>
            <Header leftIcon={<ArrowLeft/>} coloredLogo marginBottom='60px'/>
            <SectionHeader color={colors.blue} center>Choose avatar & nickname</SectionHeader>
            <SliderWrapper>
                <Swiper
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={20}
                    grabCursor={true}

                    className="avatar_slider"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><SliderImage src={AvatarEx1} alt=""/></SwiperSlide>
                    <SwiperSlide><SliderImage src={AvatarEx1} alt=""/></SwiperSlide>
                    <SwiperSlide><SliderImage src={AvatarEx1} alt=""/> </SwiperSlide>
                    <SwiperSlide><SliderImage src={AvatarEx1} alt=""/></SwiperSlide>
                    <SwiperSlide><SliderImage src={AvatarEx1} alt=""/></SwiperSlide>
                </Swiper>
            </SliderWrapper>

            <SectionHeader color={colors.blue} center>Background color</SectionHeader>

            <BackgroundsWrapper>
                {backgroundColors.map(color =>
                    <ColorItem color={color}
                               onClick={() => setActiveBackgroundColor(color)}
                               isActive={color === activeBackgroundColor}/>
                )}
            </BackgroundsWrapper>

            <NickNameInput placeholder='nickname' value={nickname} onChange={(e) => setNickname(e.currentTarget.value)}/>


            <ButtonWrapper>
                <CustomButton fullWidth buttonText='I’m Ready' icon={<PlayCircleIcon/>} />
            </ButtonWrapper>
        </AvatarPageContainer>
    )
}

const AvatarPageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
`


const SliderWrapper = styled.div`
  margin: 16px -16px 32px;
`

const SliderImage = styled.img`
  max-width: 100%;
`

const BackgroundsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 312px;
  margin: 16px auto;
  @media (max-width: 350px) {
    width: 252px;
  }
`

const ColorItem = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 14px;
  margin: 8px;
  background-color: ${props => props.color};
  cursor: pointer;
  ${props => props.isActive ? `
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(${CheckIcon}) center no-repeat;
    }
  ` : ''};
  @media (max-width: 350px) {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    margin: 6px;
  }
`


const NickNameInput = styled.input`
  font-family: Overpass, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: ${colors.blue};
  display: block;
  min-width: 200px;
  height: 48px;
  margin: 28px auto 44px;
  background: #F3EBDD;
  border: none;
  box-shadow: inset 0px -2px 0px #E6D8BF;
  outline: none;
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${colors.grayLight};
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${colors.grayLight};
  }
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${colors.grayLight};
  }
`
