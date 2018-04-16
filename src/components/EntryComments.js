import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../UI/Modal';

class EntryComments extends Component {
  constructor(props) {
    super(props);

    this.state = { editCompetency: false };

    this.handleCompetencyChange = this.handleCompetencyChange.bind(this);
    this.toggleCompetencyModal = this.toggleCompetencyModal.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  toggleCompetencyModal() {
    this.setState({ editCompetency: !this.state.editCompetency });
  }

  handleFocus(event) {
    const text = event.target.textContent;
    const first = text.split('')[0];
    const last = text.split('')[text.split('').length - 1];

    if (first === '[' && last === ']') {
      event.target.innerHTML = '';
    }
  }

  handleCompetencyChange(event) {
    const index = this.comment.getAttribute('name');

    this.props.updateComment(index, 'competency', event.target.textContent);

    this.setState({ editCompetency: !this.state.editCompetency });
  }

  handleUpdateIndicatorText = index => {
    this.props.updateComment(
      index,
      this.behavioralInput.getAttribute('name'),
      this.behavioralInput.textContent
    );
  };

  handleUpdateExampleText = index => {
    this.props.updateComment(
      index,
      this.exampleInput.getAttribute('name'),
      this.exampleInput.textContent
    );
  };

  handleUpdateImpactText = index => {
    this.props.updateComment(
      index,
      this.impactInput.getAttribute('name'),
      this.impactInput.textContent
    );
  };

  render() {
    let competenciesList = (
      <div className="box has-text-centered">
        <p className="has-text-weight-bold is-size-4">Update Competency</p>

        <ul className="buttons">
          {Object.keys(this.props.competencies).map(competency => {
            return (
              <li key={competency} className="button">
                {competency}
              </li>
            );
          })}
        </ul>
      </div>
    );

    const comments = this.props.comments.map((comment, index) => (
      <div
        className="notification"
        key={'comment-' + index}
        name={index}
        ref={comment => (this.comment = comment)}
      >
        <button
          className="delete"
          onClick={() => {
            this.props.onDeleteComment(index);
          }}
        />
        In the area of
        <span className="selectable" onClick={this.toggleCompetencyModal}>
          <strong>{` ${comment.competency} `}</strong>
        </span>
        I{' '}
        <span
          className="editable"
          name="behavioralIndicator"
          ref={behavioralInput => (this.behavioralInput = behavioralInput)}
          contentEditable
          suppressContentEditableWarning
          onFocus={this.handleFocus}
          onBlur={() => {
            this.handleUpdateIndicatorText(index);
          }}
        >
          {comment.behavioralIndicator}
        </span>{' '}
        by{' '}
        <span
          className="editable"
          name="example"
          ref={exampleInput => (this.exampleInput = exampleInput)}
          contentEditable
          suppressContentEditableWarning
          onFocus={this.handleFocus}
          onBlur={() => {
            this.handleUpdateExampleText(index);
          }}
        >
          {comment.example}
        </span>{' '}
        with the impact that{' '}
        <span
          className="editable"
          name="impact"
          ref={impactInput => (this.impactInput = impactInput)}
          contentEditable
          suppressContentEditableWarning
          onFocus={this.handleFocus}
          onBlur={() => {
            this.handleUpdateImpactText(index);
          }}
        >
          {comment.impact}
        </span>
      </div>
    ));

    return (
      <div>
        <Modal
          show={this.state.editCompetency}
          toggle={this.toggleCompetencyModal}
          select={this.handleCompetencyChange}
        >
          {competenciesList}
        </Modal>
        {comments}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    competencies: state.counter
  };
};

export default connect(mapStateToProps)(EntryComments);
