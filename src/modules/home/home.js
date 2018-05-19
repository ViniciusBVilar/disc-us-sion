import React from 'react';
import Header from '../../components/header';
import AddFAB from '../../components/add-fab';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header title={'DiscUSsion'}/>
        <AddFAB />
      </div>
    );
  }
}

export default Home;
