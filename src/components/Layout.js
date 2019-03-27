import React, { Component } from 'react'
import openSocket from 'socket.io-client';
import LoginForm from './LoginForm'
import { USER_CONNECTED, LOGOUT } from '../Events'

const socketUrl = "http://localhost:3231"

export default class Layout extends Component {
    state = {
        socket: null,
        user: null
    }
    componentWillMount() {
        this.initSocket()
    }
    initSocket = () => {
        const socket = openSocket(socketUrl)
        socket.on('connect', () => {console.log(`Connected`)})
        this.setState({socket})
    }

    setUser = (user) => {
        const {socket} = this.state
        socket.emit(USER_CONNECTED, user)
        this.setState({user})
    }
    logout = () => {
        const { socket } = this.state
        socket.emit(LOGOUT)
        this.setState({user: null})
    }
  render() {
      const { title } = this.props;
      const { socket } = this.state;
    return (
      <div className="container">
        <LoginForm socket={socket} setUser={this.setUser} />
      </div>
    )
  }
}
