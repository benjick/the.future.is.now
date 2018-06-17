import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {okaidia} from 'react-syntax-highlighter/styles/prism';

const Highlight = ({children}) => (
  <SyntaxHighlighter language="javascript" style={okaidia}>
    {children}
  </SyntaxHighlighter>
);

export default Highlight;
