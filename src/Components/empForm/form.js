import React from "react";
import "./form.css";
class Form extends React.Component {
  render() {
    return (
      <div className="formContainer">
        <h1>fill employee details</h1>
        {/* <h1>{store.getState().inputName}</h1> */}
        <form onSubmit={this.props.handleSubmit}>
          <input
            required
            type="text"
            onChange={this.props.setNameValue}
            value={this.props.state.name}
            placeholder="Name"
          />

          <input
            required
            type="text"
            onChange={this.props.setEmpidValue}
            value={this.props.state.empId}
            placeholder="employee Id"
          />

          <input
            required
            type="number"
            onChange={this.props.setAgeValue}
            value={this.props.state.age}
            placeholder="age"
          />

          <input className = "formSubmit" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default Form;
