import React, { Component } from "react"
import styled from "styled-components"

export default class componentName extends Component {
  render() {
    return <Container>TESTING</Container>
  }
}

const Container = styled.section`
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.7;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
`
