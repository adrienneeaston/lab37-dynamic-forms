import React from "react";

// State Only
import ToDo from "./components/todo/todo.js";

import * as actions from "../store/todo.store.js";
import { connect } from "http2";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxVisible: 3,
      showCompleted: true
    };
  }

  deleteTodo = id => {
    this.props.handleDelete(id);
  };

  editTodo = id => {
    this.setState({ id });
  };

  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchTpProps = (dispatch, getState) => ({
  handleGet: () => dispatch(actions.get()),
  handleDelete: id => dispatch(actions.destroy(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default class App extends React.Component {
//   render() {
//     return (
//       <>
//         <ToDo />
//       </>
//     );
//   }
// }
