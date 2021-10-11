import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-wemateri.css";

function MateriSma() {
  return (
    <div className="MateriSma">
    <section id="banner">
            <header>
                  <div class="container">
                        <img src="img/wave-wemater.jpeg"/>
            </div>
            </header>
      </section>

      <div class="banner-left2">
            <div class="container">
                  <img src="img/giff5.gif"/>
                        <div class="text-banner-smp">
                              <h1>Materi Untuk Siswa / Siswi SMA / SMK </h1><br/>
                                    <div class="box-h3">
                                          <h3><strong>Selamat Belajar!</strong></h3>
                                    </div>
                        </div>
            </div>
      </div>

      <div class="card3">
            <table>
                  <tr>
                        <td>
                              <div class="box-kls7">
                                    <img class="kls7" src="img/hm3.png"/>
                                    <Link to="/home/wemateri/materisma/mapelkelas10">
                                    <button type="button" class="button-kls7"><a href="mata-pelajaran-kelas10.html"><strong>Belajar Sekarang</strong></a></button>
                                    </Link>
                                          <h1 class="text-kls">Materi Kelas 10</h1>
                                          <h2 class="text-kls2">Klik belajar sekarang untuk mendapatkan materi kelas 10 secara gratis</h2>
                              </div>
                        </td>
            

                        <td>
                              <div class="box-kls8">
                                    <img class="kls8" src="img/hm.jpg"/>
                                    <Link to="/home/wemateri/materisma/mapelkelas11">
                                    <button type="button" class="button-kls8"><a href="mata-pelajaran-kelas11.html"><strong>Belajar Sekarang</strong></a></button>
                                    </Link>
                                          <h1 class="text-kls">Materi Kelas 11</h1>
                                          <h2 class="text-kls2">Klik belajar sekarang untuk mendapatkan materi kelas 11 secara gratis</h2>
                              </div>
                        </td>

                        <td>
                              <div class="box-kls9">
                                    <img class="kls9" src="img/hm1.jpg"/>
                                    <Link to="/home/wemateri/materisma/mapelkelas12">
                                    <button type="button" class="button-kls9"><a href="mata-pelajaran-kelas12.html"><strong>Belajar Sekarang</strong></a></button>
                                    </Link>
                                          <h1 class="text-kls">Materi Kelas 12</h1>
                                          <h2 class="text-kls2">Klik belajar sekarang untuk mendapatkan materi kelas 12 secara gratis</h2>
                              </div>
                        </td>
                  </tr>
            </table>
      </div>

      <div class="banner-right">
            <div class="container">
                  <img src="img/giff17.gif"/>
                        <div class="text-banner-smp-right">
                              <h1>“Be fearless, walau ada rintangan, <br/>kita pasti bisa melewati itu semua apa pun hambatannya.”</h1><br/>
                              <h3><strong>-Nadiem Makarim</strong></h3>
                        </div>
            </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#100B32" fill-opacity="1" d="M0,224L30,234.7C60,245,120,267,180,250.7C240,235,300,181,360,176C420,171,480,213,540,202.7C600,192,660,128,720,117.3C780,107,840,149,900,138.7C960,128,1020,64,1080,42.7C1140,21,1200,43,1260,53.3C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </div>

  )
}

export default MateriSma