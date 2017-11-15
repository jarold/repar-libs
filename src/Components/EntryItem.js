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

  handleChange(event) {
    const key = event.target.id;
    this.setState({
      [key]: event.target.innerHTML
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
          onBlur={this.handleChange}
        >
          {description}
        </h3>

        <CompetencySelector addComment={this.addComment} />

        {this.state.comments.map((comment, index) => (
          <div>
            In the area of <strong>{comment.competency}</strong> I{' '}
            <span contentEditable>{comment.behavioralIndicator}</span> by{' '}
            <span contentEditable>{comment.example}</span> with the impact that{' '}
            <span contentEditable>{comment.impact}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default EntryItem;
