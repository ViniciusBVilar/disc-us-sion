import React from 'react';
import '../styles/post.css';
import Statusbar from './status-bar';
import Toolbar from './tool-bar';
class PostComponent extends React.Component {

  render() {
    const { title, text, author, fires, comments, createdAt } = this.props;

    return (
      <div >
        <div className="post">
          <h1>{title}</h1>
          <h4>{text}</h4>
          <caption>{author}</caption>
          {/* TODO: PASS THIS COMPONENT TO A GRID IN FORM TOP */}
          <div className="tool-bar">
            <Toolbar createdAt={createdAt} />
          </div>
        </div>
        <div className="status-bar">
          <Statusbar fires={fires} comments={comments} />
        </div>
      </div>
    );
  }

}

export default PostComponent;
