import React from 'react';

const Entry = (props) => {
  const { competency, behavioralIndicator, example, impact } = props.entry;

  return (
    <div className="box">
      <p>
        {`In the competency of ${competency} I ${behavioralIndicator} by 
            ${example} with the impact that ${impact}`}
      </p>
    </div>
  );
};

export default Entry;