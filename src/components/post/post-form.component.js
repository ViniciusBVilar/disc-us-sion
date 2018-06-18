import React from 'react';
import { Form, Text, TextArea } from 'react-form';
import Bomb from 'react-icons/lib/fa/bomb';
import { connect } from 'react-redux';
import { createPost, editPost } from '../../redux/actions/post.actions';
import '../../styles/form.css';

const DEFAULT_CATEGORY = 'All categories';
class PostFormComponent extends React.Component {

  validate = username => !username || username.trim() === '' ? 'Username is a required field' : null

  handleSubmit = submittedValues => {
    this.props.id ? this.create(submittedValues) : this.edit(submittedValues);
  }

  create = submittedValues => {
    const data = {
      ...submittedValues,
      timestamp: new Date(),
      category: this.props.category|| DEFAULT_CATEGORY,
    };
    this.props.createPostDispatch(data);
  }

  edit = submittedValues => {
    const data = {
      ...submittedValues,
      id: this.props.id,
      timestamp: new Date(),
      category: this.props.category|| DEFAULT_CATEGORY,
    };
    this.props.editPostDispatch(data);
  }

  render() {
    const { title, body, author } = this.props.post || {};
    return (
      <Form className="form" onSubmit={this.handleSubmit}>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="form2">
            <label htmlFor="title">Title</label>
            <Text field="title" id="title" validate={this.validate} value={title}/>
            <label htmlFor="body">Text</label>
            <TextArea field="body" id="body" value={body}/>
            <label htmlFor="author">Author</label>
            <Text field="author" id="author" value={author}/>
            <button
              className='icon-btn btn btn-primary'
              type="submit">
              <Bomb size={30} />
              <h3>Bomb</h3>
            </button>
          </form>
        )}
      </Form>
    );
  }
}

function mapStateToProps({ posts }, ownProps = {} ) {
  // const postId = this.props.params.match.params.id;
  debugger
  const post = posts['123'];
  return { post };
}

function mapDispatchToProps(dispatch) {
  return {
    createPostDispatch: post => dispatch(createPost({post})),
    editPostDispatch: post => dispatch(editPost({post})),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFormComponent);
