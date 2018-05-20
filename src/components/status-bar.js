import React from 'react';
import { Form, TextArea } from 'react-form';
import Bullhorn from 'react-icons/lib/fa/bullhorn';
import SetFire from 'react-icons/lib/fa/fire';
import Modal from 'react-modal';
import { Box, Flex } from 'reflexbox';
import '../styles/modal.css';

class Statusbar extends React.Component {

  state = {
    modalOpen: false,
  }

  componentWillMount() {
    Modal.setAppElement('body');
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

  addComment = () => {
    this.setState(() => ({
      modalOpen: false,
    }))
  }

  render() {
    const { modalOpen } = this.state;
    const { fires, comments } = this.props;

    return (
      <div>
        <Flex p={1} align='center'>
          <Box px={2} w={1 / 3}>
            <button onClick={this.setFire} className='icon-btn'>
              <SetFire size={30} />
              <h2>{fires} fires</h2>
            </button>
          </Box>
          <Box px={2} w={1 / 3}>
            <button onClick={this.openModal} className='icon-btn'>
              <Bullhorn size={30} />
              <h2>{comments} Bullhorns</h2>
            </button>
          </Box>
        </Flex>
        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={modalOpen}
          onRequestClose={this.closeModal}
          contentLabel='Modal'
        >
          <Form class="form" onSubmit={submittedValues => this.setState({ submittedValues })}>
            {formApi => (
              <form onSubmit={formApi.submitForm} id="form2">
                <label htmlFor="text">Text</label>
                <TextArea field="text" id="text" />
                <button
                  className='icon-btn btn btn-primary'
                  type="submit"
                  onClick={this.addComment}>
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
