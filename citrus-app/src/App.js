import React, { Component } from 'react';
import {Switch, Link, Route} from "react-router-dom";
import './App.css';


class App extends Component {
  render() {
    return <div className='app'>
        <Switch>
          <Route exact path={"/"} render={() => (<div>
            <header>
                <div className='wrapper'>
                  <h1>$$ Plannerr $$</h1>
                </div>
            </header>
            <div className='container'>
              <section className='sign-in'>
                  <form>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="text" name="password" placeholder="Password" />
                    <Link to={"/planner-lists"}>
                      <button>SIGN IN</button>
                    </Link>
                  </form>
              </section>
              <section className='confirm'>
                <div className='wrapper'>
                  <ul>
                  </ul>
                </div>
              </section>
            </div>
            </div>
          )}/>
          <Route exact path={"/planner-lists"} render={() => (
            <div>
              Welcome to planner-lists
            </div>
          )}/>
        </Switch>
      </div>
  }
}
export default App;