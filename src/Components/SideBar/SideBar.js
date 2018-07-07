import React, { Component } from "react"
import styled from "styled-components"
import DiscordIcon from "./SVG/DiscordIcon"
import { connect } from "react-redux"
// import CreateChannel from "../Createchannel/CreateChannel"
import { Link } from "react-router-dom"
import { toggleChannelMenu } from "../../ducks/reducer"

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home: true
    }
  }

  home(bool) {
    this.setState({
      home: !bool
    })
  }
  render() {
    return (
      <div>
        <SideBarContainer>
          <Link to="/channels">
            <HomePageIcon
              onClick={_ => this.home(this.state.home)}
              style={this.state.home === true ? IconstyleClicked : null}
            >
              <DiscordIcon />
            </HomePageIcon>
          </Link>
          <Online>1 Online</Online>
          <Line />
          <Link to="/t">
            <ChannelIcon>T</ChannelIcon>
          </Link>
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

let IconstyleClicked = {
  background: "rgb(114, 137, 218)",
  borderRadius: "15px"
}

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
  font-weight: 300;
  outline: 0;
  margin-top: 8px;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  &:hover {
    border-color: hsla(0, 0%, 100%, 0.75);
    color: hsla(0, 0%, 100%, 0.75);
  }
`

const ChannelIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgb(47, 49, 54);
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 8px;
  color: #fff;
`

const Plus = styled.div`
  font-size: 2.5rem;
  font-weight: 200;
  position: absolute;
  bottom: 4px;
  left: 13px;
`
