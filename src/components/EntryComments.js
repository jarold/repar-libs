import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../UI/Modal';
import InlineInput from '../UI/InlineInput';

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

  handleUpdateIndicatorText = (index, text) => {
    this.props.updateComment(index, 'behavioralIndicator', text);
  };

  handleUpdateExampleText = (index, text) => {
    this.props.updateComment(index, 'example', text);
  };

  handleUpdateImpactText = (index, text) => {
    this.props.updateComment(index, 'impact', text);
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
        I
        <InlineInput
          updateFn={text => {
            this.props.updateComment(index, 'behavioralIndicator', text);
          }}
        >
          {` ${comment.behavioralIndicator} `}
        </InlineInput>
        by
        <InlineInput
          updateFn={text => {
            this.props.updateComment(index, 'example', text);
          }}
        >
          {` ${comment.example} `}
        </InlineInput>
        with the impact that
        <InlineInput
          updateFn={text => {
            this.props.updateComment(index, 'impact', text);
          }}
        >
          {` ${comment.impact} `}
        </InlineInput>
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
