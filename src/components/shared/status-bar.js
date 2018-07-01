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

// const UP_VOTE = 'upVote';
// const DOWN_VOTE = 'downVote';

class Statusbar extends React.Component {
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
    // const body = {
    //   ...formValues,
    //   id: `${Math.random()}|${new Date()}`,
    //   timestamp: new Date(),
    //   parentId: id
    // };
    // this.props.newComment
    //   ? comment(body)
    //     .then(succes => alert(succes))
    //     .catch(err => alert(err))
    //   : editComment(id, body)
    //     .then(succes => alert(succes))
    //     .catch(err => alert(err));
  };

  upVote = () => {
    this.vote(true);
  };

  downVote = () => {
    this.vote(false);
  };

  vote = (up = false) => {
    this.props.onVoteClick(up, this.props.id);
  }
  // vote = (up = false) => {
  //   const id = this.props.id;

  //   this.isPost
  //     ? votePost(id, up ? UP_VOTE : DOWN_VOTE)
  //       .then(posts =>
  //         this.setState(() => ({
  //           posts,
  //           loadingPosts: false
  //         }))
  //       )
  //       .catch(err => {
  //         alert(err);
  //       })
  //     : voteComment(id, up ? UP_VOTE : DOWN_VOTE)
  //       .then(posts =>
  //         this.setState(() => ({
  //           posts,
  //           loadingPosts: false
  //         }))
  //       )
  //       .catch(err => {
  //         alert(err);
  //       });
  // };

  render() {
    const { isPost, modalOpen } = this.state;
    const { id, voteScore, comments, category, isDetail } = this.props;
    return (
      <div>
        <Flex p={1} align='center' justify='space-between'>
          <Box px={2} w={1 / 8}>
            <h2>{voteScore} Votes</h2>
          </Box>
          <Box px={2} w={1 / 8}>
            <button onClick={this.upVote} className='icon-btn'>
              <SetFire size={30} />
              <h2>Up Vote</h2>
            </button>
          </Box>
          <Box px={2} w={1 / 8}>
            <button onClick={this.downVote} className='icon-btn'>
              <Cut size={30} />
              <h2>Down Vote</h2>
            </button>
          </Box>
          <Box px={2} w={3 / 8}>
            {isPost && (
              <button onClick={this.openModal} className='icon-btn'>
                <Bullhorn size={30} />
                <h2>{comments} Comments</h2>
              </button>
            )}
          </Box>
          <Box px={2} w={2 / 8}>
            {isPost && !isDetail  && (
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
          onPostComment={this.addComment}/>
      </div>
    );
  }
}

export default Statusbar;
