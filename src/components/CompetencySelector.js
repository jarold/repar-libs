import React from 'react';
import { connect } from 'react-redux';

const CompetencySelector = props => {
  const keys = Object.keys(props.competencies);

  return (
    <div style={{ marginBottom: '1.5em' }}>
      <p>Demonstrated Competencies</p>
      <div className="tags">
        {keys.map((key, index) => (
          <span
            key={'tag' + index}
            className="tag is-rounded selectable"
            onClick={props.addComment}
          >
            {key}
          </span>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { competencies: state.counter };
};

export default connect(mapStateToProps)(CompetencySelector);
