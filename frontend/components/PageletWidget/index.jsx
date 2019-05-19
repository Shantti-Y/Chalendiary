import React from 'react';

const PageletWidget= props => {
  return (
    <div className="pagelet-widget">
      {props.children}
    </div>
  );
}

export default PageletWidget;