import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import "../css/style-beranda.css";

// import Clock from 'react-clock';
// import 'react-clock/dist/Clock.css';


// import image
import weLearn from '../img/we-learn.jpeg'
import gbb from "../img/gbb.gif"
import vektor2 from "../img/vektor2.gif"
import gif12 from "../img/giff12.gif"
import gb5 from "../img/gb5.jpg"
import gb4 from "../img/gb4.jpg"
import gbbbb from "../img/gbbbb.jpg"
import gb6 from "../img/gb6.jpg"
import hm1 from "../img/hm1.jpg"
import gb from "../img/gb.png"
import hm3 from "../img/hm3.png"
import ujian from "../img/ujian.png"
import healing from "../img/healing.png"
import instagram from "../img/instagram.png"
import facebook from "../img/facebook.png"
import twitter from "../img/twitter.png"
import linkedin from "../img/linkedin.png"
import welearnnn from "../img/welearnnn.jpeg"

function Beranda() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    
    <div className="Beranda">
      <header className="header-beranda">
        <div className="container-beranda">
          <img className="logo-beranda-welearn" src={weLearn} alt="Welearn"/>
          <ul className="ul-beranda">
            <Link to="/home/wemateri">
            <li className="li-beranda">
              <a href="WMateri.html">
                <strong>WeMateri</strong>
              </a>
            </li>
            </Link>
            <Link to="/home/wsat">
            <li className="li-beranda">
              <a href="WSAT.html">
                <strong>WSAT</strong>
              </a>
            </li>
            </Link>
            <Link to="/home/jadwal">
            <li className="li-beranda">
              <a href="jadwal-ujian.html">
                <strong>Jadwal</strong>
              </a>
            </li>
            </Link>
            <Link to="/home/absensi">
            <li className="li-beranda">
              <a href="absensi.html">
                <strong>Absensi</strong>
              </a>
            </li>
            </Link>
            <li className="active-beranda">
              <a href="beranda.html">
                <strong>Home</strong>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div className="banner-beranda">
        <div className="background-home-beranda">
          <div className="ini-time">
            <div className="time">
              <p className="timee">Current time:</p>
              <div style={{ fontSize: "27px", color: "black", paddingBottom:"60px" }}>{clockState}</div>
            </div>
          </div>

          <img className="img-beranda" src={vektor2} alt="Welearn"/>
          <div className="berandaaa">
            <h1 className="h1-beranda">
              Learn Anytime, <span>Anywhere</span>
            </h1>
            <h1 className="h1-beranda2">
              <br></br> And <span>Accelerate Future</span>
            </h1>
            <div className="line-beranda">
              <div className="garis-beranda"></div>
            </div>
          </div>

          <div className="wsat-beranda">
            <div id="ini-wsat-beranda">
              <div className="container-beranda">
                <img className="img-beranda1"src={gif12} alt="Welearn"/>
                <div className="text-wsat2-beranda">
                  <h2 className="text-wsat3-beranda">
                    Yuk kenali fitur - fitur menarik apa saja<br></br> yang ada
                    di WeLearn !{" "}
                    
                  </h2>
                </div>
                <div className="button-wsat-beranda">
                  <button type="submit" className="btn-wsat2-beranda">
                    <a href="#ini-wsat2-beranda">
                      <strong>Yuk Simak Sekarang !</strong>{" "}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div id="ini-card7-beranda">
      <div className="card7-beranda">
            <h1 className="h1-card7-beranda">Mengapa harus belajar di WeLearn ?</h1>
            <table>
                  <tr>
                        <td>
                              <div className="box7-beranda">
                                  <img className="c7-beranda" src={hm3} alt="Welearn"/>
                                          <h1 className="text7-beranda">Belajar Menjadi Mudah</h1>
                                          <h2 className="texts7-beranda">Karena tujuan kami adalah sebagai solusi media pembelajaran di masa pandemi jadi WeLearn menghadirkan fitur-fitur yang dapat membantu metode pembelajaran secara daring</h2>
                                    <img className="c7-beranda" src={gbbbb} alt="Welearn"/>
                                          <h1 className="text7-beranda">Mudah Diakses</h1>
                                          <h2 className="texts7-beranda">Semua orang dapat dengan mudah mengakses semua fitur-fitur yang ada di WeLearn sehingga mudah dipahami oleh pengguna</h2>
                              </div>
                        </td>
            

                        <td>
                            <div className="box8-beranda">
                                <img className="c8-beranda" src={gb6} alt="Welearn"/>
                              </div>
                        </td>

                        <td>
                              <div className="box9-beranda">
                                  <img className="c9-beranda" src={hm1} alt="Welearn"/>
                                          <h1 className="text9-beranda">Materi Lengkap dan Ringkas</h1>
                                          <h2 className="texts9-beranda">WeLearn menyediakan fitur materi yang lengkap untuk pembelajaran serta terdapat ringkasan materinya juga sehingga pengguna akan mudah memahaminya</h2>
                                  <img className="c9-beranda" src={gb} alt="Welearn"/>
                                          <h1 className="text9-beranda">Banyak Fitur Menyenangkan</h1>
                                          <h2 className="texts9-beranda">Disini kami banya menyediakan fitur-fitur yang tidak membuat pengguna bosan, seperti terdapat fitur W-Fresh, Quiz, dll.</h2>
                              </div>
                        </td>
                  </tr>
            </table>
        </div>
      </div>

      <div className="wsat2-beranda">
        <div id="ini-wsat2-beranda">
          <div className="container-beranda">
            <h1 className="ws-beranda">Apa sih WSAT itu ?</h1>
            <br/>
            <img className="img-beranda2" src={gbb} alt="Welearn"/>
            <div className="text-wsat-beranda">
              <h3 className="h3-beranda1">WSAT kepanjangan dari We - Scholastic Assesment Test</h3>
              <h3 className="h3-beranda2">
                WSAT merupakan test standar untuk masuk ke Perguruan Tinggi{" "}
              </h3>
            </div>

            <div className="button-wsat-beranda2">
              <button type="submit" className="btn-wsat2-beranda2">
                    <a href="https://www.hotcourses.co.id/study-abroad-info/university-applications/apa-itu-sat/">
                      <strong>Baca Selengkapnya</strong>{" "}
                    </a>
              </button>
            </div>
            <div className="text-bottom-beranda">
              <h2 className="h2-beranda-wsat2">
                Siapa sih yang ngga mau masuk universites ternama di luar
                negeri?
              </h2>
              <h3 className="h3-beranda-wsat2">
                Nah maka dari itu disini WeLearn menyediakan latihan Scholastic
                Assesment Test untuk <br></br> kalian yang punya rencana dan
                mimpi kuliah di luar negeri
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="wsat3-beranda">
        <div id="ini-wsat3-beranda">
          <div className="container-beranda">
            <h1 className="ws3-beranda">
              WeLearn menyediakan 2 fitur menarik nih untuk sobat semuanya !{" "}
              <br/>Yaitu Fitur WeLesson dan WExam
            </h1>
            <br/>
            <div className="box-card-beranda">
              <table className="table-beranda">
                <tr className="tr-beranda">
                  <td className="tr-beranda">
                    <div className="box-kls7-beranda">
                      <img className="kls7-beranda" src={gb5} alt="Welearn"/>
                      <h1 className="text-kls-beranda">WLesson</h1>
                      <h2 className="text-kls2-beranda">
                        Di fitur ini kami menyediakan Test Potensi Skolastik (
                        TPS ) dan Test Potensi Akademik ( TPA ) untuk membantu
                        kalian masuk ke Perguruan Tinggi
                      </h2>
                      <Link to="/home/wsat">
                      <button type="button" className="button-kls7-beranda">
                        <a href="mata-pelajaran-kelas7.html">
                          <strong>Selengkapnya</strong>
                        </a>
                      </button>
                      </Link>
                    </div>
                  </td>

                  <td>
                    <div className="box-kls8-beranda">
                      <img className="kls8" src={gb4} alt="Welearn"/>
                      <h1 className="text-kls-beranda">WExam</h1>
                      <h2 className="text-kls2-beranda">
                        Di fitur ini kami menyediakan Try Out, Test Keterampilan
                        serta Test Penjurusan untuk mengenal lebih dalam potensi
                        yang kalian miliki masing-masing
                      </h2>
                      <Link to="/home/wsat/weexam">
                      <button type="button" className="button-kls8-beranda">
                        <a href="mata-pelajaran-kelas8.html">
                          <strong>Selengkapnya</strong>
                        </a>
                      </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="card2-beranda">
        <div className="box-beranda-welearn">
          <h1 className="h1-beranda-card2">
            Kerjakan ujian bersama WeLearn <br></br>Dapatkan soal-soal materi
            lengkap yang ada <br></br>di fitur kami !
          </h1>
          <div className="box-beranda1">
            <img className="ujian-beranda" src={ujian} alt="Welearn"/>
            <h3 className="teks-w-ujian-beranda">W-Ujian</h3>
          </div>
          <Link to="/home/ujianhariini">
          <div className="w-ujian-beranda">
            <button type="button" className="button-w-ujian-beranda">
              <a href="ujian.html">
                <strong>Kerjakan Sekarang</strong>
              </a>
            </button>
          </div>
          </Link>
        </div>
      </div>

      <div className="card3-beranda">
        <div className="box-beranda-welearn2">
          <h1 className="h1-wfresh-beranda">
            Nikmati fitur W-Fresh <br></br>sebagai refreshing agar tidak bosan{" "}
            <br></br>Selamat Menikmati !
          </h1>
          <div className="box-beranda2">
            <img className="fresh-beranda" src={healing} alt="Welearn"/>
            <h3 className="teks-w-fresh-beranda">W-Fresh</h3>
            </div>
            
          <Link to="/home/wfresh">
          <div className="w-fresh-beranda">
            <button type="button" className="button-w-fresh-beranda">
              <a href="https://google.com">
                <strong>Coba Sekarang</strong>
              </a>
            </button>
          </div>
          </Link>
        </div>
      </div>

      <div className="card4-beranda">
        <div className="box-beranda-welearn3">
          <h1 className="h1-bottom-beranda">
            "Bersama <span className="span-beranda">WeLearn</span> Belajar Menjadi <span className="span-beranda">Mudah,</span>{" "}
            <br/><span className="span-beranda">Efektif,</span> dan <span className="span-beranda">Interaktif</span> "
          </h1>
        </div>
      </div>

      <div className="card6-beranda">
        <div className="ini-card6-beranda"></div>
      </div>

      <div className="card5-beranda">
        <div className="ini-card5-beranda">
          <h1 className="h1-beranda-card5">Contact</h1>
          <img className="contact-beranda" src={welearnnn} alt="Welearn"/>
          <h3 className="h3-bottom-beranda">
            WeLearn adalah sebuah website pendidikan <br></br>yang dibuat
            sebagai solusi dalam memudahkan <br />
            pengguna untuk mengatasi pembelajaran <br /> jarak jauh menjadi
            lebih efektif, mudah, cepat <br /> dan interaktif
          </h3>
          <div className="col-3-beranda">
            <h4 className="h4-bottom-beranda">Addres</h4>
            <p className="p-beranda">Surakarta, Jawa Tengah, Indonesia</p>
          </div>

          <div className="col-3-beranda">
            <h4 className="h4-bottom-beranda">Email</h4>
            <p className="p-beranda">welearnforall20@gmail.com</p>
          </div>

          <div className="col-3-beranda">
            <h4 className="h4-bottom-beranda">Telp/WA</h4>
            <p className="p-beranda">+62 8727 706 328</p>
          </div>
        </div>
      </div>

      <footer className="footer-beranda">
        <a className="a-beranda" href="https://www.instagram.com/we_learn_smk2/">
          <img src={instagram} alt="Welearn"/>
        </a>
        <a className="a-beranda" href="https://www.facebook.com">
          <img src={facebook} alt="Welearn"/>
        </a>
        <a className="a-beranda" href="https://twitter.com/inipiiraaaaaa?s=08">
          <img src={twitter} alt="Welearn"/>
        </a>
        <a className="a-beranda" href="https://www.linkedin.com">
          <img src={linkedin} alt="Welearn"/>
        </a>

        <div className="container-beranda">
          <br/>
          <small className="small-beranda">Copyright 2021 @WeLearn</small>
        </div>
      </footer>

      <script src="time.js"></script>
      </div>
      </div>
  );
}

export default Beranda;
