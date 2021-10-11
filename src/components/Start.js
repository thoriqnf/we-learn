import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card-quiz">
      <div className="card-content-quiz">
        <div className="content-quiz">
          <h1 className="h1-quiz">Klik Start Untuk Mengerjakan Quiz</h1>
          <p className="p-quiz">Good Luck!</p>
          <button className="button-quiz is-info is-medium" onClick={onQuizStart}>Start Now !</button>
        </div>
      </div>
    </div>
  );
}

export default Start;