function QuoteBox() {
  return (
    <div class="card text-center" style={{ width: '30rem' }}>
      <div class="card-body">
        <blockquote class="blockquote">
          <p class="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <br/>
          <footer class="blockquote-footer">
            Author
          </footer>
        </blockquote>
        <hr />
        <button className="btn btn-light">
          <i className="fa fa-refresh"></i>
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
