import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import { SocketProvider } from "socket.io-react"
// import io from "socket.io-client"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./ducks/store"

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <SocketProvider socket="">
        <App />
      </SocketProvider>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
