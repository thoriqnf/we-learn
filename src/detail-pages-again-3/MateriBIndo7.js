import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-materi-detail.css";

import cw from "../img/cw.jpeg"
import imgberandamateri from "../img/5.jpeg"

function MateriBIndo7() {
  return (
    <div className="MateriBIndo7">
    <input type="checkbox" id="check-materi" />
    <header className="header-materi">
      <label className="label-materi" for="check">
        <i className="fas fa-bars" id="sidebar-btn-materi"></i>
      </label>

      <div className="left-area-materi">
          <h3 className="h3-left-area">BAHASA <span className="span-left-area">INDONESIA</span>
                <Link to="/home">
                <a href="beranda.html" class="log-out-materi">Keluar</a>
              </Link>
          </h3>
      </div>
    </header>

    <div className="sidebar-materi">
      <center>
        <img className="profile-img-materi" src={cw} alt="Welearn"/>
        <h4>Siswa123</h4>
      </center>
      <ul>
        <li className="active-2-materi text-decoration-materi">
          <a href="beranda-materi-bindo.html"
            ><i className="fas fa-desktop"></i><span>Beranda Materi</span>
          </a>
        </li>
        <li className="text-decoration-materi">
          <Link to="/home/wemateri/materismp/mapelkelas7/materibindo7/materipagebindo">
          <a href="materi-pembelajaran-indo.html"
            ><i className="fas fa-book"></i><span>Materi</span>
          </a>
          </Link>
        </li>
        <li className="text-decoration-materi">
          <Link to="/home/wemateri/materismp/mapelkelas7/materibindo7/videomateribindo">
          <a href="video-materi.html"
          ><i className="fas fa-video"></i><span>Video Materi</span>
          </a>
          </Link>
        </li>
        <li className="text-decoration-materi">
          <Link to="/home/wemateri/materismp/mapelkelas7/materibindo7/rangkumanbindo">
          <a href="rangkuman-materi-bindo.html"
            ><i className="fas fa-file-word"></i><span>Rangkuman Materi</span>
         </a>
         </Link>
        </li>
        <li className="text-decoration-materi">
          <Link to="/home/wemateri/materismp/mapelkelas7/materibindo7/quizbindo">
          <a href=""
            ><i className="fas fa-comment-dots"></i><span>Quiz Cepat</span>
          </a>
          </Link>
        </li>
      </ul>
    </div>

    <div className="content-materi">
      <img className="imgberandamateri" src={imgberandamateri} alt="Welearn"/>
    </div>
    </div>

  )
}

export default MateriBIndo7