import React, { Component } from "react"
import styled from "styled-components"
import { toggleChannelMenu } from "../../ducks/reducer"
import { connect } from "react-redux"
import bluePeopleIcon from "./img/bluepeopleicon.png"
import greenPeopleIcon from "./img/greeniconpeople.png"
import CircleThing from "./img/Circle.svg"
import FlagIcon from "./img/flagIcon.png"

class CreateChannel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createChannelPanel: false
    }
  }

  createMenuOpen(bool) {
    this.setState({
      createChannelPanel: !bool
    })
    console.log(bool)
  }

  render() {
    return (
      <div style={this.props.channelMenuOpen === true ? test : test1}>
        <Test
          display={this.state.createChannelPanel === true ? "none" : "block"}
        >
          <Title>OH, ANOTHER SERVER HUH?</Title>
          <BoxContainer>
            <LeftBox>
              <OptionTitle style={{ color: "#7289da" }}>Create</OptionTitle>
              <PeaTag>
                Create a new server and invite your friends. it's free!
              </PeaTag>
              <PeopleIcon />
              <PurpleButton
                onClick={_ =>
                  this.createMenuOpen(this.state.createChannelPanel)
                }
              >
                Create a Server
              </PurpleButton>
            </LeftBox>
            <Ore>or</Ore>
            <RightBox>
              <OptionTitle style={{ color: "#3ca374" }}>Join</OptionTitle>
              <PeaTag>
                Enter and Instant Invite and join your friend's server.
              </PeaTag>
              <GreenPeopleIcon />
              <GreenButton>Join a Server</GreenButton>
            </RightBox>
          </BoxContainer>
        </Test>
        <CreateChannelContainer
          display={this.state.createChannelPanel === true ? "block" : "none"}
        >
          <div>
            <H1>CREATE YOUR SERVER</H1>
            <SubTit>By creating a server, you will have access to </SubTit>
          </div>
          <BoxContainerCreate>
            <LeftBoxContainer>
              <div>
                <H5>SERVER NAME</H5>
                <input type="text" placehodler="Enter server name" />
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
                <div>By creating</div>
              </div>
            </LeftBoxContainer>
            <AvatarCircle>
              <HoverReveal>Change Icon</HoverReveal>
              <Upload type="file" accept=".jpg,.jpeg,.png,.gif" />
              <Small>Minimum Size: 128x128</Small>
            </AvatarCircle>
          </BoxContainerCreate>
          <FooterCreate>
            <button
              onClick={_ => this.createMenuOpen(this.state.createChannelPanel)}
            >
              Back
            </button>
            <button>Create</button>
          </FooterCreate>
        </CreateChannelContainer>
        <Container
          onClick={_ =>
            this.props.toggleChannelMenu(this.props.channelMenuOpen)
          }
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    channelMenuOpen: state.channelMenuOpen
  }
}

export default connect(
  mapStateToProps,
  { toggleChannelMenu }
)(CreateChannel)

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
const Test = styled.div`
  display: ${props => props.display};
  width: 490px;
  height: 23rem;
  background: white;
  z-index: 200;
  position: absolute;
  top: 9.5rem;
  margin-left: 32%;
  text-align: center;
  border-radius: 5px;
  padding: 30px 24px;
  background-image: url(""), url(/assets/6906eb3….png);
  background-position: 0 100%, 100% 100%;
  background-repeat: no-repeat;
  background-size: 155px auto, 75px auto;
  transition: transform 4s ease-in-out;
  transform: translateZ(0px);
`

const CreateChannelContainer = styled.section`
  display: ${props => props.display};
  width: 490px;
  height: 23rem;
  background: white;
  z-index: 200;
  position: absolute;
  top: 9.5rem;
  margin-left: 32%;
  text-align: center;
  border-radius: 5px;
  padding: 28px 40px 0 48px;
`
let test1 = {
  display: "none"
}

let test = {
  display: "block"
}

const RightBox = styled.section`
  background: hsla(0, 0%, 100%, 0.75);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  cursor: pointer;
  margin-left: 16px;
  padding: 10px;
`

const LeftBox = styled.section`
  background: hsla(0, 0%, 100%, 0.75);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  cursor: pointer;
  padding: 10px;
`

const BoxContainer = styled.section`
  display: flex;
  justify-content: space-between;
`
const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 40px;
  margin-top: 6px;
  padding: 0;
  color: #7289da;
`
const PeaTag = styled.p`
  color: #99aab5;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 16px;
  padding: 0 18px;
`
const OptionTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  text-transform: uppercase;
`
const GreenButton = styled.button`
  background-color: #3ca374;
  padding: 14px 20px;
  width: 100%;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  transition: background-color 0.2s ease;
  outline: 0;
`

const PurpleButton = styled.button`
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
  outline: 0;
  padding: 14px 20px;
  width: 100%;
`

const PeopleIcon = styled.div`
  background: url(${bluePeopleIcon}) 50% no-repeat;
  background-size: 130px 78px;
  height: 78px;
  margin: 26px 0;
  width: 100%;
`

const GreenPeopleIcon = styled.div`
  background: url(${greenPeopleIcon}) 50% no-repeat;
  background-size: 190px 78px;
  height: 78px;
  margin: 26px 0;
  width: 100%;
`

const Ore = styled.div`
  background-image: url(${CircleThing});
  background-position: 49.9%, 50%;
  background-repeat: no-repeat;
  background-size: 52px, 52px;
  color: #99aab5;
  font-size: 22px;
  font-weight: 500;
  height: 100%;
  left: 0;
  line-height: 380px;
  padding-top: 48px;
  pointer-events: none;
  position: absolute;
  text-align: center;
  bottom: -47px;
  width: 100%;
`

// Create Your Server Styles

const FooterCreate = styled.section`
  background-color: #f9f9f9;
  border-radius: 0 0 5px 5px;
  border-top: 1px solid #f0f0f0;
  box-sizing: border-box;
  padding: 18px 40px;
  width: 100%;
`

const H1 = styled.h1`
  color: #7289da;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;
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
  left: 3rem;
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
