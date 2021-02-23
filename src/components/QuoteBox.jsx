import { shape, func, bool, string } from 'prop-types';

function QuoteBox(props) {
  const { quote, getQuote, isError } = props;

  const renderLoading = () => (
    <div class="spinner-border text-dark" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  );

  const renderError = () => (
    <>
      <blockquote class="blockquote">
        <p class="mb-0">Ops! Something went wrong...</p>
      </blockquote>
      <hr />
      <button onClick={getQuote} className="btn btn-light">
        <i className="fa fa-refresh"></i>
      </button>
    </>
  );

  const renderQuote = () => (
    <>
      <blockquote class="blockquote">
        <p class="mb-0">{quote.content}</p>
        <br />
        <footer class="blockquote-footer font-italic">{quote.author}</footer>
      </blockquote>
      <hr />
      <button onClick={getQuote} className="btn btn-light">
        <i className="fa fa-refresh"></i>
      </button>
    </>
  );

  const render = () => {
    if (isError) {
      return renderError();
    }

    if (quote) {
      return renderQuote();
    }

    return renderLoading();
  };

  return (
    <div class="card text-center" style={{ width: '30rem' }}>
      <div class="card-body">{render()}</div>
    </div>
  );
}

QuoteBox.propTypes = {
  quote: shape({
    author: string.isRequired,
    content: string.isRequired,
  }),
  isError: bool.isRequired,
  getQuote: func.isRequired,
};

export default QuoteBox;
