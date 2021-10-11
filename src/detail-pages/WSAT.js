import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-wsat.css";

import logowsat from "../img/logo-wsat1.jpeg"
import bel from "../img/bel.gif"
import sti from "../img/sti.gif"
import gbwsat from "../img/gbbb.gif"

function WSAT() {
  return (
    <div className="WSAT">
    <header className="header-wsat">
      <div className="container-wsat">
        <nav className="nav-wsat">
          <img className="gb-wsat" src={logowsat} alt="Welearn"/>
          <ul className="ul-wsat">
            <li>
              <Link to="/home/wsat/welesson">
              <div id="button-wsatt">
                <button type="submit" id="wsatt">
                  <a href="WLesson">WeLesson</a>
                </button>
              </div>
              </Link>
            </li>
            <li>
              <Link to="/home/wsat/weexam">
              <div id="button-wsatt">
                <button type="submit" id="wsatt">
                  <a href="WeExam.html">WeExam</a>
                </button>
              </div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="left-col-wsat">
          <h1>
            Masuk dan dapatkan materi pelajaran serta latihan soal ujian PTN
          </h1>
          <div className="left-container-wsat">
            <div className="box-wsat">
              <h2>Tes Potensi Skolastik</h2>
              <a href="">
                <img className="gb-wsat2" src={bel} alt="Welearn"/>
              </a>
              <span className ="span-wsat"
                >Tes Potensi Skolastik ,temukan berbagai macam materi dan
                latihan soal tentang logika untuk persiapan masuk ke Perguruan
                Tinggi Negeri favoritmu
              </span>
            </div>

            <div className="box-wsat">
              <h2>Tes Potensi Akademik</h2>
              <a href="">
                <img className="gb-wsat3" src={sti} alt="Welearn"/>
              </a>
              <span className="wsat"
                >Tes Potensi Akademik ,temukan berbagai macam materi dan latihan
                soal perhitungan untuk persiapan masuk ke Perguruan Tinggi
                Negeri favoritmu
              </span>
            </div>
          </div>
        </div>
        <div className="right-col-wsat">
          <h1>
            Akses materi khusus yang telah disiapkan WeLearn untuk kamu kelas 12
            yang sedang mempersiapkan seleksi masuk Perguruan Tinggi Negeri
            impianmu
          </h1>
          <div className="back-video-wsat">
            <img className="gb-wsat4" src={gbwsat} alt="Welearn"/>
          </div>
        </div>
      </div>
    </header>
    </div>

  )
}

export default WSAT