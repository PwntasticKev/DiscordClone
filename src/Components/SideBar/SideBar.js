import React, { Component } from "react"
import styled from "styled-components"
import DiscordIcon from "./DiscordIcon"
import { connect } from "react-redux"
// import CreateChannel from "../Createchannel/CreateChannel"
// import { Link } from "react-router-dom"
import { toggleChannelMenu } from "../../ducks/reducer"

class SideBar extends Component {
  render() {
    return (
      <div style={{ display: "inlineBlock" }}>
        <SideBarContainer>
          <HomePageIcon>
            <DiscordIcon />
          </HomePageIcon>
          <Online>1 Online</Online>
          <Line />
          <CreateChannelButton
            onClick={_ =>
              this.props.toggleChannelMenu(this.props.channelMenuOpen)
            }
          >
            <Plus>+</Plus>
          </CreateChannelButton>
          <Line style={{ marginTop: "1rem" }} />
        </SideBarContainer>
      </div>
    )
  }
}

// this is sending over state or specific parts of redux state
function mapStateToProps(state) {
  return {
    channelMenuOpen: state.channelMenuOpen
  }
}

export default connect(
  mapStateToProps,
  { toggleChannelMenu }
)(SideBar)

const SideBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 96.9vh;
  width: 40px;
  padding: 0.7rem 1rem;
  align-items: center;
  background: #202225;
`

const HomePageIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgb(47, 49, 54);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgb(114, 137, 218);
    border-radius: 15px;
  }
`

const Line = styled.div`
  width: 30px;
  height: 2px;
  border-radius: 10%;
  margin-bottom: 10px;
  background: hsla(0, 0%, 100%, 0.3);
`

const Online = styled.div`
  color: hsla(0, 0%, 100%, 0.3);
  font-size: 10px;
  font-weight: 500;
  line-height: 130%;
  margin: 10px 0;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  width: 50px;
  word-wrap: normal;
`

const CreateChannelButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px dashed #535559;
  background: #1e2124;
  color: #535559;
  position: relative;
  transition: border-color 0.25s ease, color 0.25s ease;
  font-weight: 300;
  outline: 0;
  &:hover {
    border-color: hsla(0, 0%, 100%, 0.75);
    color: hsla(0, 0%, 100%, 0.75);
  }
`

const Plus = styled.div`
  font-size: 2.5rem;
  font-weight: 200;
  position: absolute;
  bottom: 4px;
  left: 13px;
`
