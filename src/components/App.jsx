import React from 'react';
import QuoteBox from './QuoteBox';

class App extends React.Component {
  render() {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: '100vh' }}
      >
        <QuoteBox />
      </div>
    );
  }
}

export default App;
