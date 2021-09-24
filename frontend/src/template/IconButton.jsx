import React from 'react';
import If from './If';

export default (props) => (
  <If test={!props.hide}>
    <button
      className={`btn btn-${props.style}`}
      type="button"
      onClick={props.onClick}
    >
      <i className={`fa fa-${props.icon}`} />
    </button>
  </If>
);
