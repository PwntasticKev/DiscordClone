import React, { Component } from "react"
import styled from "styled-components"
import SideBar from "../SideBar/SideBar"
import CreateChannel from "../Createchannel/CreateChannel"
import Friends from "../Friends/Friends"

export default class Homepage extends Component {
  render() {
    return (
      <Container>
        <SideBar />
        <CreateChannel />
        <Friends />
      </Container>
    )
  }
}

const Container = styled.section`
  display: flex;
`
