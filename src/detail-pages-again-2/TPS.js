import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-tpstka.css";

import gbtps from "../img/daftar.png"
import gbtps1 from "../img/daftar.png"
import gbtps2 from "../img/daftar.png"

function TPS() {
  return (
    <div className="TPS">
      <h1 class="judultpstka">
            <div><a href="WeExam.html" class="log-out-tpstpa">Back</a></div>
            Tes Pengetahuan Skolastik
      </h1>
              <hr color="rgb(0, 67, 155)" />
              
      <div class="rowtpstka">
            <div class="about-col-tpstpa">
                  <p><strong>Penalaran <br/>Umum</strong></p>
                  <img className="gb-tps" src={gbtps} alt="Welearn"/>
                  <Link to="/home/wsat/weexam/tpa/tryouttps">
                  <div className="btn-tps">
                        <button type="button" id="submit-tpstpa"><a href=""><strong>Try Out</strong></a></button>
                  </div>
                  </Link>
            </div>

            <div class="about-col-tpstpa">
                  <p><strong>Pengetahuan Kuantitatif</strong></p>
                  <img className="gb-tps" src={gbtps1} alt="Welearn"/>
                  <div className="btn-tps">
                        <button type="button" id="submit-tpstpa"><a href=""><strong>Try Out</strong></a></button>
                  </div>
            </div>

            <div class="about-col-tpstpa">
                  <p><strong>Memahami Bacaan dan Menulis</strong></p>
                  <img className="gb-tps" src={gbtps2} alt="Welearn"/>
                  <div className="btn-tps">
                        <button type="button" id="submit-tpstpa"><a href=""><strong>Try Out</strong></a></button>
                  </div>
            </div>
      </div>

      <h2 id="akhir-tpstpa">Selamat Mengerjakan !</h2>

</div>

  )
}

export default TPS