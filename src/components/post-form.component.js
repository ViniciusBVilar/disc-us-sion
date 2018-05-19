import React from 'react';
import { Form, Text, TextArea } from 'react-form';
import Bomb from 'react-icons/lib/fa/bomb';
import '../styles/form.css';

class PostFormComponent extends React.Component {

  validate = username => !username || username.trim() === '' ? 'Username is a required field' : null

  addComment = () => {

  }

  render() {
    return (
      <Form class="form" onSubmit={submittedValues => this.setState({ submittedValues })}>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="form2">
            <label htmlFor="title">Title</label>
            <Text field="title" id="title" validate={this.validate} />
            <label htmlFor="text">Text</label>
            <TextArea field="text" id="text" />
            <label htmlFor="author">Author</label>
            <Text field="author" id="author" />
            <button
              className='icon-btn btn btn-primary'
              type="submit"
              onClick={this.addComment}>
              <Bomb size={30} />
              <h3>Bomb</h3>
            </button>
          </form>
        )}
      </Form>
    );
  }
}

export default PostFormComponent;
