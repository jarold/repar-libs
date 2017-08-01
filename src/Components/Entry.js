import React from 'react';

class Entry extends React.Component {
  render() {
    return (
      <div className="box">
        <p>
          {`In the competency of ${this.props.competency}`
          + ' I ' + '__________'
          + ' by ' + '__________'
          + ' with the impact that ' + '__________'
          }
        </p>
      </div>
    )
  }
}

export default Entry;
