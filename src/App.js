import "./App.css";
import React from "react";
import store from "./redux/reduxForm";
import { submitDetails } from "./redux/reduxForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Form from "./Components/empForm/form";
import EmpTable from "./Components/empTable/empTable";
// store.subscribe(() => {
//   console.log("sub", store.getState());
// });

class App extends React.Component {
  state = {
    name: "",
    empId: "",
    age: "",
  };

  setNameValue = (event) => {
    let temp = { ...this.state };
    // console.log(temp);
    temp.name = event.target.value;
    this.setState(temp);
  };
  setEmpidValue = (event) => {
    let temp = { ...this.state };
    temp.empId = event.target.value;
    this.setState(temp);
  };
  setAgeValue = (event) => {
    let temp = { ...this.state };
    temp.age = event.target.value;
    this.setState(temp);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    store.dispatch(submitDetails(this.state));
    this.setState({
      name: "",
      empId: "",
      age: "",
    });
    alert("submited successfully")
  };

  render() {
    // return (
    //   <div className="App">
    //     <EmpTable store={store} />

    //     <Form
    //       state={this.state}
    //       setNameValue={this.setNameValue}
    //       setEmpidValue={this.setEmpidValue}
    //       setAgeValue={this.setAgeValue}
    //       handleSubmit={this.handleSubmit}
    //     />
    //   </div>
    // );
    return (
      <Router>
        <div className="App">
          <nav>
          <Link to="/"><button>home</button></Link>

            <Link to="/table"><button>table</button></Link>
          </nav>
          <Switch>
            <Route path="/table">
              <EmpTable store={store} />
            </Route>

            <Route path="/">
              <Form
                state={this.state}
                setNameValue={this.setNameValue}
                setEmpidValue={this.setEmpidValue}
                setAgeValue={this.setAgeValue}
                handleSubmit={this.handleSubmit}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
