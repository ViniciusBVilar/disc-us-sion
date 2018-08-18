import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex } from 'reflexbox';
import CommentModal from './comment.modal';

class Toolbar extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    isPost: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onEditComment: PropTypes.func.isRequired,
  };


  state = {
    closeModal: false,
  }

  openModal = () => {
    this.setState(() => ({
      modalOpen: true
    }));
  };

  handleCloseModal = () => {
    this.setState(() => ({
      modalOpen: false
    }));
  };

  handlePostComment = (submittedValues, id) => {
    this.setState(() => ({
      modalOpen: false
    }));

    this.props.onEditComment(submittedValues, id);
  };

  render() {
    const { id, body, author, category, createdAt, isPost, onClick } = this.props;

    return (
      <Flex p={2} align='center'>
        <Box px={2} w={3 / 5}>
          {new Date(createdAt).toString()}
        </Box>
        <Box px={2} w={1 / 5}>
          {isPost ? <Link to={`/editForm/${category}${id ? `/${id}` : ''}`}>
            <p>Editar</p>
          </Link>
            : <button onClick={this.openModal}>
              <h2>Editar</h2>
            </button>}
        </Box>
        <Box px={2} w={1 / 5}>
          <button onClick={() => onClick(id)}>
            <h2>Deletar</h2>
          </button>
        </Box>

        <CommentModal
          id={id}
          body={body}
          author={author}
          modalOpen={this.state.modalOpen}
          onCloseModal={this.handleCloseModal}
          onPostComment={this.handlePostComment}/>
      </Flex>
    );
  }
}

export default Toolbar;