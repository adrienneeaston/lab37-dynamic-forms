import React from "react";
import useForm from '../../hooks/form.js';

let TodoForm = props => {

  const { handleChange, handleSubmit } = useForm( props.handleSubmit );

  return (
      <>
        <h3>Add Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} />
          </label>
          <label>
            <span>Due</span>
            <input type="date" name="due" onChange={handleChange} />
          </label>
          <button>Add Item</button>
        </form>
      </>
    );
};

export default TodoForm;


import React from 'react';
import { Field, reduxForm } from 'redux-form'

let PlayerForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Position</label>
        <Field name="position" component="select">
          <option />
          <option value="P">P</option><option value="C">C</option><option value="1B">1B</option><option value="2B">2B</option><option value="3B">3B</option><option value="SS">SS</option><option value="LF">LF</option><option value="RF">RF</option><option value="CF">CF</option>
        </Field>
      </div>
      <div>
        <label htmlFor="throws">Throws</label>
        <Field name="throws" component="select">
          <option />
          <option value="R">R</option>
          <option value="L">L</option>
        </Field>
      </div>
      <div>
        <label htmlFor="bats">Bats</label>
        <Field name="bats" component="select">
          <option />
          <option value="R">R</option>
          <option value="L">L</option>
        </Field>
      </div>
      <div>
        <label htmlFor="team">Team</label>
        <Field name="team" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'player',
})(PlayerForm);
