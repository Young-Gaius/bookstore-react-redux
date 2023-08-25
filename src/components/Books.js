import React from 'react';
import PropTypes from 'prop-types';

function Books({ title, author }) {
  return (
    <div className="main">
      <div>
        <h3>
          Title:
          {'me '}
          {title}
        </h3>
        <h3>
          By:
          {' me'}
          {author}
        </h3>
      </div>
      <div className="BookBtns">
        <button type="button">Edit</button>
        <span>|</span>
        <button type="button">Remove</button>
      </div>
    </div>
  );
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
