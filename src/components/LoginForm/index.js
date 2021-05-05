import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: false,
    showerrorMessage: '',
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errormsg => {
    this.setState({errorMessage: true, showerrorMessage: errormsg})
  }

  onClickSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    console.log(data)
    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  renderInputValue = event => {
    this.setState({username: event.target.value})
  }

  renderUserPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {errorMessage, showerrorMessage} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />

        <form className="login-card-container" onSubmit={this.onClickSubmit}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
            className="nxt-trends-image"
          />
          <div className="input-field-container">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              className="input"
              onChange={this.renderInputValue}
            />
          </div>
          <div className="input-field-container">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="input"
              onChange={this.renderUserPassword}
            />
          </div>
          {errorMessage ? (
            <>
              <button type="submit" className="login-btn">
                Login
              </button>
              <p className="error-msg">*{showerrorMessage}</p>
            </>
          ) : (
            <button type="submit" className="login-btn">
              Login
            </button>
          )}
        </form>
      </div>
    )
  }
}

export default LoginForm
