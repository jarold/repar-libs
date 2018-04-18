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
      this.textInput.focus();
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
        <input
          value={this.state.value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          ref={node => (this.textInput = node)}
        />
      );
    }

    return <span onClick={this.toggleEditMode}>{this.props.children}</span>;
  }
}

export default InlineInput;
