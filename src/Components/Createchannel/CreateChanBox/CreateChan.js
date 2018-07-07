import React, { Component } from "react"
import styled from "styled-components"
import FlagIcon from "../img/flagIcon.png"
import Arrow1 from "../img/arrow1"

export default class CreateChan extends Component {
  render() {
    return (
      <div>
        <ContainChannel
          display={this.props.createChannelPanel === true ? "block" : "none"}
        >
          <UpperChannelCreate>
            <div>
              <H1>CREATE YOUR SERVER</H1>
              <SubTit>
                By creating a server, you will have access to voice and text
                chat to use amongst your friends.
              </SubTit>
            </div>
            <BoxContainerCreate>
              <LeftBoxContainer>
                <div>
                  <H5>SERVER NAME</H5>
                  <EnterServerName
                    type="text"
                    placehodler="Enter server name"
                  />
                </div>
                <div>
                  <H5>SERVER REGION</H5>
                  <FlagButtonContainer>
                    <FlagContainer>
                      <Flag src={FlagIcon} alt="" />
                      <US>US West</US>
                    </FlagContainer>
                    <ChangeButton>change</ChangeButton>
                  </FlagButtonContainer>
                  <Glines style={{ margin: "15px 0" }}>
                    By creating a server, you agree to Discord's Community
                    Guidelines
                  </Glines>
                </div>
              </LeftBoxContainer>
              <AvatarCircle>
                <HoverReveal>Change Icon</HoverReveal>
                <Upload type="file" accept=".jpg,.jpeg,.png,.gif" />
                <Small>Minimum Size: 128x128</Small>
              </AvatarCircle>
            </BoxContainerCreate>
          </UpperChannelCreate>
          <FooterCreate>
            <BackButton
              onClick={_ =>
                this.props.menuOpenClose(this.props.createChannelPanel)
              }
            >
              <Arrow1 />
            </BackButton>
            <CreateButton>Create</CreateButton>
          </FooterCreate>
        </ContainChannel>
        <Container
        // onClick={_ =>
        //   this.props.toggleChannelMenu(this.props.channelMenuOpen)
        // }
        />
      </div>
    )
  }
}
const UpperChannelCreate = styled.section`
  padding: 28px 40px 0 48px;
`

const ContainChannel = styled.section`
  display: ${props => props.display};
  width: 538px;
  height: 26.75rem;
  background: white;
  z-index: 200;
  position: absolute;
  top: 9.5rem;
  margin-left: 32%;
  text-align: center;
  border-radius: 5px;
`

const Container = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  opacity: 0.85;
  background-color: rgb(0, 0, 0);
  transform: translateZ(0px);
`

const H1 = styled.h1`
  color: #7289da;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
  margin: 0;
`
const SubTit = styled.h5`
  color: #99aab5;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  padding: 10px 0;
  text-align: center;
`

const H5 = styled.h5`
  color: #87909c;
  display: block;
  font-size: 11px;
  font-weight: 700;
`
const FlagContainer = styled.section`
  display: flex;
  padding: 7px;
  border: 1px solid #cdcdcd;
  border-radius: 4px 0 0 4px;
  width: 9rem;
  align-items: center;
`

const FlagButtonContainer = styled.section`
  display: flex;
  height: 46px;
  margin-top: 10px;
  background-color: transparent;
  box-sizing: border-box;
  cursor: pointer;
`

const Flag = styled.img`
  width: 44px;
  height: 30px;
  border-radius: 4px;
  background-color: #7289da;
  background-size: 44px 30px;
  margin-right: 16px;
`
const US = styled.p`
  color: #99aab5;
  font-size: 16px;
  font-weight: 700;
`

const ChangeButton = styled.button`
  background-color: transparent;
  border: 1px solid #cdcdcd;
  border-left: none;
  border-radius: 0 4px 4px 0;
  color: #7289da;
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
`
const BoxContainerCreate = styled.section`
  display: flex;
  margin-top: 14px;
`
const LeftBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
`

// right box

const HoverReveal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  text-transform: uppercase;
  visibility: hidden;
  padding: 0 2rem;
`
const AvatarCircle = styled.div`
  background-color: #7289da;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 128px 128px;
  border: 5px solid #ebebeb;
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  height: 138px;
  right: 2rem;
  margin-bottom: 10px;
  position: relative;
  transition: -webkit-box-shadow 0.1s;
  transition: box-shadow 0.1s;
  width: 138px;
  &:hover {
    box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.75);
  }

  &:hover ${HoverReveal} {
    visibility: visible;
  }
`
const Upload = styled.input`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`
const Small = styled.p`
  color: #87909c;
  display: block;
  font-size: 10px;
`

const Glines = styled.p`
  color: #87909c;
  font-size: 11px;
  margin: 0;
`

//footer options

const FooterCreate = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
  border-radius: 0 0 5px 5px;
  border-top: 1px solid #f0f0f0;
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 18px 40px;
  text-align: right;
  width: 100%;
  border-top: 1px solid #f0f0f0;
`

const CreateButton = styled.button`
  margin-left: 20px;
  background-color: #7289da;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  padding: 10px 20px;
  position: relative;
  transition: background-color 0.2s ease;
`

const BackButton = styled.button`
  background-color: #f9f9f9;
  outline: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #f9f9f9;
  color: #949494;
  padding: 10px 0 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  padding: 10px 20px;
  position: relative;
  transition: background-color 0.2s ease;
  &:after {
    content: "Back";
  }
  &:hover {
    border-bottom: 2px solid #949494;
  }
`

const EnterServerName = styled.input`
  border: none;
  border-bottom: 1px solid #f0f0f0;
  color: #2f3136;
  outline: 0;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 1px;
  resize: none;
  width: 80%;
  &:focus {
    border-bottom: 2px solid #7289da;
    margin-bottom: 0;
  }
`
