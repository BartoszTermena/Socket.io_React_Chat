import React, { Component } from 'react'
import { VERIFY_USER } from '../Events'

export default class LoginForm extends Component {
    state = {
        nickname:"",
        error:""
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    setUser = ({user, isUser}) => {

        if(isUser){
            this.setError("User name taken")
        } else {
            this.props.setUser(user)
            this.setError("")
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        const { socket } = this.props
        const { nickname } = this.state
        socket.emit(VERIFY_USER, nickname, this.setUser)
    }
    setError = error => {
        this.setState({error})
    }
  render() {
      const { nickname, error } = this.state
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login-form">
            <label htmlFor="nickname">
                <h2>Nickname</h2>
            </label>
            <input 
            value={nickname}
            name="nickname"
            onChange={this.handleChange} 
            placeholder={'Username'} />
            <div className="error">{error ? error : null}</div>
        </form>
      </div>
    )
  }
}
