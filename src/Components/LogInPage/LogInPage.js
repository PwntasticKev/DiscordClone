import React, { Component } from "react"
import styled from "styled-components"

export default class LogInPage extends Component {
  render() {
    return <LogInButton>LOG IN!</LogInButton>
  }
}

const LogInButton = styled.button`
  height: 5rem;
  width: 5rem;
  color: red;
  background: black;
  display: flex;
  justify-content: center;
  text-align: center;
  outline: 0;
`
