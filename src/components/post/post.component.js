import React from 'react';
import { Box, Flex } from 'reflexbox';
import '../../styles/post.css';
import Statusbar from '../shared/status-bar';
import Toolbar from '../shared/tool-bar';
import PropTypes from 'prop-types';

class PostComponent extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    voteScore: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    deleted: PropTypes.bool.isRequired,
    onDeletePostClick: PropTypes.func.isRequired,
    onVotePostClick: PropTypes.func.isRequired,
    onSubmitCommentClick : PropTypes.func.isRequired,
  };


  render() {
    const {
      id,
      title,
      text,
      author,
      voteScore,
      comments,
      createdAt,
      category,
      deleted,
      onDeletePostClick,
      onVotePostClick,
      onSubmitCommentClick
    } = this.props;
    return (
      <div>
        <Flex wrap p={1} align='center'>
          <Flex p={1} align='center'>
            <Box px={2} w={3 / 4}>
              {deleted ? <h1>{`DELETED - ${title}`}</h1> : <h1>{title}</h1>}
            </Box>
            <Box px={2} w={1 / 4}>
              <Toolbar
                id={id}
                category={category}
                createdAt={createdAt}
                isPost={true}
                onClick={onDeletePostClick}
              />
            </Box>
          </Flex>
          <Box px={2} w={1}>
            <h4>{text}</h4>
          </Box>
          <Box px={2} w={1}>
            <p>{author}</p>
          </Box>
        </Flex>
        <div className='status-bar-post'>
          <Statusbar
            voteScore={voteScore}
            onVotePostClick={onVotePostClick}
            comments={comments}
            onSubmitCommentClick={onSubmitCommentClick}
            id={id}
            category={category}
            isPost={true}
          />
        </div>
      </div>
    );
  }
}

export default PostComponent;
