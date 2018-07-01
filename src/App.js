import React, { Component } from "react"
import SideBar from "./Components/SideBar/SideBar"
import CreateChannel from "./Components/Createchannel/CreateChannel"

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <CreateChannel />
      </div>
    )
  }
}

export default App
