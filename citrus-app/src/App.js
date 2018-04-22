import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Citrus Hacks 2018</h1>
              
            </div>
        </header>
        <div className='container'>
          <section className='sign-in'>
              <form>
                <input type="text" name="username" placeholder="Username" />
                <input type="text" name="password" placeholder="Password" />
                <button>SIGN IN</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;