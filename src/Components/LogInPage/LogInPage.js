import React, { Component } from "react"
import styled from "styled-components"

export default class LogInPage extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }
  inputTracker(e) {
    let { name, value } = e.target
    console.log(this.state.username)
    console.log(this.state.password)
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <Container>
        <Title>DISCORD CLONE</Title>
        <Input
          type="text"
          onChange={e => this.inputTracker(e)}
          name="username"
        />
        <Input
          type="text"
          onChange={e => this.inputTracker(e)}
          name="password"
        />
        <ButtonContainer>
          <LogInButton>Log in</LogInButton>
          <LogInButton>Sign up</LogInButton>
        </ButtonContainer>
      </Container>
    )
  }
}

const LogInButton = styled.button`
  height: 3.5rem;
  width: 10rem;
  color: ghostwhite;
  background: #7289da;
  outline: 0;
  font-size: 1.25rem;
  margin-top: 1rem;
  align-content: center;
`

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

const Input = styled.input`
  height: 2rem;
  color: black;
  border: 2.25px solid black;
  margin-top: 1rem;
  font-weight: bold;
  font-size:1.25rem
  outline: none;
  &::input[type="text"] {
    -webkit-appearance: none;
    color: red;
    background:ghostwhite;
    width: 5rem;
    height: 2rem;
  }
`

const Title = styled.div`
  font-size: 2rem;
  color: #7289da;
`

const ButtonContainer = styled.section`
  display: flex;
`
