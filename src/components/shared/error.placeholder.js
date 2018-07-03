import * as React from 'react';

export function ErrorPlaceholder(Component, ) {

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }

    render() {
      const error = props.error;
      return (
        <div>
          {error ?
            <Component {...this.props}/>
            : <h1>{error}</h1>}
        </div>
      );
    }
  };
}