import React from 'react';
import fitty from 'fitty';

export default class Fit extends React.Component {
  componentDidMount() {
    fitty(this.h1, {
      maxSize: 150,
    });
  }
  render() {
    return (
      <div className="fit">
        <h1
          className="glitch"
          data-text={this.props.children}
          ref={ref => {
            this.h1 = ref;
          }}>
          {this.props.children}
        </h1>
      </div>
    );
  }
}
