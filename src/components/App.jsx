import React from 'react';
import { API_URL } from '../globals';
import QuoteBox from './QuoteBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      isError: false,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      quote: null,
      isError: false,
    });

    return fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('response not ok');
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          quote: data,
        });
      })
      .catch(() => {
        this.setState({
          isError: true,
        });
      });
  }

  render() {
    const { quote, isError } = this.state;

    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: '100vh' }}
      >
        <QuoteBox getQuote={this.fetchData} isError={isError} quote={quote} />
      </div>
    );
  }
}

export default App;
