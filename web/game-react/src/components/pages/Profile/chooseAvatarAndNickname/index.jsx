import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components'
import 'swiper/css';
import "swiper/css/pagination";
import {ButtonWrapper, PageContainer, SectionHeader} from "../../../../Helpers/UI";
// import {ReactComponent as NotificationIcon} from '../../../../img/icons/notification.svg';
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
import {colors} from "../../../../Helpers/UI/constants";
import Avatar0 from '../../../../img/avatars/FinalDelivery_male01.svg';
import Avatar1 from '../../../../img/avatars/FinalDelivery_other01.svg';
import Avatar2 from '../../../../img/avatars/FinalDelivery_male02.svg';
import Avatar3 from '../../../../img/avatars/FinalDelivery_other02.svg';
import Avatar4 from '../../../../img/avatars/FinalDelivery_male03.svg';
import Avatar5 from '../../../../img/avatars/FinalDelivery_other03.svg';
import Avatar6 from '../../../../img/avatars/FinalDelivery_male04.svg';
import Avatar7 from '../../../../img/avatars/FinalDelivery_other04.svg';
import Avatar8 from '../../../../img/avatars/FinalDelivery_male05.svg';
import Avatar9 from '../../../../img/avatars/FinalDelivery_other05.svg';
import Avatar10 from '../../../../img/avatars/FinalDelivery_male06.svg';
import Avatar11 from '../../../../img/avatars/FinalDelivery_female06.svg';
import Avatar12 from '../../../../img/avatars/FinalDelivery_other06.svg';
import Avatar13 from '../../../../img/avatars/FinalDelivery_male07.svg';
import Avatar14 from '../../../../img/avatars/FinalDelivery_female07.svg';
import Avatar15 from '../../../../img/avatars/FinalDelivery_other07.svg';
import Avatar16 from '../../../../img/avatars/FinalDelivery_male08.svg';



const avatarsMap = [
    Avatar0,
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar5,
    Avatar6,
    Avatar7,
    Avatar8,
    Avatar9,
    Avatar10,
    Avatar11,
    Avatar12,
    Avatar13,
    Avatar14,
    Avatar15,
    Avatar16
]

export default function ChooseAvatarAndNickname({inviteUrl}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const guestUserData = useSelector(guestUserDataSelector);
    const [activeBackgroundColor, setActiveBackgroundColor] = useState();
    const [activeAvatarIcon, setActiveAvatarIcon] = useState(avatarsMap[0]);
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
                    onSlideChange={(item) => setActiveAvatarIcon(avatarsMap[item.activeIndex])}
                    onSwiper={(swiper) => console.log('on swiper ... ')}
                >
                    {avatarsMap.map(avatar => (
                        <SwiperSlide key={avatar}>
                            <AvatarBadge backgrond={activeBackgroundColor}>
                                <SliderImage src={avatar} alt=""/>
                            </AvatarBadge>
                        </SwiperSlide>
                    ))}
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

export const AvatarBadge = styled.div`
  background-color: ${props => props.backgrond};
  border-radius: 48px;
  height: 100%;
  width: 100%;
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
