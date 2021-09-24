import React from 'react';

export default (props) => (
  props.hide ? null : (
    <button
      className={`btn btn-${props.style}`}
      type="button"
      onClick={props.onClick}
    >
      <i className={`fa fa-${props.icon}`} />
    </button>
  )
);
