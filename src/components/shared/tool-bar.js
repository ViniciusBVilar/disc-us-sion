import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex } from 'reflexbox';
import { deletePost } from '../../data/posts.data-source';
import { deleteComment } from '../../data/comments.data-source';

class Toolbar extends React.Component {
  // TODO: fix id passed
  delete = () => {
    const id = this.props.id;

    this.props.isPost
      ? deletePost(id)
        .then(details => this.setState({ details }))
        .catch(err => {
          alert(err);
        })
      : deleteComment(id)
        .then(details => this.setState({ details }))
        .catch(err => {
          alert(err);
        });
  };

  render() {
    const { id, category, createdAt } = this.props;

    return (
      <Flex p={2} align='center'>
        <Box px={2} w={3 / 5}>
          {new Date(createdAt).toString()}
        </Box>
        <Box px={2} w={1 / 5}>
          <Link to={`/editForm/${category}${id ? `/${id}` : ''}`}>
            <p>Editar</p>
          </Link>
        </Box>
        <Box px={2} w={1 / 5}>
          <button onClick={this.delete}>
            <h2>Delete</h2>
          </button>
        </Box>
      </Flex>
    );
  }
}

export default Toolbar;
