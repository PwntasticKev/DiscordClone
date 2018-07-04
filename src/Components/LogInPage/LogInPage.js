import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

export default class LogInPage extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      email: ""
    }
  }
  inputTracker(e) {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  SignUp() {
    axios.post("/signup", { ...this.state }).then(res => {
      if (res.status === 200) {
        return this.props.history.push("/channels")
      }
    })
  }
  // could be res.status

  LogMeIn() {
    axios
      .post("/login", { ...this.state })
      .then(res => {
        if (res.status === 200) {
          return this.props.history.push("/channels")
        } else {
          return this.props.history.push("/")
        }
      })
      .catch(console.log)
  }
  //send the object over whatever is enters
  //login / signup

  render() {
    console.log(this.state.username, this.state.password, this.state.email)
    console.log("state", this.state)

    return (
      <Container>
        <Title>DISCORD CLONE</Title>
        <Input
          type="text"
          onChange={e => this.inputTracker(e)}
          name="username"
          placeholder="username..."
        />
        <Input
          type="text"
          onChange={e => this.inputTracker(e)}
          name="password"
          placeholder="Password..."
        />
        <Input
          type="text"
          onChange={e => this.inputTracker(e)}
          name="email"
          placeholder="Email..."
        />
        <ButtonContainer>
          <LogInButton onClick={_ => this.LogMeIn()}>Log in</LogInButton>
          <LogInButton onClick={_ => this.SignUp()}>Sign up</LogInButton>
        </ButtonContainer>
      </Container>
    )
  }
}

const LogInButton = styled.button`
  height: 3rem;
  width: 10rem;
  color: ghostwhite;
  background: #7289da;
  outline: 0;
  font-size: 1.25rem;
  margin-top: 3rem;
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
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1.25rem;
  outline: none;
  &::input[type="text"] {
    -webkit-appearance: none;
    color: red;
    background: ghostwhite;
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
