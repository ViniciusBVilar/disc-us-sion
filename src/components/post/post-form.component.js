import React from 'react';
import { Form, Text, TextArea } from 'react-form';
import Bomb from 'react-icons/lib/fa/bomb';
import { connect } from 'react-redux';
import { ALL_CATEGORIES } from '../../modules/home/home.page';
import { createPostAPI, editPostAPI } from '../../redux/actions/post.actions';
import '../../styles/form.css';
import PropTypes from 'prop-types';


class PostFormComponent extends React.Component {
  

  static propTypes = {
    id: PropTypes.string,
    category: PropTypes.string.isRequired,
    post: PropTypes.object.isRequired,
    createPostAPIDispatch: PropTypes.func.isRequired,
    editPostAPIDispatch: PropTypes.func.isRequired,
  };

  
  validate = username => !username || username.trim() === '' ? 'Username is a required field' : null

  handleSubmit = submittedValues => {
    this.props.id ? this.edit(submittedValues) : this.create(submittedValues);
  }

  create = submittedValues => {
    const data = {
      ...submittedValues,
      timestamp: new Date(),
      category: this.props.category || ALL_CATEGORIES,
    };
    this.props.createPostAPIDispatch(data);

    // TODO: Verificar sucesso e go back
  }

  edit = submittedValues => {
    const data = {
      ...submittedValues,
      id: this.props.id,
    };
    this.props.editPostAPIDispatch(data);
    // TODO: Verificar sucesso e go back
  }

  handleFormChange = (data) => {
    this.setState({[data.target.id]: data.target.value});
  }

  render() {
    const { title, body, author, deleted, error } = this.props.post || {};
    return (
      <div>
        { error ? <h1>{error.message}</h1>
          : deleted ? (
            <div className='status-bar-post'>
              <h1> 404 Page no found</h1>
            </div>) 
            : (<Form className="form" onSubmit={this.handleSubmit}>
              {formApi => (
                <form onSubmit={formApi.submitForm} id="form2">
                  <label htmlFor="title">Title</label>
                  <Text type="text" field="title" id="title" validate={this.validate} defaultValue={title}/>
                  <label htmlFor="body">Text</label>
                  <TextArea type="textArea" field="body" id="body" defaultValue={body}/>
                  <label htmlFor="author">Author</label>
                  <Text type="text" field="author" id="author" defaultValue={author}/>
                  <button
                    className='icon-btn btn btn-primary'
                    type="submit">
                    <Bomb size={30} />
                    <h3>Bomb</h3>
                  </button>
                </form>
              )}
            </Form>)
        }
      </div>);
  }
}

function mapStateToProps({ posts }, ownProps ) {
  const post = ownProps.id ?  posts[ownProps.id] : {};
  return { post };
}

function mapDispatchToProps(dispatch) {
  return {
    createPostAPIDispatch: post => dispatch(createPostAPI(post)),
    editPostAPIDispatch: post => dispatch(editPostAPI(post)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostFormComponent);
