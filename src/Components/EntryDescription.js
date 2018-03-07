import React, { Component } from 'react';

class EntryDescription extends Component {
  constructor(props) {
    super(props);

    this.state = { editMode: false };

    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  componentDidUpdate() {
    if (this.props.description === '[Description]' && this.state.editMode) {
      this.textInput.select();
    }

    if (this.state.editMode) {
      this.textInput.focus();
    }
  }

  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    if (this.state.editMode) {
      return (
        <input
          className="input"
          type="text"
          value={this.props.description}
          onBlur={this.toggleEditMode}
          onChange={this.props.onDescriptionChange}
          ref={input => {
            this.textInput = input;
          }}
        />
      );
    }

    return (
      <h3 className="subtitle" onClick={this.toggleEditMode}>
        {this.props.description}
      </h3>
    );
  }
}

export default EntryDescription;
