import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default ({ count, tick }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={tick}>Increment</button>
    </div>
  );
}
