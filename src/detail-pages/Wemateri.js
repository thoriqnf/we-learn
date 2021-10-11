import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-wemateri.css";

import wavewemateri from "../img/wave-wemater.jpeg"
import giff9 from "../img/giff9.gif"
import giff13 from "../img/giff13.gif"
import giff2 from "../img/giff2.gif"

function Wemateri() {
  return (
    <div className="Wemateri">
    <section id="banner-wemateri">
        <header className="header-wemateri">
            <div className="container-wemateri">
                <img className="logo-wemateri" src={wavewemateri} alt="Welearn"/>  
            <ul>
                <li><a href="#SMP-wemateri">SMP / MTS</a></li>
                <li><a href="#SMA-wemateri">SMA / SMK</a></li>
            </ul>
        </div>
        </header>
    </section>

    <div className="banner-left-wemateri">
        <div className="container-wemateri">
            <img className="gb-wemateri" src={giff9} alt="Welearn"/> 
                    <div className="ini-box-wemateri">
                        <div className="box-wemateri">
                            <div className="text-banner-wemateri">
                                <h2 className="h2-text-banner-wemateri">WeMateri</h2><br/>
                                <h3 className="h3-text-banner-wemateri"><strong>Pilih Materi Belajarmu dan <br/>Tingkatkan Produktivitas Bersama WeLearn !</strong></h3>
                            </div>
                        </div>
                    </div>
        </div>
    </div>

    <section id="SMP-wemateri">
        <div className="container-wemateri">
            <img className="gb-wemateri2" src={giff13} alt="Welearn"/> 
                    <div className="text-smp-wemateri">
                        <h1>Materi SMP / MTS</h1><br/>
                        <p><strong>Dapatkan akses menuju materi pelajaran SMP / MTS <br/>kelas 7, 8 dan 9 yang lengkap</strong></p>
                    </div>

                    <Link to="/home/wemateri/materismp">
                    <div className="button-wemateri">
                        <button type="submit" className="btn-wemateri"><a href="materi-smp.html"><strong>Baca Materi Sekarang</strong> </a></button>
                    </div>
                    </Link>
        </div>    
    </section>

    <section id="SMA-wemateri">
        <div className="container-wemateri">
            <img className="gb-wemateri3" src={giff2} alt="Welearn"/>
                    <div className="text-sma-wemateri">
                        <h1>Materi SMA / SMK</h1><br/>
                        <p><strong>Dapatkan akses menuju materi pelajaran SMA / SMK <br/>kelas 10, 11 dan 12 yang lengkap</strong></p>
                    </div>

                    <Link to="/home/wemateri/materisma">
                    <div className="button-wemateri2">
                        <button type="submit" className="btn-wemateri2"><a href="materi-sma.html"><strong>Baca Materi Sekarang</strong> </a></button>
                    </div>
                    </Link>
        </div>    
    </section>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#100B32" fill-opacity="1" d="M0,224L30,234.7C60,245,120,267,180,250.7C240,235,300,181,360,176C420,171,480,213,540,202.7C600,192,660,128,720,117.3C780,107,840,149,900,138.7C960,128,1020,64,1080,42.7C1140,21,1200,43,1260,53.3C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
</div>

  )
}

export default Wemateri