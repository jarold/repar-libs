import React, { Component } from 'react';
import Modal from '../UI/Modal';

class EntryComments extends Component {
  constructor(props) {
    super(props);

    this.state = { editCompetency: false };

    this.toggleCompetencyModal = this.toggleCompetencyModal.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  toggleCompetencyModal() {
    this.setState({ editCompetency: !this.state.editCompetency });
  }

  handleSelection(event) {
    console.log(event.target.innerHTML);
  }

  render() {
    let competenciesList = (
      <div className="box has-text-centered">
        <p className="has-text-weight-bold is-size-4">
          Update Selected Competency
        </p>

        <ul className="buttons">
          <li className="button">Communication</li>
          <li className="button">Decision Making</li>
          <li className="button">Leadership</li>
          <li className="button">Principles of Community</li>
          <li className="button">Problem Solving</li>
          <li className="button">Quality Improvement</li>
          <li className="button">Service Focus</li>
          <li className="button">Stewardship and Managing Resources</li>
          <li className="button">Strategic Planning</li>
          <li className="button">Teamwork</li>
          <li className="button">Managing People</li>
        </ul>
      </div>
    );

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
        In the area of
        <span onClick={this.toggleCompetencyModal}>
          <strong>{` ${comment.competency} `}</strong>
        </span>
        I{' '}
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

    return (
      <div>
        <Modal
          show={this.state.editCompetency}
          toggle={this.toggleCompetencyModal}
          select={this.props.updateComment}
        >
          {competenciesList}
        </Modal>
        {comments}
      </div>
    );
  }
}

export default EntryComments;
