import React, { Component } from "react"
import SideBar from "../SideBar/SideBar"
import CreateChannel from "../Createchannel/CreateChannel"

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <CreateChannel />
      </div>
    )
  }
}
