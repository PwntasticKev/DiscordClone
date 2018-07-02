import React, { Component } from "react"
import styled from "styled-components"
import { toggleChannelMenu } from "../../ducks/reducer"
import { connect } from "react-redux"
import bluePeopleIcon from "./bluepeopleicon.png"
import greenPeopleIcon from "./greeniconpeople.png"
import CircleThing from "./Circle.svg"

class CreateChannel extends Component {
  render() {
    return (
      <div style={this.props.channelMenuOpen === true ? test : test1}>
        <Test>
          <Title>OH, ANOTHER SERVER HUH?</Title>
          <BoxContainer>
            <LeftBox>
              <OptionTitle style={{ color: "#7289da" }}>Create</OptionTitle>
              <PeaTag>
                Create a new server and invite your friends. it's free!
              </PeaTag>
              <PeopleIcon />
              <PurpleButton>Create a Server</PurpleButton>
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
  z-index: 5;
  opacity: 0.85;
  background-color: rgb(0, 0, 0);
  transform: translateZ(0px);
`
const Test = styled.div`
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
