import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  handleUpdateComment = index => {
    this.props.updateComment(
      index,
      this.behavioralInput.getAttribute('name'),
      this.behavioralInput.textContent
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
        id={'comment-' + index}
      >
        <button
          id={index + '-delete'}
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
          name={'Behavioral Indicator'}
          ref={behavioralInput => (this.behavioralInput = behavioralInput)}
          contentEditable
          suppressContentEditableWarning
          onClick={this.clear}
          onBlur={() => {
            this.handleUpdateComment(index);
          }}
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

const mapStateToProps = state => {
  return {
    competencies: state.counter
  };
};

export default connect(mapStateToProps)(EntryComments);
