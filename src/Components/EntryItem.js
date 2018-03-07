import React, { Component } from 'react';
import CompetencySelector from './CompetencySelector';
import EntryType from './EntryType';
import EntryDescription from './EntryDescription';

class EntryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      description: this.props.entry.description,
      comments: []
    };

    this.clear = this.clear.bind(this);
    this.addComment = this.addComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  clear(e) {
    if (e.target.innerHTML.split('')[0] === '[') {
      const [commentIndex, commentKey] = e.target.id.split('-');
      const comments = this.state.comments;
      const updatedComment = Object.assign({}, comments[commentIndex], {
        [commentKey]: ' '
      });

      const updatedComments = comments.map((comment, index) => {
        if (index !== parseInt(commentIndex, 10)) {
          return comment;
        }

        return updatedComment;
      });

      this.setState({
        comments: updatedComments
      });
    }
  }

  addComment(event) {
    const newComment = {
      competency: event.target.innerHTML,
      behavioralIndicator: '[Behavioral Indicator]',
      example: '[Example]',
      impact: '[Impact]'
    };

    const newComments = [...this.state.comments, newComment];

    this.setState({
      comments: newComments
    });

    this.props.updateCount(event.target.innerHTML);
  }

  updateComment(e) {
    const [commentIndex, commentKey] = e.target.id.split('-');
    const comments = this.state.comments;
    const updatedComment = Object.assign({}, comments[commentIndex], {
      [commentKey]: e.target.innerHTML
    });

    const updatedComments = comments.map((comment, index) => {
      if (index !== parseInt(commentIndex, 10)) {
        return comment;
      }

      return updatedComment;
    });

    this.setState({
      comments: updatedComments
    });
  }

  deleteComment(e) {
    debugger;
    const deleteAtIndex = parseInt(e.target.parentNode.id.split('-')[1], 10);

    const comments = this.state.comments;
    const updatedComments = [
      ...comments.slice(0, deleteAtIndex),
      ...comments.slice(deleteAtIndex + 1)
    ];

    this.setState({
      comments: updatedComments
    });
  }

  handleTypeChange(event) {
    this.setState({
      type: event.target.value
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  render() {
    const { type, description } = this.state;

    return (
      <div className="box">
        <EntryType onTypeChange={this.handleTypeChange} />

        <EntryDescription
          description={this.state.description}
          onDescriptionChange={this.handleDescriptionChange}
        />

        <CompetencySelector addComment={this.addComment} />

        {this.state.comments.map((comment, index) => (
          <div
            className="notification"
            key={'comment-' + index}
            id={'comment-' + index}
          >
            <button
              id={index + '-delete'}
              className="delete"
              onClick={this.deleteComment}
            />
            In the area of <strong>{comment.competency}</strong> I{' '}
            <span
              className="editable"
              id={index + '-behavioralIndicator'}
              contentEditable
              suppressContentEditableWarning
              onClick={this.clear}
              onBlur={this.updateComment}
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
              onBlur={this.updateComment}
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
              onBlur={this.updateComment}
            >
              {comment.impact}
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default EntryItem;
