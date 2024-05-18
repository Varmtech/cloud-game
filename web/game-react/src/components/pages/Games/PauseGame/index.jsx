import React from "react";
import styled from 'styled-components'
import {ReactComponent as LogoutIcon} from "../../../../img/icons/log-out-red.svg";
import {ReactComponent as PlayIcon} from "../../../../img/icons/play.svg";
import {CustomButton} from "../../../common/CustomButton";
import {event, KEY_PRESSED, KEY_RELEASED, QUIT_GAME} from "../../../../js/event/event";
import {KEY} from "../../../../js/input/keys";

export default function PauseGame({onResumeGame}) {

    const handleResume = (mouseDown) => {
        if(mouseDown) {
            event.pub(KEY_PRESSED, { key: KEY.START });
        } else {
            onResumeGame()
            event.pub(KEY_RELEASED, { key: KEY.START });
        }
    }

    return (
        <Container>
            <ButtonsGroup>
                <ResumeButton onMouseDown={() => handleResume(true)} onMouseUp={() => handleResume(false)} >
                    <CustomButton fullWidth buttonText='Resume' icon={<PlayIcon />} />
                </ResumeButton>
                <EndSession href='https://forms.gle/TqxA8tkarhzhdinE8'>
                    <CustomButton transparent fullWidth buttonText='End Session' icon={<LogoutIcon />} />
                </EndSession>

            </ButtonsGroup>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(33, 33, 33, 0.6);
  z-index: 15;
`

const ButtonsGroup = styled.div`
  max-width: 50%;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`
const EndSession = styled.a`
  display: inline-block;
  width: 100%;
  & > button {
    background-color: #E6D8BF;
    color: #B00020;
  }
`
const ResumeButton = styled.div`
  display: inline-block;
  width: 100%;
`
