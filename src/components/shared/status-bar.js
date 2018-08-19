import PropTypes from 'prop-types';
import React from 'react';
import Bullhorn from 'react-icons/lib/fa/bullhorn';
import Cut from 'react-icons/lib/fa/cut';
import SetFire from 'react-icons/lib/fa/fire';
import BlaBlaBlas from 'react-icons/lib/fa/hand-lizard-o';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Box, Flex } from 'reflexbox';
import '../../styles/modal.css';
import CommentModal from './comment.modal';

class Statusbar extends React.Component {
  static propTypes = {
    isPost: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    isDetail: PropTypes.bool.isRequired,
    onSubmitCommentClick: PropTypes.func.isRequired,
    onVoteClick: PropTypes.func.isRequired
  };

  state = {
    modalOpen: false
  };

  UNSAFE_componentWillMount() {
    Modal.setAppElement('body');
    this.setState({ isPost: this.props.isPost });
  }

  openModal = () => {
    this.setState(() => ({
      modalOpen: true
    }));
  };

  closeModal = () => {
    this.setState(() => ({
      modalOpen: false
    }));
  };

  addComment = formValues => {
    const id = this.props.id;

    this.setState(() => ({
      modalOpen: false
    }));

    this.props.onSubmitCommentClick({
      ...formValues,
      timestamp: new Date(),
      parentId: id
    });
  };

  upVote = () => {
    this.vote(true);
  };

  downVote = () => {
    this.vote(false);
  };

  vote = (up = false) => {
    this.props.onVoteClick(up, this.props.id);
  };

  render() {
    const { isPost, modalOpen } = this.state;
    const { id, voteScore, comments, category, isDetail } = this.props;
    return (
      <div>
        <Flex p={1} align="center" justify="space-between">
          <Box px={2} w={1 / 8}>
            <h2>{voteScore} Votes</h2>
          </Box>
          <Box px={2} w={1 / 8}>
            <button onClick={this.upVote} className="icon-btn">
              <SetFire size={30} />
              <h2>Up Vote</h2>
            </button>
          </Box>
          <Box px={2} w={1 / 8}>
            <button onClick={this.downVote} className="icon-btn">
              <Cut size={30} />
              <h2>Down Vote</h2>
            </button>
          </Box>
          <Box px={2} w={3 / 8}>
            {isPost && (
              <button onClick={this.openModal} className="icon-btn">
                <Bullhorn size={30} />
                <h2>{comments} Comments</h2>
              </button>
            )}
          </Box>
          <Box px={2} w={2 / 8}>
            {isPost &&
              !isDetail && (
              <Link to={`/post/${category}/${id}`}>
                <BlaBlaBlas size={30} />
                <h2>BlahBlahBlahs</h2>
              </Link>
            )}
          </Box>
        </Flex>

        <CommentModal
          modalOpen={modalOpen}
          onCloseModal={this.closeModal}
          onPostComment={this.addComment}
        />
      </div>
    );
  }
}

export default Statusbar;
