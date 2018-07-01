import React, { Component } from "react"
import styled from "styled-components"
import DiscordIcon from "./DiscordIcon"
import { connect } from "react-redux"
import CreateChannel from "./CreateChannel"
// import { Link } from "react-router-dom"
// import { createChannelOpen } from "../ducks/reducer"

class SideBar extends Component {
  constructor() {
    super()
    this.state = {
      openChannelMenu: false
    }
  }

  handleMenu() {
    if (!this.state.openChannelMenu) this.setState({ openChannelMenu: true })
    else if (this.state.openChannelMenu) {
      this.setState({ openChannelMenu: false })
    }
  }

  handleClose() {
    this.setState({ openChannelMenu: false })
  }

  handleClose

  render() {
    return (
      <SideBarContainer>
        <HomePageIcon onClick={_ => this.handleClose()}>
          <DiscordIcon />
        </HomePageIcon>
        <Online>1 Online</Online>
        <Line />
        <CreateChannelButton onClick={_ => this.handleMenu()}>
          <Plus>+</Plus>
        </CreateChannelButton>
        <Line style={{ marginTop: "1rem" }} />
        <div
          className="menu"
          style={this.state.openChannelMenu === true ? test : test1}
        >
          <CreateChannel />
        </div>
      </SideBarContainer>
    )
  }
}

export default SideBar

let test1 = {
  display: "none"
}

let test = {
  display: "block"
}

const SideBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 40px;
  padding: 0.7rem 1rem;
  align-items: center;
  background: #202225;
`

const HomePageIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25%;
  background: #7289da;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: 2.25px dotted #535559;
  outline: none;
  background: #1e2124;
  color: #535559;
  position: relative;
`

const Plus = styled.div`
  font-size: 2.5rem;
  font-weight: 200;
  position: absolute;
  bottom: 3px;
  left: 11px;
`
