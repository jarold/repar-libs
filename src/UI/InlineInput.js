import React, { Component } from 'react';

class InlineInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.children,
      editMode: false
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidUpdate() {
    if (this.state.editMode) {
      this.textarea.focus();
    }
  }

  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleBlur(event) {
    this.toggleEditMode();
    this.props.updateFn(event.target.value);
  }

  render() {
    if (this.state.editMode) {
      return (
        <div>
          <textarea
            style={{ width: '100%', fontSize: '1em' }}
            rows={8}
            value={this.state.value}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            ref={ta => (this.textarea = ta)}
          />
        </div>
      );
    }

    return (
      <span
        style={{ backgroundColor: '#E6E6E6' }}
        onClick={this.toggleEditMode}
      >
        {this.props.children}
      </span>
    );
  }
}

export default InlineInput;
