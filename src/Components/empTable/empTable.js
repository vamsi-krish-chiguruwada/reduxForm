import React from "react";
// import store from "../../redux/reduxForm";
import "./empTable.css"

class EmployeeTable extends React.Component {
//   state = {
//     employees: [],
//   };
//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState({ employees: this.props.store.getState().employees });
//     //   console.log(this.props.store.getState().employees);
//     });
//   }
//   componentWillReceiveProps(){
//     this.unsubscribe = store.subscribe(() => {
//         this.setState({ employees: this.props.store.getState().employees });
//         // console.log(this.props.store.getState().employees);
//       });
//   }
//   componentWillUnmount() {
//     this.unsubscribe();
//   }

  render() {
    return (
      <div className = "tableContainer">
          {console.log(this.props.store.getState())}
        <table>
          <tr>
            <th>name</th>
            <th>employee id</th>
            <th>age</th>
          </tr>

          {this.props.store.getState().employees.map((obj) => (
            <tr key={obj.empId}>
              <td>{obj.name}</td>
              <td>{obj.empId}</td>
              <td>{obj.age}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
