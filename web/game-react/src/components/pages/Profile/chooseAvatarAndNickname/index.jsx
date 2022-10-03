import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components'
import 'swiper/css';
import "swiper/css/pagination";
import {ReactComponent as NotificationIcon} from '../../../../img/icons/notification.svg';
import {colors} from "../../../../Helpers/UI/constants";
import AvatarEx1 from '../../../../img/userAvatarEx.png';

import {ButtonWrapper, PageContainer, SectionHeader} from "../../../../Helpers/UI";
import Header from "../../../header";
import {ReactComponent as ArrowLeft} from "../../../../img/icons/chevron-left.svg";
import CheckIcon from "../../../../img/icons/check.svg";
import {CustomButton} from "../../../common/CustomButton";
import {ReactComponent as PlayCircleIcon} from "../../../../img/icons/play.svg";
import {PageWrapper} from "../../../common/PageWrapper";
import {setActiveGameAC} from "../../../../store/games/actions";
import {useDispatch, useSelector} from "react-redux";
import {setGuestUserAC} from "../../../../store/auth/actions";
import {guestUserDataSelector} from "../../../../store/auth/selectors";


export default function ChooseAvatarAndNickname({inviteUrl}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const guestUserData = useSelector(guestUserDataSelector);
    const [activeBackgroundColor, setActiveBackgroundColor] = useState();
    const [activeAvatarIcon, setActiveAvatarIcon] = useState(AvatarEx1);
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

    const handleSavePlayer = () => {
        const userData = {
            displayName: nickname,
            avatarBackground: activeBackgroundColor,
            avatarUrl: activeAvatarIcon
        }
        dispatch(setGuestUserAC(userData))
    }

    useEffect(() => {
        if (inviteUrl) {
            const activeGame = decodeURIComponent(inviteUrl).split('___')[1]
            if(activeGame) {
                dispatch(setActiveGameAC({name: activeGame}))
            }
        }
    }, [])

    useEffect(() => {
        if (guestUserData) {
            navigate(inviteUrl)
        }
    }, [guestUserData])

    return (
        <PageWrapper backgroundColor={colors.cream}>
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
                               key={color}
                               onClick={() => setActiveBackgroundColor(color)}
                               isActive={color === activeBackgroundColor}/>
                )}
            </BackgroundsWrapper>

            <NickNameInput placeholder='nickname' value={nickname} onChange={(e) => setNickname(e.currentTarget.value)}/>

            <ButtonWrapper>
                <CustomButton handleFunction={handleSavePlayer} disabled={!activeBackgroundColor || !nickname} fullWidth buttonText='I’m Ready' icon={<PlayCircleIcon/>} />
            </ButtonWrapper>
        </PageWrapper>
    )
}

const AvatarPageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
`


const SliderWrapper = styled.div`
  max-width: 100vw;
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
