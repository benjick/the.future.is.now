import React from 'react';
import Fit from './Fit';
import Highlight from './Highlight';

const cra = `
yarn create react-app react-course
cd react-course
yarn start
`;

const wss = `
git clone https://github.com/benjick/chat-ws
cd chat-ws
yarn
yarn run prod
`;

const ws = `
const ws = new WebSocket('ws://localhost:8080');
ws.addEventListener('message', message => {
  const parsed = JSON.parse(message.data);
  if (parsed.type === 'message') {
    console.log(parsed)
  }
  if (parsed.type === 'history') {
    console.log(parsed.messages)
  }
});

const message = {
  type: 'message',
  name: 'Max',
  string: 'Hello! This is a message!',
};
ws.send(JSON.stringify(message));
`;

const Home = () => (
  <div className="course">
    <Fit glitch={false} maxSize={100}>
      React course
    </Fit>
    <div style={{display: 'flex', width: '90%', margin: '0 auto'}}>
      <div style={{flex: 1}}>
        <ul>
          <li>ES6</li>
          <li>React</li>
          <li>Props</li>
          <li>Lifecycles</li>
          <li>State</li>
          <li>Functional components</li>
          <li>Refs</li>
          <li>Context API</li>
          <li>Redux</li>
          <li>ESLint</li>
          <li>Jest</li>
          <li>Styled Components</li>
        </ul>
      </div>
      <div style={{flex: 1}}>
        <Highlight>{cra}</Highlight>
        <Highlight>{wss}</Highlight>
        <Highlight>{ws}</Highlight>
      </div>
    </div>
  </div>
);

export default Home;