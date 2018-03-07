import React, { Component } from 'react';

class EntryComments extends Component {
  render() {
    const comments = this.props.comments.map((comment, index) => (
      <div
        className="notification"
        key={'comment-' + index}
        id={'comment-' + index}
      >
        <button
          id={index + '-delete'}
          className="delete"
          onClick={this.props.deleteComment}
        />
        In the area of <strong>{comment.competency}</strong> I{' '}
        <span
          className="editable"
          id={index + '-behavioralIndicator'}
          contentEditable
          suppressContentEditableWarning
          onClick={this.clear}
          onBlur={this.props.updateComment}
        >
          {comment.behavioralIndicator}
        </span>{' '}
        by{' '}
        <span
          className="editable"
          id={index + '-example'}
          contentEditable
          suppressContentEditableWarning
          onClick={this.clear}
          onBlur={this.props.updateComment}
        >
          {comment.example}
        </span>{' '}
        with the impact that{' '}
        <span
          className="editable"
          id={index + '-impact'}
          contentEditable
          suppressContentEditableWarning
          onClick={this.clear}
          onBlur={this.props.updateComment}
        >
          {comment.impact}
        </span>
      </div>
    ));

    return <div>{comments}</div>;
  }
}

export default EntryComments;
