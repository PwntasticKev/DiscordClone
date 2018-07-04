import React, { Component } from "react"
import styled from "styled-components"
import Headphones from "../SVGs/headphones"
import Cog from "../SVGs/cog"
import Mic from "../SVGs/mic"
import axios from "axios"
export default class UserPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null
    }
  }
  componentDidMount() {
    axios.get("/user/info").then(res => {
      console.log("front end res.data", res.data)
      this.setState({
        username: res.data.username
      })
    })
  }

  render() {
    return (
      <BottomContainer>
        <OnlineContainer>
          <MyIcon />
          <Online />
        </OnlineContainer>
        <div>
          <div>{this.state.username}</div>
          <Hash>#8038</Hash>
        </div>
        <Mic />
        <Headphones />
        <Cog />
      </BottomContainer>
    )
  }
}

const BottomContainer = styled.section`
  display: flex;
  position: absolute;
  bottom: 0;
  margin-bottom: 1px;
  padding: 0 10px;
  background: rgba(32, 34, 37, 0.3);
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  height: 52px;
  width: 220px;
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
  bottom: -3px;
  height: 10px;
  right: 8px;
  position: absolute;
  width: 10px;
  background: #43b581;
  border: 2px solid #2f3136;
`
const OnlineContainer = styled.section`
  position: relative;
`
const Hash = styled.div`
  font-size: 10px;
  opacity: 0.3;
`
