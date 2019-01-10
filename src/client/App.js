import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { sendText } from './Reducers/PageState'

class App extends Component {
  state = {
    val: ''
  }

  _sendText = (e) => {
    e.preventDefault();
  }

  onInputChange = (value) => {
    this.setState({ val: value })
  }

  onClickSubmit = async () => {
    // sending text as param (same text will be received after the call) (REDUX)
    await this.props.sendText(this.state.val)
  }


  render() {
    const { txt } = this.props

    return (
      <div style={{ padding: '15%' }}>
        <form onSubmit={ this._sendText } className="needs-validation" novalidate>
          <div className="form-row">
            <div className="col-md-12 xs-12 sm-12 lg-12 mb-3 input-group">
              <input type="text" className="form-control" placeholder="write the text" onChange={ e => this.onInputChange(e.target.value) } required />
              <div className="input-group-append">
                <input type="submit" value="Send Text" className="btn btn-primary" onClick={ this.onClickSubmit } />
              </div>
            </div>
          </div>
        </form>
        { txt &&
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Your text is: </h5>
              <div>
                { txt }
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

App.propTypes = {
  sendText: PropTypes.func.isRequired,
  txt: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  const { txt } = state.PageState ? state.PageState : { txt: '' };
  return {
    txt
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    sendText
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

