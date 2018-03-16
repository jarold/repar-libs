import React from 'react';
import { connect } from 'react-redux';
import { addEntry } from '../actions';

const Header = props => (
  <nav className="navbar is-light">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <h1 className="title is-4">reparLibs</h1>
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <button className="button" onClick={props.addEntry}>
            Add Entry
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const mapDispatchToProps = dispatch => {
  return {
    addEntry: () => {
      dispatch(addEntry());
    }
  };
};

export default connect(null, mapDispatchToProps)(Header);
