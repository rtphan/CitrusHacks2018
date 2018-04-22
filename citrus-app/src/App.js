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
                  <h1>$$ Planner $$</h1>
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
              <Link to={"/new-user"}>
                <div className="sign-up">New user? Sign up here!</div>
              </Link>
            </div>
            </div>
          )}/>
          <Route exact path={"/new-user"} render={() => (
            <div>
            TO-DO: JASON ADD IN BETWEEN HERE
            </div>
          )}/>
          <Route exact path={"/planner-lists"} render={() => (
            <div>
              <header>
                <div className='wrapper'>
                  <h1>Choose a Planner</h1>
                </div>
              </header>
              <ul class="planners">
                <div class={"planner-buttons"}>
                  <li><Link to={"/planner-temp"}>
                    <button class="planner-buttons button1">Planner 1</button>
                  </Link></li>
                  <li><Link to={"/planner-temp"}>
                    <button class="planner-buttons button2">Planner 2</button>
                  </Link></li>
                  <li><Link to={"/planner-temp"}>
                    <button class="planner-buttons button3">Planner 3</button>
                  </Link></li>
                  <li><Link to={"/planner-temp"}>
                    <button class="planner-buttons new-planner">Add Planner</button>
                  </Link></li>
                </div>
              </ul>
            </div>
          )}/>
          <Route exact path={"/planner-temp"} render={() => (
            <div>This is your planner</div>
          )}/>
        </Switch>
      </div>
  }
}
export default App;