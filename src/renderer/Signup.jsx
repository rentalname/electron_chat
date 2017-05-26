import React from 'react';
import { Link } from 'react-router-dom';
import Errors from './Errors';
import firebase from 'firebase/firebase-browser';

const SIGNUP_FORM_STYLE = {
  margin: '0 auto',
  padding: 30,
};

const CANCEL_BUTTON_STYLE = {
  marginLeft: 10,
};

let history;

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    history = props.history;
    this.state = {
      email: '',
      password: '',
      name: '',
      photoURL: '',
      errors: [],
    };
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
    this.handleOnChangeName = this.handleOnChangeName.bind(this);
    this.handleOnChangePhotoURL = this.handleOnChangePhotoURL.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleOnChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleOnChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleOnChangePhotoURL(e) {
    this.setState({ photoURL: e.target.value });
  }

  handleOnSubmit(e) {
    const { email, password, name, photoURL } = this.state;
    const errors = [];
    let isValid = true;
    e.preventDefault();
    if (!email.length) {
      isValid = false;
      errors.push("Email address can't be blank");
    }
    if (!password.length) {
      isValid = false;
      errors.push("Password can't be blank");
    }
    if (!name.length) {
      isValid = false;
      errors.push("Name can't be blank");
    }
    if (!isValid) {
      this.setState({ errors });
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).then((newUser) => {
      newUser.updateProfile({ displayName: name, photoURL });
    }).then(() => {
      history.push('/rooms');
    }).catch((err) => {
      this.setState({
        errors: [err.message],
      });
    });
  }

  render() {
    return (
      <form action="" style={SIGNUP_FORM_STYLE} onSubmit={this.handleOnSubmit}>
        <Errors errorMessages={this.state.errors} />
        <div className="form-group">
          <label htmlFor="">Email address*</label>
          <input type="email" className="form-control" placeholder="email" onChange={this.handleOnChangeEmail} value={this.state.email} />
        </div>
        <div className="form-group">
          <label htmlFor="">Password*</label>
          <input type="password" className="form-control" placeholder="password" onChange={this.handleOnChangePassword} value={this.state.password} />
        </div>
        <div className="form-group">
          <label htmlFor="">User name*</label>
          <input type="text" className="form-control" placeholder="user name" onChange={this.handleOnChangeName} value={this.state.name} />
        </div>
        <div className="form-group">
          <label htmlFor="">Photo URL</label>
          <input type="text" className="form-control" placeholder="photo URL" onChange={this.handleOnChangePhotoURL} value={this.state.photoURL} />
        </div>
        <div className="form-group">
          <button className="btn btn-large btn-primary">Create new account</button>
          <Link to="/login">
            <button className="btn btn-large btn-debtn-default" style={CANCEL_BUTTON_STYLE} type="button">Cancel</button>
          </Link>
        </div>
      </form>
    );
  }
}
