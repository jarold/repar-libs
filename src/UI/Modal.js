import React from 'react';

const modal = props => (
  <div className={props.show ? 'modal is-active' : 'modal'}>
    <div className="modal-background" />
    <div className="modal-content">
      <div className="card" onClick={props.select}>
        {props.children}
      </div>
    </div>
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={props.toggle}
    />
  </div>
);

export default modal;
