import React, { Component } from "react"
import SideBar from "./Components/SideBar/SideBar"
import CreateChannel from "./Components/Createchannel/CreateChannel"
import { toggleChannelMenu } from "./ducks/reducer"
import { connect } from "react-redux"

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <div
          className="menu"
          style={this.props.channelMenuOpen === true ? test : test1}
        >
          <CreateChannel />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    channelMenuOpen: state.channelMenuOpen
  }
}

export default connect(
  mapStateToProps,
  { toggleChannelMenu }
)(App)

let test1 = {
  display: "none"
}

let test = {
  display: "block"
}
