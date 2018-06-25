import React from 'react';
import { Form, Text, TextArea } from 'react-form';
import Bullhorn from 'react-icons/lib/fa/bullhorn';
import Modal from 'react-modal';
import '../../styles/modal.css';

class CommentModal extends React.Component {

  render() {
    const { id, body, author, modalOpen, onCloseModal, onPostComment } = this.props;

    return (
      <Modal
        className='modal'
        overlayClassName='overlay'
        isOpen={modalOpen}
        onRequestClose={onCloseModal}
        contentLabel='Modal'
      >
        <Form className='form' onSubmit={submittedValues => onPostComment(submittedValues, id)}>
          {formApi => (
            <form onSubmit={formApi.submitForm} id='form2'>
              <label htmlFor='body'>Text</label>
              <TextArea field='body' id='body' defaultValue={body}/>
              <label htmlFor='author'>Author</label>
              <Text field='author' id='author' defaultValue={author} />
              <button className='icon-btn btn btn-primary' type='submit'>
                <Bullhorn size={30} />
              </button>
            </form>
          )}
        </Form>
      </Modal>
    );
  }
}

export default CommentModal;
