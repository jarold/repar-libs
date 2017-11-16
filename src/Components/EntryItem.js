import React, { Component } from 'react';
import CompetencySelector from './CompetencySelector';

class EntryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typeSelectActive: false,
      type: this.props.entry.type,
      description: this.props.entry.description,
      comments: []
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateType = this.updateType.bind(this);
    this.updateComment = this.updateComment.bind(this);
  }

  toggleDropdown() {
    this.setState({
      typeSelectActive: !this.state.typeSelectActive
    });
  }

  updateType(event) {
    this.setState({
      type: event.target.innerHTML
    });

    this.toggleDropdown();
  }

  updateDescription(event) {
    const key = event.target.id;
    this.setState({
      [key]: event.target.innerHTML
    });
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

  render() {
    const { type, description } = this.state;

    const dropdownClass = this.state.typeSelectActive
      ? 'dropdown is-active'
      : 'dropdown';

    let dropdown = (
      <div className={dropdownClass}>
        <div className="dropdown-trigger">
          <h2 className="title is-3" onClick={this.toggleDropdown}>
            {type}
          </h2>
        </div>
        <div className="dropdown-menu" id="dropdown-menu2" role="menu">
          <div className="dropdown-content" onClick={this.updateType}>
            <div className="dropdown-item">
              <p>Job Function</p>
            </div>
            <hr className="dropdown-divider" />
            <div className="dropdown-item">
              <p>Goal</p>
            </div>
            <hr className="dropdown-divider" />
            <div className="dropdown-item">
              <p>Achievement</p>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className="box">
        {dropdown}

        <h3
          id="description"
          className="subtitle"
          contentEditable
          suppressContentEditableWarning
          onBlur={this.updateDescription}
        >
          {description}
        </h3>

        <CompetencySelector addComment={this.addComment} />

        {this.state.comments.map((comment, index) => (
          <div>
            In the area of <strong>{comment.competency}</strong> I{' '}
            <span
              id={index + '-behavioralIndicator'}
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateComment}
            >
              {comment.behavioralIndicator}
            </span>{' '}
            by{' '}
            <span
              id={index + '-example'}
              contentEditable
              suppressContentEditableWarning
              onBlur={this.updateComment}
            >
              {comment.example}
            </span>{' '}
            with the impact that{' '}
            <span
              id={index + '-impact'}
              contentEditable
              suppressContentEditableWarning
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
