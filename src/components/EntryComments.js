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
      <div className="notification" key={'comment-' + index}>
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
          onClick={this.clear}
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
          onClick={this.clear}
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
          onClick={this.clear}
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
