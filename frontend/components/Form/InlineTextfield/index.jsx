import React from 'react';
import './style.scss';

const InlineTextfield = props => {
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

export default InlineTextfield;