import React from 'react';
import { Form, Text, TextArea } from 'react-form';
import Header from '../../components/header';
import '../../styles/form.css';


class PostForm extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Form class="form" onSubmit={submittedValues => this.setState({ submittedValues })}>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="form2">
            <label htmlFor="title">Title</label>
            <Text field="title" id="title" />
            <label htmlFor="text">Text</label>
            <TextArea field="text" id="text" />
            <label htmlFor="author">Author</label>
            <Text field="author" id="author" />
            <button type="submit" className="mb-4 btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </Form>
    </div>
    );
  }
}

export default PostForm;
