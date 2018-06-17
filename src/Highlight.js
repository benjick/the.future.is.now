import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {okaidia} from 'react-syntax-highlighter/styles/prism';

const Highlight = ({children, language}) => (
  <SyntaxHighlighter language={language} style={okaidia}>
    {children}
  </SyntaxHighlighter>
);

Highlight.defaultProps = {
  language: 'javascript',
};

export default Highlight;
