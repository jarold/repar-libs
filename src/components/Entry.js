import React, { Component } from 'react';
import CompetencySelector from './CompetencySelector';
import EntryType from './EntryType';
import EntryDescription from './EntryDescription';
import EntryComments from './EntryComments';

class Entry extends Component {
  constructor(props) {
    super(props);

    this.addComment = this.addComment.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  addComment(event) {
    this.props.onAddComment(event.target.innerHTML);
  }

  handleTypeChange(event) {
    this.props.onTypeChange(event.target.value);
  }

  handleDescriptionChange(event) {
    this.props.onDescriptionChange(event.target.value);
  }

  handleCompetencyChange() {}

  render() {
    return (
      <div className="box">
        <EntryType onTypeChange={this.handleTypeChange} />
        <button
          className="delete is-pulled-right"
          onClick={this.props.onDeleteEntry}
        />

        <EntryDescription
          description={this.props.entry.description}
          onDescriptionChange={this.handleDescriptionChange}
        />

        <CompetencySelector addComment={this.addComment} />

        <EntryComments
          comments={this.props.entry.comments}
          updateComment={this.props.onUpdateComment}
          onDeleteComment={this.props.onDeleteComment}
          onCompetencyChange={this.handleCompetencyChange}
        />
      </div>
    );
  }
}

export default Entry;
