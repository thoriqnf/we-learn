import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-wemateri.css";

import wavewemateri from "../img/wave-wemater.jpeg"
import giff5 from "../img/giff5.gif"
import hm3 from "../img/hm3.png"
import hm from "../img/hm.jpg"
import hm1 from "../img/hm1.jpg"
import giff17 from "../img/giff17.gif"

function MateriSmp() {
  return (
    <div className="MateriSmp">
    <section id="banner-wemateri">
            <header>
                  <div className="container-wemateri">
                        <img className="logo-wemateri" src={wavewemateri} alt="Welearn"/>  
                  </div>
            </header>
      </section>

      <div className="banner-left2-wemateri">
            <div className="container-wemateri">
                  <img className="gb-wemateri4" src={giff5} alt="Welearn"/>  
                  <div className="text-banner-smp-wemateri">
                        <h1>Materi Untuk Siswa / Siswi SMP / MTS </h1><br/>
                              <div className="box-h3-wemateri">
                                    <h3><strong>Selamat Belajar!</strong></h3>
                              </div>
                  </div>
            </div>
      </div>

      <div className="card3-wemateri">
            <table>
                  <tr>
                        <td>
                              <div className="box-kls7-wemateri">
                                    <img className="kls7-wemateri" src={hm3} alt="Welearn"/>  
                                    <Link to="/home/wemateri/materismp/mapelkelas7">
                                    <button type="button" className="button-kls7-wemateri"><a href="mata-pelajaran-kelas7.html"><strong>Belajar Sekarang</strong></a></button>
                                    </Link>
                                          <h1 className="text-kls-wemateri">Materi Kelas 7</h1>
                                          <h2 className="text-kls2-wemateri">Klik belajar sekarang untuk mendapatkan materi kelas 7 secara gratis</h2>
                              </div>
                        </td>
            

                        <td>
                              <div className="box-kls8-wemateri">
                                    <img className="kls8-wemateri" src={hm} alt="Welearn"/>  
                                    <Link to="/home/wemateri/materismp/mapelkelas8">
                                    <button type="button" className="button-kls8-wemateri"><a href="mata-pelajaran-kelas8.html"><strong>Belajar Sekarang</strong></a></button>
                                    </Link>
                                          <h1 className="text-kls-wemateri">Materi Kelas 8</h1>
                                          <h2 className="text-kls2-wemateri">Klik belajar sekarang untuk mendapatkan materi kelas 8 secara gratis</h2>
                              </div>
                        </td>

                        <td>
                              <div className="box-kls9-wemateri">
                                    <img className="kls9-wemateri" src={hm1} alt="Welearn"/>  
                                    <Link to="/home/wemateri/materismp/mapelkelas9">
                                    <button type="button" className="button-kls9-wemateri"><a href="mata-pelajaran-kelas9.html"><strong>Belajar Sekarang</strong></a></button>
                                    </Link>
                                          <h1 className="text-kls-wemateri">Materi Kelas 9</h1>
                                          <h2 className="text-kls2-wemateri">Klik belajar sekarang untuk mendapatkan materi kelas 9 secara gratis</h2>
                              </div>
                        </td>
                  </tr>
            </table>
      </div>

      <div className="banner-right-wemateri">
            <div className="container-wemateri">
                  <img className="gb-wemateri4" src={giff17} alt="Welearn"/> 
                  <div className="text-banner-smp-right-wemateri">
                        <h1>“Be fearless, walau ada rintangan, <br/>kita pasti bisa melewati itu semua apa pun hambatannya.”</h1><br/>
                        <h3><strong>-Nadiem Makarim</strong></h3>
                  </div>
            </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#100B32" fill-opacity="1" d="M0,224L30,234.7C60,245,120,267,180,250.7C240,235,300,181,360,176C420,171,480,213,540,202.7C600,192,660,128,720,117.3C780,107,840,149,900,138.7C960,128,1020,64,1080,42.7C1140,21,1200,43,1260,53.3C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </div>

  )
}

export default MateriSmp