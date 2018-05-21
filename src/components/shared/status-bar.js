import React from 'react';
import { Form, TextArea, Text } from 'react-form';
import BlaBlaBlas from 'react-icons/lib/fa/hand-lizard-o';
import Bullhorn from 'react-icons/lib/fa/bullhorn';
import Cut from 'react-icons/lib/fa/cut';
import SetFire from 'react-icons/lib/fa/fire';
import Modal from 'react-modal';
import { Box, Flex } from 'reflexbox';
import '../../styles/modal.css';
import { Link } from 'react-router-dom';
import { votePost } from '../../data/posts-data-source';
import { comment, voteComment, editComment } from '../../data/comments-data-source';

const UP_VOTE = 'upVote';
const DOWN_VOTE = 'downVote';

class Statusbar extends React.Component {

  state = {
    modalOpen: false,
  }

  componentWillMount() {
    Modal.setAppElement('body');
    this.setState({ isPost: this.props.isPost });
  }

  openModal = () => {
    this.setState(() => ({
      modalOpen: true,
    }))
  }

  closeModal = () => {
    this.setState(() => ({
      modalOpen: false,
    }))
  }

  addComment = (formValues) => {
    const id = this.props.id;

    this.setState(() => ({
      modalOpen: false,
    }))

    const body = {
      ...formValues,
      id: `${Math.random()}|${new Date()}`,
      timestamp: new Date(),
      parentId: id,
    };

    this.props.newComment ?
      comment(body)
        .then(succes => alert(succes))
        .catch(err => alert(err))
      :
      editComment(id, body)
        .then(succes => alert(succes))
        .catch(err => alert(err));
  }

  upVote = () => {
    this.vote(true)
  }

  downVote = () => {
    this.vote(false)
  }

  vote = (up = false) => {
    const id = this.props.id;

    this.isPost
      ?
      votePost(id, up ? UP_VOTE : DOWN_VOTE)
        .then((posts) => this.setState(() => ({
          posts,
          loadingPosts: false,
        })))
        .catch((err) => { alert(err) })
      :
      voteComment(id, up ? UP_VOTE : DOWN_VOTE)
        .then((posts) => this.setState(() => ({
          posts,
          loadingPosts: false,
        })))
        .catch((err) => { alert(err) });
  }

  render() {
    const { isPost, modalOpen } = this.state;
    const { id, fires, comments, category } = this.props;

    return (
      <div>
        <Flex p={1} align='center'>
          <Box px={2} w={1 / 4}>
            <button onClick={this.upVote} className='icon-btn'>
              <SetFire size={30} />
              <h2>{fires} fires</h2>
            </button>
          </Box>
          <Box px={2} w={1 / 4}>
            <button onClick={this.downVote} className='icon-btn'>
              <Cut size={30} />
              <h2>{-1 * fires} Cut</h2>
            </button>
          </Box>
          <Box px={2} w={1 / 4}>
            {isPost && <button onClick={this.openModal} className='icon-btn'>
              <Bullhorn size={30} />
              <h2>{comments} Bullhorns</h2>
            </button>}
          </Box>
          <Box px={2} w={1 / 4}>
            {isPost && <Link to={`/post/${category}/${id}`}>
              <BlaBlaBlas size={30} />
              <h2>BlaBlaBlas</h2>
            </Link>}
          </Box>
        </Flex>
        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={modalOpen}
          onRequestClose={this.closeModal}
          contentLabel='Modal'
        >
          <Form className="form" onSubmit={submittedValues => this.addComment(submittedValues)}>
            {formApi => (
              <form onSubmit={formApi.submitForm} id="form2">
                <label htmlFor="text">Text</label>
                <TextArea field="text" id="text" />
                <label htmlFor="author">Author</label>
                <Text field="author" id="author" />
                <button
                  className='icon-btn btn btn-primary'
                  type="submit">
                  <Bullhorn size={30} />
                </button>
              </form>
            )}
          </Form>
        </Modal>
      </div>
    );
  }

}

export default Statusbar;
