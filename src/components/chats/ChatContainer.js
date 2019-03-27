import React, { Component } from 'react'
import SideBar from './Sidebar'

export default class ChatContainer extends Component {
    state = {
        chats:[],
        activeChat: null
    }   
    setActiveChat = (activeChat) => {
        this.setState({activeChat})
    }
  render() {
      const { user, logout } = this.props
      const { chats, activeChat } = this.state
    return (
      <div className="container">
        <SideBar 
        logout={logout}
        chats={chats}
        user={user}
        activeChat={activeChat}
        setActiveChat={this.setActiveChat}
        />
      </div>
    )
  }
}
