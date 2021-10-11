import React, { useEffect, useState } from 'react';

import { formatTime } from '../utils';

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return(
    <div className="card-quiz">
      <div className="card-content-quiz">
        <div className="content-quiz">
          <h3 className="hasil-anda">Hasil Anda</h3>
          <p className="dari">{correctAnswers} dari {data.length}</p>
          <p className="persen"><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p className="waktu-anda"><strong>Waktu Anda:</strong> {formatTime(time)}</p>
          
          <div className="ini-button-quiz">
            <button className="button-quiz3 is-info mr-2" onClick={onAnswersCheck}>Check Jawaban Anda</button><br/>
          </div>
          <div className="ini-button-quiz">
            <button className="button-quiz3 is-success" onClick={onReset}>Coba Lagi</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default End;