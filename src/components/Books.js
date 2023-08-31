import React from 'react';
import PropTypes from 'prop-types';

function Books({ title, author, onRemove }) {
  return (
    <div className="main">
      <div>
        <h3>
          Title:
          {' '}
          {title}
        </h3>
        <h3>
          By:
          {' '}
          {author}
        </h3>
      </div>
      <div className="BookBtns">
        <button type="button" onClick={onRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Books;
