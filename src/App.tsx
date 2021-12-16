import React from 'react'
import { WindowContainer, Right, Left, Card, LeftTop, LeftBottom, Title, SubTitle, HContainer, FormContainer } from './components/layout/Window.styled'
import GlobalStyle from './global'
import brandIcon from './brandIcon.png'
import { ImgContainer } from './components/ImgContainer'
import InputText from './components/InputText'
import Btn, { BlueBtn, SecondaryBtn } from './components/Btn'
import { ReactComponent as ReactLogo } from './earth.svg';
import { TextArea } from './components/TextArea'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <WindowContainer className='WindowContainer'>
        <Card>
          <Left>
            <LeftTop>
              <ImgContainer src={brandIcon} alt="BrandImg" />
            </LeftTop>
            <LeftBottom>
              <HContainer _marginTop='25px' >
                <Title>
                  Alex & Jan Niklas
                </Title>
              </HContainer>
              <HContainer _marginTop='25px'>
                <span style={{ marginTop: '8px', marginRight: '8px' }} className="material-icons"> public
                </span>
                <SubTitle>
                  Web conferencing details provided upon confirmation.
                </SubTitle>
              </HContainer>
              <HContainer _marginTop='2px'>
                <span style={{ marginTop: '8px', marginRight: '8px' }} className="material-icons">
                  videocam
                </span>
                <SubTitle>
                  15:30 - 16:30, Wednesday, December 15, 2021
                </SubTitle>
              </HContainer>
              <HContainer _marginTop='2px'>
                <span style={{ marginTop: '8px', marginRight: '8px' }} className="material-icons">
                  calendar_today
                </span>
                <SubTitle>
                  15:30 - 16:30, Wednesday, December 15, 2021
                </SubTitle>
              </HContainer>
            </LeftBottom>
          </Left>
          <Right>
            <FormContainer className='FormContainer'>
              <Title>
                Enter Details
              </Title>
              <SubTitle>
                Name*
              </SubTitle>
              <InputText />
              <SubTitle>
                Lastname*
              </SubTitle>
              <InputText />
              <SecondaryBtn>
                Add Guests
              </SecondaryBtn>
              <SubTitle>
                Please share anything that will help prepare for our meeting.
              </SubTitle>
              <TextArea aria-invalid="false" name="question_0" autoCorrect="off" autoComplete="off"   ></TextArea>
              <BlueBtn >
                Schedule Event
              </BlueBtn>
            </FormContainer>

          </Right>
        </Card>
      </WindowContainer>
    </>
  )
}

export default App
