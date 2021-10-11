import React from "react";
import "../css/style-ujian.css";

import studentujian from "../img/student.png";
import vektorrr from "../img/vektorrr.gif";

function Ujian() {
  return (
    <div className="Ujian">
      <section id="ini-header-materi-ujian">
        <input type="checkbox" id="check-ujian" />
        <header className="header-materi-ujian">
          <div className="header-materi2-ujian">
            <label className="label-ujian" for="check">
              <i className="fas fa-bars" id="sidebar-btn-ujian"></i>
            </label>

            <div className="right-area">
              <a href="beranda.html" className="log-out-ujian">
                Back
              </a>
            </div>
          </div>
        </header>

        <div className="sidebar-ujian">
          <div className="left-area-ujian">
            <h3 className="h3-left-area-ujian">
              <span className="span-left-area-ujian">WeLearn</span>
            </h3>
          </div>

          <div className="sidebar2-ujian">
            <center>
              <img
                className="profile-img-ujian"
                src={studentujian}
                alt="Welearn"
              />
              <h3 className="h3-sidebar2-ujian">Relvirananfel</h3>
              <h4 className="h4-sidebar2-ujian">Student</h4>
            </center>
            <br />
            <br />

            <ul>
              <li className="active-2-ujian text-decoration-ujian">
                <a href="ujian.html">
                  <i className="fas fa-book-open"></i>
                  <span>Ujian</span>
                </a>
              </li>
              <li className="text-decoration-ujian">
                <a href="login.html">
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Log Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="content-ujian">
        <div className="text-bindo-ujian">
          <h1>Bahasa Indonesia</h1>
        </div>

        {/* <div className="boxx-colom-ujian"> */}
        <div className="box-colom-ujian">
          <div>
            <div className="ini-colom1-ujian">
              <div className="colom1-ujian">
                <h1 className="tanggal-ujian">Tanggal</h1>
                <h1 className="waktu-ujian">Waktu</h1>
                <h1 className="jumlahsoal-ujian">Jumlah Soal</h1>
                <h1 className="status-ujian">Status</h1>
              </div>
            </div>

            <div className="ini-colom2-ujian">
              <div className="colom2-ujian">
                <h1 className="tanggal1-ujian">17-06-2021</h1>
                <h1 className="waktu1-ujian">07.00 - 08.30</h1>
                <h1 className="jumlahsoal1-ujian">40 Soal</h1>
                <div className="status1-ujian">
                  <button type="button" className="kerjakan-ujian">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwfh3MdW00iHyG_6jVlL_zLWJR1voUG-BJzhUoK73dv_7T-A/alreadyresponded">
                      <strong>Kerjakan</strong>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}

          <div className="gif-box">
            <img className="gif-ujian" src={vektorrr} alt="Welearn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ujian;
