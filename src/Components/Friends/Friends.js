import React, { Component } from "react"
import styled from "styled-components"
import GameCont from "../SVGs/gameController"
import FriendIcon from "../SVGs/friendIcon"
import UserPanel from "./UserPanel"

export default class Friends extends Component {
  render() {
    return (
      <Container>
        <InputContainer>
          <OuterInput>
            <InnerInput placeholder="Find or start a conversation" />
          </OuterInput>
        </InputContainer>
        <GamesyFriends>
          <FlexContainer>
            <GameCont />
            <Option>Games</Option>
          </FlexContainer>
          <FlexContainer>
            <FriendIcon />
            <Option>Friends</Option>
          </FlexContainer>
        </GamesyFriends>
        <DirectMes>Direct Messages</DirectMes>
        <MessagesContainer>
          <OnlineContainer>
            <MyIcon />
            <Online />
            <FriendOnline>TabNana</FriendOnline>
          </OnlineContainer>
          <OnlineContainer>
            <MyIcon />
            <Online />
            <FriendOnline>Skallywag</FriendOnline>
          </OnlineContainer>
        </MessagesContainer>

        <UserPanel />
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
  font-weight: 500;
  font-size: 15px;
  text-overflow: ellipsis;
  color: #f6f6f7;
`

const MessagesContainer = styled.section``

const DirectMes = styled.div`
  cursor: default;
  font-size: 13px;
  margin-top: 12px;
  font-weight: 500;
  opacity: 0.3;
  padding: 9px 20px;
  transition: opacity 0.15s ease;
  white-space: nowrap;
`
const InnerInput = styled.input`
  cursor: pointer;
  min-width: 202px !important;
  padding: 5px 5px;
  resize: none;
  height: 17px;
  background-color: #25272b;
  font-size: 11px;
  border: none;
  opacity: 0.8;
  outline: none;
`

const OuterInput = styled.div`
  padding: 2px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 7px;
`

const InputContainer = styled.section`
  background-color: transparent;
  border-radius: 0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 2px 0 rgba(0, 0, 0, 0.06);
  height: 48px;
  padding: 0 12px;
  position: relative;
  z-index: 1;
`

const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  font-weight: 400;
  height: 40px;
  margin: 1px 0 1px 8px;
  padding: 0 8px;
  text-decoration: none;
`

const Option = styled.div`
  margin-left: 18px;
  opacity: 0.3;
`

const GamesyFriends = styled.section`
  padding-top: 20px;
`

const MyIcon = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 10px;

  background: red;
`
const Online = styled.div`
  border-radius: 7px;
  bottom: 3px;
  height: 10px;
  left: 28px;
  position: absolute;
  width: 10px;
  background: #43b581;
  border: 2px solid #2f3136;
`
const OnlineContainer = styled.section`
  display: flex;
  position: relative;
  height: 26px;
  margin: 1px 0 1px 8px;
  padding: 8px;
  font-weight: 400;
  align-items: center;
  border-radius: 3px;
`
const FriendOnline = styled.div`
  font-size: 15px;
  opacity: 0.3;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 20px;
  font-weight: 500;
  color: #f6f6f7;
  margin-left: 12px;
`
