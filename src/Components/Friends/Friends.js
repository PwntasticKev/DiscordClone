import React, { Component } from "react"
import styled from "styled-components"
import GameCont from "./gameController"

export default class Friends extends Component {
  render() {
    return (
      <Container>
        <OuterInput>
          <ConvoInput placeholder="Find or start a conversation" />
        </OuterInput>
        <div>
          <FlexContainer>
            <GameCont />
            <div>Games</div>
          </FlexContainer>
          <div>
            <div>Game Icon</div>
            <div>Games</div>
          </div>
        </div>
        <DirectMes>Direct Messages</DirectMes>
        <MessagesContainer>
          <div>
            <div>ICON</div>
            <div>Message from friend</div>
          </div>
          <div>
            <div>ICON</div>
            <div>Message from friend</div>
          </div>
        </MessagesContainer>
      </Container>
    )
  }
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #2f3136;
  width: 240px;
  overflow-y: scroll;
  overflow: hidden;
  color: #f6f6f7;
  font-weight: 500;
  font-size: 15px;
`

const MessagesContainer = styled.section``

const DirectMes = styled.div`
  cursor: default;
  font-size: 12px;
  margin-top: 12px;
  font-weight: 500;
  opacity: 0.3;
  padding: 9px 20px;
  transition: opacity 0.15s ease;
  white-space: nowrap;
`
const ConvoInput = styled.input`
  cursor: pointer;
  min-width: 202px !important;
  padding: 5px 7px;
  resize: none;
  background-color: #25272B
  font-size: 12px;
  border: none;
`

const OuterInput = styled.div`
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 2px 0 rgba(0, 0, 0, 0.06);
  height: 32px;
  padding: 0 12px;
  position: relative;
  z-index: 1;
  background: transparent;
  text-align: center;
  margin-top: 7px;
  padding: 0 12px;
`

const FlexContainer = styled.section`
  display: flex;
`
