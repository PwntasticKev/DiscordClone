import React, { Component } from "react"
import styled from "styled-components"
import MuteHeadphones from "./HeadphoneMute"
import UnMuteHeadphones from "./HeadphoneunMute"

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: true
    }
  }

  clicked(bool) {
    this.setState({
      clicked: !bool
    })
  }
  render() {
    return (
      <StyButton onClick={_ => this.clicked(this.state.clicked)}>
        <div>{this.state.clicked === true ? <UnMuteHeadphones /> : <MuteHeadphones />}</div>
      </StyButton>
    )
  }
}

const StyButton = styled.button`
  align-items: center;
  background: transparent no-repeat 50% 50%;
  background-size: 18px 18px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  opacity: 0.6;
  padding: 0;
  position: relative;
  width: 32px;
  outline: 0;
  &:hover {
    background-color: rgba(24, 25, 28, 0.3);
    opacity: 1;
  }
`
