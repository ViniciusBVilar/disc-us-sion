import React from 'react';
import Header from '../../components/shared/header';
import PostFormComponent from '../../components/post/post-form.component';
import '../../styles/header.css';
import { post, fetchPostDetails, editPost } from '../../data/posts-data-source';

class PostForm extends React.Component {

  state = {
    id: null,
    category: null,
    details: null,
  }

  componentWillMount() {
    const id = this.props.params.match.params.id;
    this.setState({ id });
    id && fetchPostDetails(id)
      .then((details) => this.setState({ details }))
      .catch((err) => { alert(err) });
  }

  onFormSubmitted = (formData) => {
    const data = {
      ...formData.submittedValues,
      id: `${Math.random()}|${new Date()}`,
      timestamp: new Date(),
      category: this.props.params.match.params.category,
    };
    this.state.id ?
      editPost(data)
        .then((success) => { alert('Double step!', success) })
        .catch((err) => { alert(err) })
      : post(data)
        .then((success) => { alert('Fire!', success) })
        .catch((err) => { alert(err) });
  }

  render() {
    const details = this.state.details;

    return (
      <div>
        <Header title={'Plant the Bomb'} />
        <div className="header-offset">
          <PostFormComponent post={this.onFormSubmitted.bind(this)} details={details} />
        </div>
      </div>
    );
  }
}

export default PostForm;
