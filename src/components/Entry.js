import React, { Component } from 'react';
import CompetencySelector from './CompetencySelector';
import EntryType from './EntryType';
import EntryDescription from './EntryDescription';
import EntryComments from './EntryComments';

class Entry extends Component {
  constructor(props) {
    super(props);

    this.clear = this.clear.bind(this);
    this.addComment = this.addComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
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
    this.props.onAddComment(event.target.innerHTML);
    this.props.onUpdateCount(event.target.innerHTML);
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
          updateComment={this.updateComment}
          onDeleteComment={this.props.onDeleteComment}
          onCompetencyChange={this.handleCompetencyChange}
        />
      </div>
    );
  }
}

export default Entry;
