import React from 'react';
import fitty from 'fitty';

export default class Fit extends React.Component {
  componentDidMount() {
    fitty(this.h1, {
      maxSize: this.props.maxSize,
    });
  }
  render() {
    return (
      <div className="fit">
        <h1
          className={this.props.glitch && 'glitch'}
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

Fit.defaultProps = {
  glitch: true,
  maxSize: 150,
};
