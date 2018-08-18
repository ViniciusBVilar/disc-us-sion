import PropTypes from 'prop-types';
import React from 'react';
import PostFormComponent from '../../components/post/post-form.component';
import Header from '../../components/shared/header';
import '../../styles/header.css';

class PostFormPage extends React.Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
  };

  render() {
    const { category, id } = this.props.params.match.params;

    return (
      <div>
        <Header title={'Plant the Bomb'} />
        <div className='header-offset'>
          <PostFormComponent category={category} id={id}/>
        </div>
      </div>
    );
  }
}

export default PostFormPage;
