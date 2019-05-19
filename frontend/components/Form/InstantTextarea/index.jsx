import React from 'react';
import './style.scss';

const InstantTextarea = props => {
  const {
    value,
    onChange
  } = props;

  return (
    <textarea
      onChange={e => onChange(e.target.value)}
      className="instant-textarea"
      placeholder="What happened today?"
      value={value}
    ></textarea>
  )
}

export default InstantTextarea;