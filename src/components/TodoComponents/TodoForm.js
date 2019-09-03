import React from "react";
import { AST_PropAccess } from "terser";

const Form = props => {
  return (
    <div className="form-button">
      {/* <form onSubmit={() => props.SubmitTodo}> */}
      <input
        type="text"
        name={props.item}
        placeholder="Add your task"
        onChange={props.onChange}
      />
      <button className="submit" onClick={props.SubmitTodo}>
        Add Todo
      </button>
      <button className="clear" onClick={props.ClearTodo}>
        Clear Completed
      </button>
      {/* </form> */}
    </div>
  );
};

export default Form;

// class Form extends React.Conponent {
//   constructor() {
//     super();
//     this.state = {
//       item: "",
//     };
//   }
//   handleChanges = e => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   submitItem = e => {
//     e.preventDefault();
//     this.props.addItem(this.state.item);
//   };

//   render() {
//     return (
//       <form onSubmit={this.SubmitItem}>
//         <input
//           type="text"
//           name={this.item}
//           placeholder="Add your task"
//           onChange={this.handleChanges}
//         />
//         <button className="submit">Add Todo</button>
//         <button className="clear">Clear Completed</button>
//       </form>
//     );
//   }
// }

// export default Form;
