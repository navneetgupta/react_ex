import React, { Component, Suspense } from "react";
import { Route, NavLink } from "react-router-dom";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";
import Blog from "./Blog/Blog";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./Welcome";
import Post1 from "./Post1";
import User1 from "./User1";
import withClass from "../hoc/WithClass";

const Post1Lazy = React.lazy(() => import("./Post1"));

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
  }
  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 29 },
      { id: "3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
    isBlogProject: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state; // return updated state
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // or another way to copy
    // const person = Object.assign({}, this.state.persons[personIndex]);
    //
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  componentWillMount() {
    // NOTE : To be depreceated in library.
    console.log("[App.js] componentWillMount...");
  }
  componentDidMount() {
    // Here is the place where we could place the http calls.
    console.log("[App.js] componentDidMount..");
  }

  togglePersonViewHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  toggleBlogProject = () => {
    const oldState = this.state.isBlogProject;
    this.setState({
      isBlogProject: !oldState
    });
  };

  deletePersonElement = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  toggleCockpitHandler = () => {
    this.setState(prevState => {
      return { showCockpit: !prevState.showCockpit };
    });
  };
  loginHandler = () => {
    const authenticated = this.state.authenticated;
    if (!authenticated) {
      this.setState({ authenticated: true });
    }
  };
  /*
  <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>

  Here we are adding paranthesis () at end of function name as opposed to passing function reference as props to child components. because here it would not be executed immediately due to arraow function wrapper.
  this can be inefficient => React can re-render certain things in ur app to offten
  */
  render() {
    console.log("[App.js] render..");
    let cockpit = null;
    if (this.state.showCockpit) {
      cockpit = (
        <Cockpit
          personsLength={this.state.persons.length}
          styles={styles}
          toggle={this.togglePersonViewHandler}
        />
      );
    }
    let currentProject = <Blog />;
    if (!this.state.isBlogProject) {
      currentProject = (
        <Aux>
          <button onClick={this.toggleCockpitHandler}>Remove Cockpit</button>
          <AuthContext.Provider
            value={{
              authenticated: this.state.authenticated,
              login: this.loginHandler
            }}
          >
            {cockpit}
            <Persons
              persons={this.state.persons}
              clicked={this.deletePersonElement}
              showPersons={this.state.showPersons}
              changed={this.nameChangedHandler}
            />
          </AuthContext.Provider>
        </Aux>
      );
    }
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/user"> User Page</NavLink>
            <NavLink to="/post"> Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact />
          <Route path="/user" component={User1} />
          <Route
            path="/post"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <Post1Lazy />
              </Suspense>
            )}
          />
          <button onClick={this.toggleBlogProject}>Toggle Projects</button>
          {currentProject}
        </React.Fragment>
      </BrowserRouter>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, styles.App);
