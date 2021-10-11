import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-ujian-hari-ini.css";

import clock from "../img/clock.png"
import vektor2 from "../img/vektor2.jpeg"
import clock2 from "../img/clock2.png"
import clock3 from "../img/clock2.png"

function UjianHariIni() {
  return (
        <div className="UjianHariIni">
              <section class="waves-hari-ini">
            <img className="gb-hari-ini" src={clock} alt="Welearn"/>
            <h1>UJIAN HARI INI</h1>
      </section>
      

      <section class="gb-ujian-hari-ini">
            <div class="card-hari-ini">
                  <img className="gb2-hari-ini" src={vektor2} alt="Welearn"/>
            
                  <table className="table-hari-ini">
                        <tr className="tr-hari-ini">
                              <td className="td-hari-ini">
                              <div class="box-hari-ini">
                                          <h2>BAHASA INDONESIA</h2>
                                          <p><strong>90 Menit</strong></p>
                                          <img className="gb3-hari-ini" src={clock2} alt="Welearn"/>
                                    </div>
                                    <Link to="/home/ujianhariini/ujian">
                                    <div class="inibutton-hari-ini">
                                          <button type="button" class="btn-primary-hari-ini"><a href="ujian.html"><strong>Mulai Ujian</strong></a></button>
                                    </div>
                                    </Link>
                              </td>
            
                              <td className="td-hari-ini">
                                    <div class="box-hari-ini">
                                          <h2>MATEMATIKA</h2>
                                          <p><strong>120 Menit</strong></p>
                                          <img className="gb4-hari-ini" src={clock3} alt="Welearn"/>
                                    </div>
                                    <div class="inibutton-hari-ini">
                                          <button type="button" class="btn-primary-hari-ini"><strong>Mulai Ujian</strong></button>
                                    </div>
                              </td>
                        </tr>
                  </table>
            </div>
      </section>
</div>

  )
}

export default UjianHariIni