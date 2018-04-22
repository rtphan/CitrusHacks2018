import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './signUp';
import { auth } from './firebase';
import * as routes from './routes';

const SignInPage = ({ history }) =>
  <div>
    <header>
      <div className='wrapper'>
        <h1>$$ Planner $$</h1>
      </div>
    </header>
    <div className='container'>
      <section className='sign-in'>
        <form>
          <SignInForm history={history} />
        </form>
      </section>
      <SignUpLink />
    </div>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        /*this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.LISTS);*/
        var user = auth.currentUser;
        var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
           history.push(routes.LISTS);
        }
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
