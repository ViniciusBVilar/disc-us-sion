import React from 'react';
import { Form, Text, TextArea } from 'react-form';
import '../styles/form.css';

class PostFormComponent extends React.Component {

  validate = username => !username || username.trim() === '' ? 'Username is a required field' : null

  render() {
    return (
      <div>
        <Form class="form" onSubmit={submittedValues => this.setState({ submittedValues })}>
          {formApi => (
            <form onSubmit={formApi.submitForm} id="form2">
              <label htmlFor="title">Title</label>
              <Text field="title" id="title" validate={this.validate} />
              <label htmlFor="text">Text</label>
              <TextArea field="text" id="text" />
              <label htmlFor="author">Author</label>
              <Text field="author" id="author" />
              <button type="submit" className="mb-4 btn btn-primary">
                Publicar Post
              </button>
            </form>
          )}
        </Form>
      </div>
    );
  }

}

export default PostFormComponent;
