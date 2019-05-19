import React from 'react';
import './style.scss';

const LongTextarea = props => {
  const {
    value,
    onChange
  } = props;

  return (
    <textarea
      onChange={e => onChange(e.target.value)}
      className="long-textarea"
      placeholder="What happened today?"
      value={value}
    ></textarea>
  )
}

export default LongTextarea;