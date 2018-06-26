import React from 'react';
import { Form, Select } from 'react-form';
import { Box, Flex } from 'reflexbox';
import '../../styles/post-header.css';

class PostsHeader extends React.Component {

  statusOptions = [
    {
      label: 'Fires',
      value: 'voteScore',
    },
    {
      label: 'Date',
      value: 'timestamp',
    },
  ]

  render() {
    const { title, onFilter } = this.props;
    return (
      <div className="post-header">
        <Flex p={1} align='center'>
          <Box px={2} w={[1, 1/2, 3/4]}>
            <h1>{title}</h1>
          </Box>
          <Box px={2} w={[1, 1/2, 1/4]}>
            <Form >
              {formApi => (
                <form className="inline-form" onSubmit={formApi.submitForm} id="form2">
                  <label htmlFor="status" className="d-block">Order by</label>
                  <Select field="status" id="status" options={this.statusOptions} className="mb-4"
                    onChange={onFilter}/>
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
