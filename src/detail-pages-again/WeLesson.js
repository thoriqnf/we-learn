import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "../css/style-welesson.css";
import BtnSlider from '../detail-pages-again-4/BtnSlider'
import dataSlider from '../detail-pages-again-4/dataSlider'

import welessonlogo from "../img/logo-welessonn.jpeg"

export default function WeLesson() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

  return (
    <div className="WeLesson">
      <header className="header-welesson">
        <div className="container-welesson">
          <img className="logo-welesson" src={welessonlogo} alt="Welearn" />
          <label for="check" className="mobile-menu-welesson">
            <i className="bx bx-menu-welesson" style={{ color: "#FFFFFF" }} ></i>
          </label>
        </div>
      </header>

      <div className="content-welesson">
          <div className="container-slider2">
            {dataSlider.map((obj, index) => {
              return (
                <div
                  key={obj.id}
                  className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                >
                  <img
                    src={process.env.PUBLIC_URL + `/Imgs/gifimg${index + 1}.gif`}
                  />
                </div>
              )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
              {Array.from({ length: 5 }).map((item, index) => (
                <div
                  onClick={() => moveDot(index + 1)}
                  className={slideIndex === index + 1 ? "dot2 active2" : "dot2"}
                ></div>
              ))}
            </div>
        </div>
      </div>


      <section className="section-welesson" id="tps-welesson">
        <div className="judul-tps-welesson">
          <hr color="#FFFFFF" />
          <br />
          <h2 className="namatpstka-welesson">Tes Potensi Skolastik</h2>
          <br />
          <hr color="#FFFFFF" />
        </div>
      </section>

      <div id="all-welesson">
        <section className="section-welesson" id="pu-welesson">
          <div className="container-welesson">
            <div className="judul-pu-welesson">
              <h3 className="h3-welesson">Penalaran Umum</h3>
              <p>
                <p className="judu-welesson">
                  Verbal <br />
                </p>
                <p className="jud-welesson">
                  Menguji kemampuanmu dalam hal bahasa seperti pengetahuan
                  seputar antonim, sinonim, dan lain sebagainya.
                </p>
                <p className="judu-welesson">Penalaran Matematis</p>
                <p className="jud-welesson">
                  Di sini kamu akan bertemu dengan artimetika, pola baris,
                  geometri, dan lain-lain.
                </p>
                <p className="judu-welesson">Logika</p>
                <p className="jud-welesson">
                  Logika kamu akan ditantang untuk memecahkan soal seperti
                  logika analitik dan logika kuantor.
                </p>
                <p className="judu-welesson">Pola Gambar</p>
                <p className="jud-welesson">
                  Kamu akan berhadapan dengan gambar dengan berbagai pola yang
                  harus kamu selesaikan.
                </p>
              </p>
              <label for="submit-welesson"></label>
              <Link to="/home/wsat/weexam/tps">
                <div className="button-welesson">
                <input
                  id="submit-welesson"
                  type="submit"
                  name="submit"
                  value="MULAI BELAJAR"
                />
              </div>
            </Link>
            </div>
          </div>
        </section>

        <section className="section-welesson" id="pk-welesson">
          <div className="container-welesson">
            <div className="bar-welesson">
              <div className="judul-pk-welesson">
                <h3 className="h3-welesson">Pengetahuan Kuantitatif</h3>
                <p className="jud-welesson">
                  Pengetahuan kuantitatif ini mencakup soal barisan bilangan,
                  geometri, artimetika, hingga aljabar.
                </p>
                <label for="submit-welesson"></label>
              <Link to="/home/wsat/weexam/tps">
                <div className="button-welesson">
                <input
                  id="submit-welesson"
                  type="submit"
                  name="submit"
                  value="MULAI BELAJAR"
                />
              </div>
            </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-welesson" id="mbm-welesson">
          <div className="container-welesson">
            <div className="bar-welesson">
              <div className="judul-mbm-welesson">
                <h3 className="h3-welesson">Memahami Bacaan dan Menulis</h3>
                <p className="jud-welesson">
                  Menguji kemampuan bahasa kamu. Materi ini akan fokus pada
                  “teknik” dalam bahasa Indonesia. Lewat materi ini, kamu
                  dituntut memahami isi bacaan dari suatu teks, serta mampu
                  memahami kaidah penulisan bahasa Indonesia yang baik dan
                  benar.
                </p>
                <label className="labell-welesson" for="submit"></label>
              <div className="button-welesson">
              <Link to="/home/wsat/weexam/tps">
                <div className="button-welesson">
                <input
                  id="submit-welesson"
                  type="submit"
                  name="submit"
                  value="MULAI BELAJAR"
                />
              </div>
            </Link>
            </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="section-welesson" id="tpa-welesson">
        <div className="judul-tpa-welesson">
          <hr color="#FFFFFF" />
          <br />
          <h2 className="namatpstka-welesson">Tes Potensi Akademik</h2>
          <br />
          <hr color="#FFFFFF" />
        </div>
      </section>

      <section className="section-welesson" id="ve-welesson">
        <div className="container-welesson">
          <div className="bar-welesson">
            <div className="judul-ve-welesson">
              <h3 className="h3-welesson">Verbal</h3>
              <p className="jud-welesson">
                Tes verbal berfungsi untuk mengukur kecerdasan seseorang dalam
                kata-kata dan bahasa.Beberapa bentuk soal tes verbal antara lain
                sinonim (persamaan kata), antonim (lawan kata), padanan hubungan
                kata, dan pengelompokan kata.
              </p>
              <label className="labell-welesson" for="submit"></label>
              <div className="button-welesson">
              <Link to="/home/wsat/weexam/tpa">
                <div className="button-welesson">
                <input
                  id="submit-welesson"
                  type="submit"
                  name="submit"
                  value="MULAI BELAJAR"
                />
              </div>
            </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="section-welesson" id="ag-welesson">
        <div className="container-welesson">
          <div className="bar-welesson">
            <div className="judul-ag-welesson">
              <h3 className="h3-welesson">Angka</h3>
              <p className="jud-welesson">
                Jenis psikotes kerja yang satu ini berfungsi untuk mengukur
                kecerdasan seseorang dalam bidang angka. Tes ini akan mengukur
                seberapa kamu berpikir terstruktur dan logis matematis. Beberapa
                bentuk soal tes angka antara lain aritmetik (hitungan), seri
                angka, seri huruf, logika angka, dan angka dalam cerita.
              </p>
              <label className="labell-welesson" for="submit"></label>
              <div className="button-welesson">
              <Link to="/home/wsat/weexam/tpa">
                <div className="button-welesson">
                <input
                  id="submit-welesson"
                  type="submit"
                  name="submit"
                  value="MULAI BELAJAR"
                />
              </div>
            </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-welesson" id="lo-welesson">
        <div className="container-welesson">
          <div className="bar-welesson">
            <div className="judul-lo-welesson">
              <h3 className="h3-welesson">Logika</h3>
              <p className="jud-welesson">
                Tes logika berfungsi untuk mengukur kemampuan seseorang dalam
                penalaran dan pemecahan masalah secara logis atau masuk akal.
                Biasanya, banyak orang terkecoh pada jenis soal yang satu ini.
                Beberapa bentuk soal tes logika antara lain logika umum,
                analisis pernyataan dan kesimpulan (silogisme), logika cerita),
                dan logika diagram.
              </p>
              <label className="labell-welesson" for="submit"></label>
              <div className="button-welesson">
              <Link to="/home/wsat/weexam/tpa">
                <div className="button-welesson">
                <input
                  id="submit-welesson"
                  type="submit"
                  name="submit"
                  value="MULAI BELAJAR"
                />
              </div>
            </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-welesson" id="sp-welesson">
        <div className="container-welesson">
          <div className="bar-welesson">
            <div className="judul-sp-welesson">
              <h3 className="h3-welesson">Spasial</h3>
              <p className="jud-welesson">
                Tes ini berfungsi untuk mengukur daya logika ruang seseorang.
                Beberapa bentuk soal tes spasial atau gambar antara lain padanan
                hubungan gambar, seri gambar, pengelompokkan gambar, bayangan
                gambar, dan identifikasi gambar.
              </p>
              <label className="labell-welesson" for="submit"></label>
              <div className="button-welesson">
              <Link to="/home/wsat/weexam/tpa">
                <div className="button-welesson">
                <input
                  id="submit-welesson"
                  type="submit"
                  name="submit"
                  value="MULAI BELAJAR"
                />
              </div>
            </Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}