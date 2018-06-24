import React from 'react';
import { Box, Flex } from 'reflexbox';
import CommentSeparator from './comment-separator';
import '../../styles/comment.css';
import '../../styles/post.css';

import Statusbar from '../shared/status-bar';
import Toolbar from '../shared/tool-bar';
import PropTypes from 'prop-types';


class CommentComponent extends React.Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    updateCallback: PropTypes.func.isRequired,
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    parentId: PropTypes.string.isRequired,
    deleted: PropTypes.string.isRequired,
    parentDeleted: PropTypes.bool.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    voteScore: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired,
    onDeleteCommentClick: PropTypes.func.isRequired,
    onVoteCommentClick: PropTypes.func.isRequired,
    onSubmitCommentClick: PropTypes.func.isRequired,
  };
  
  render() {
    const {
      id,
      parentId,
      deleted,
      parentDeleted,
      author,
      body,
      timestamp,
      voteScore,
      category,
      comments,
    } = this.props.comment;
    const {
      onDeleteCommentClick,
      onVoteCommentClick,
      onSubmitCommentClick
    } = this.props;
    return (
      <div>
        <Flex wrap p={1} align='center'>
          <Flex p={1} align='center'>
            <Box px={2} w={3 / 4}>
              <h1>{body}</h1>
            </Box>
            <Box px={2} w={1 / 4}>
              <Toolbar
                id={id}
                category={category}
                createdAt={timestamp}
                isPost={false}
                onClick={onDeleteCommentClick}
              />
            </Box>
          </Flex>
          <Box px={2} w={1}>
            <p>{author}</p>
          </Box>
        </Flex>
        <div className='status-bar-comment'>
          <Statusbar
            voteScore={voteScore}
            onVoteCommentClick={onVoteCommentClick}
            comments={comments}
            onSubmitCommentClick={onSubmitCommentClick}
            id={id}
            category={category}
            isPost={false}
            newComment={id != null}
          />
        </div>
        <CommentSeparator />
      </div>
    );
  }
}

export default CommentComponent;
