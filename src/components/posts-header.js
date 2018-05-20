import React from 'react';
import { Form, Select } from 'react-form';
import { Box, Flex } from 'reflexbox';
import '../styles/post-header.css';

class PostsHeader extends React.Component {

  statusOptions = [
    {
      label: 'Fires',
      value: 'voteScore',
    },
    {
      label: 'Data',
      value: 'timestamp',
    },
  ]

  render() {
    return (
      <div className="post-header">
        <Flex p={1} align='center'>
          <Box px={2} w={[1, 1/2, 3/4]}>
            <h1>All posts</h1>
          </Box>
          <Box px={2} w={[1, 1/2, 1/4]}>
            <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
              {formApi => (
                <form className="inline-form" onSubmit={formApi.submitForm} id="form2">
                  <label htmlFor="status" className="d-block">Order by</label>
                  <Select field="status" id="status" options={this.statusOptions} className="mb-4" />
                </form>
              )}
            </Form>
          </Box>
        </Flex>
      </div>
    );
  }

}

export default PostsHeader;
