import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import BtnSlider from '../detail-pages-again-4/BtnSlider'
import dataSlider from '../detail-pages-again-4/dataSlider'
import "../css/style-materi-detail.css";

import cw from "../img/cw.jpeg"

export default function MateriPageBindo() {

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
      <div className="MateriPageBindo">
           <input type="checkbox" id="check-materi"/>
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
                  <h4>Siswa</h4>
            </center>
                  <ul>
                        <li className="text-decoration-materi"><a href="beranda-materi-bindo.html"><i className="fas fa-desktop"></i><span>Beranda Materi</span></a></li>
                        <li className="active-2-materi text-decoration-materi">
                        <Link to="/home/wemateri/materismp/mapelkelas7/materibindo7/materipagebindo">
                            <a href="materi-pembelajaran-indo.html"><i className="fas fa-book"></i><span>Materi</span></a>
                        </Link>
                        </li>
                        <li className="text-decoration-materi">
                        <Link to="/home/wemateri/materismp/mapelkelas7/materibindo7/videomateribindo">
                        <a href="video-materi.html"><i className="fas fa-video"></i><span>Video Materi</span></a>
                        </Link>
                        </li>
                        <li className="text-decoration-materi">
                        <Link to="/home/wemateri/materismp/mapelkelas7/materibindo7/rangkumanbindo">
                              <a href="rangkuman-materi-bindo.html"><i className="fas fa-file-word"></i><span>Rangkuman Materi</span></a>
                        </Link>
                        </li>
                        <li className="text-decoration-materi">
                        <Link to="/home/wemateri/materismp/mapelkelas7/materibindo7/quizbindo">
                            <a href="quiz1.html"><i className="fas fa-comment-dots"></i><span>Quiz Cepat</span></a>
                        </Link>
                        </li>
                  </ul>
    </div>

    <div className="content-materipage">
        <div className="slider-materi-indo">
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.png`} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
        </div>
      </div>
</div>
  )
}