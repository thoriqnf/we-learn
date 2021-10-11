import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-wfresh.css";

import logowfresh from "../img/logo-wfresh.jpeg"
import gbwfresh from "../img/game2.jpg"
import gbwfresh2 from "../img/game.jpg"
import web1 from "../img/webinar1.jpeg"
import web2 from "../img/webinar9.jpg"
import web3 from "../img/webinar10.jpg"
import web4 from "../img/webinar3.jpg"
import web5 from "../img/webinar12.jpg"
import web6 from "../img/webinar8.jpg"
import web7 from "../img/webinar7.jpg"
import web8 from "../img/webinar11.jpg"
import maudy from "../video/maudy.mp3"
import maudy2 from "../video/maudy.mp3"
import maudy3 from "../video/maudy.mp3"
import videomaudy from "../video/maudyvid.mp4"
import videojerome from "../video/jerome.mp4"



function WFresh() {
  return (
    <div className="WFresh">
      <div id="header-wfresh">
                    <img className="logo-wfresh" src={logowfresh} alt="Welearn"/>
      </div>
      <div className="bg-wfresh">
            <div className="bg-wfresh2">
      <div className="ini-wfresh">
        <div id = "kiri-wfresh">
            <h2 className="h2-kiri-wfresh">Podcast</h2>
                  <div id="all-col-wfresh">
                        <p className="p-wfresh"><strong>Podcast 1</strong></p> 
                        <div id="col-wfresh">
                              <audio className="audio-wfresh" controls>
                                    <source src={maudy} type="audio/mpeg"/>
                              </audio>
                        </div>

                        <p className="p-wfresh"><strong>Podcast 2</strong></p> 
                        <div id="col-wfresh" >
                              <audio className="audio-wfresh" controls>
                                    <source src={maudy2} type="audio/mpeg"/>
                              </audio>
                        </div>
                
                        <p className="p-wfresh"><strong>Podcast 3</strong></p> 
                        <div id="col-wfresh" >
                              <audio className="audio-wfresh" controls>
                                    <source src={maudy3} type="audio/mpeg"/>
                              </audio>
                        </div>
                        
                        <p className="p-wfresh"><strong>Podcast 4</strong></p> 
                        <div id="col-wfresh" >
                              <audio className="audio-wfresh" controls>
                                    <source src={maudy3} type="audio/mpeg"/>
                              </audio>
                        </div>
       
                    </div>
                  </div>

                  <div id = "kanan-wfresh">
                        <h2 id="video-wfresh">Video</h2>
                              <div id="all2-col-wfresh">
                                    <div id="col1-wfresh">
                                          <video className="video-wfresh1" controls>
                                                <source src={videomaudy} type="video/mp4"/>
                                          </video>

                                          <h3 className="h3-wfresh">Work Hard WiLL Never Betray You</h3>
                                          <hr/>
                                          <br/>
                                          <br/>
                                          <br/>
                                          
                                          <video className="video-wfresh1" controls>
                                                <source src={videojerome} type="video/mp4"/>
                                          </video>
                                          <br/>
                                          <h3 className="h3-wfresh">Work Hard WiLL Never Betray You</h3>
                                          <hr/>
                                    </div>
                              </div>
                   </div>
                    <br/>
                  
      </div>
    </div>
   </div>
              

      <div className="semuaaa-wfresh">
            <div className="webinar-wfresh">
            <div className="nya-wfresh">
                  <div className="card-wfresh">
                        <h3 className="card-text-wfresh-3">Webinar</h3>
                        <a href=""><img className="webinar1" src={web1} alt="Welearn"/></a> 
                        <h1 className="card-text-wfresh">Pentingnya Informasi Benar Di Masa Pandemi</h1> <br/>
                        <h2 className="card-text-wfresh-2">Jumat <br/> 18 September 2020 <br/> 13.30 WIB - Selesai</h2> 
                        <div className="btn-wfresh">
                              <button type="button" id="submit-wfresh"><a href="https://forms.gle/2PGWgGoX7as45K226"><strong>Daftar Sekarang</strong></a></button>
                        </div>     
                  </div>
            </div>

            <div className="nya-wfresh">
                  <div className="card-wfresh">
                        <h3 className="card-text-wfresh-3">Webinar</h3>
                        <a href=""><img className="webinar2" src={web2} alt="Welearn"/></a>     
                        <h1 className="card-text-wfresh">Dunia Kerja Ready Or Not ?</h1> <br/>
                        <h2 className="card-text-wfresh-2">Senin <br/> 4 Mei 2020 <br/> 14.00 - 14.45 WIB</h2>  
                        <div className="btn-wfresh">
                              <button type="button" id="submit-wfresh"><a href="https://forms.gle/2PGWgGoX7as45K226"><strong>Daftar Sekarang</strong></a></button>
                        </div>   
                  </div>
            </div>

            <div className="nya-wfresh">
                  <div className="card-wfresh">
                        <h3 className="card-text-wfresh-3">Webinar</h3>
                        <a href=""><img className="webinar3" src={web3} alt="Welearn"/></a> 
                        <h1 className="card-text-wfresh">The Future Of UI / UX Designer</h1> <br/>
                        <h2 className="card-text-wfresh-2">Selasa <br/> 15 Juli 2021 <br/>13.00 - 15.00 WIB</h2> 
                        <div className="btn-wfresh">
                              <button type="button" id="submit-wfresh"><a href="https://forms.gle/2PGWgGoX7as45K226"><strong>Daftar Sekarang</strong></a></button>
                        </div>         
                  </div>
            </div>

            <div className="nya-wfresh">
                  <div className="card-wfresh">
                        <h3 className="card-text-wfresh-3">Webinar</h3>
                        <a href=""><img className="webinar4" src={web4} alt="Welearn"/></a>  
                        <h1 className="card-text-wfresh">Peran Industri Kreatif Mendukung Pariwisata Indonesia</h1> 
                        <h2 className="card-text-wfresh-2">Sabtu <br/> 13 Maret 2021 <br/>19.30 - 21.00 WIB</h2> 
                        <div className="btn-wfresh">
                              <button type="button" id="submit-wfresh"><a href="https://forms.gle/2PGWgGoX7as45K226"><strong>Daftar Sekarang</strong></a></button>
                        </div>         
                  </div>
            </div>
      </div>


      <div className="webinar-wfresh">
            <div className="nya-wfresh">
                  <div className="card-wfresh">
                        <h3 className="card-text-wfresh-3">Webinar</h3>
                        <a href=""><img className="webinar5" src={web5} alt="Welearn"/></a>
                        <h1 className="card-text-wfresh">Introduction to UX Design</h1> <br/><br/>
                        <h2 className="card-text-wfresh-2">Sabtu <br/> 13 Juni 2020 <br/>13.30 - 15.30 WIB</h2>  
                        <div className="btn-wfresh">
                              <button type="button" id="submit-wfresh"><a href="https://forms.gle/2PGWgGoX7as45K226"><strong>Daftar Sekarang</strong></a></button>
                        </div>           
                  </div>
            </div>

            <div className="nya-wfresh">
                        <div className="card-wfresh">
                              <h3 className="card-text-wfresh-3">Webinar</h3>
                              <a href=""><img className="webinar6" src={web6} alt="Welearn"/></a>
                              <h1 className="card-text-wfresh">3 Step Membangun UKM Anti Mandek</h1> <br/>
                              <h2 className="card-text-wfresh-2">Minggu <br/> 28 Mei 2020 <br/>10.00 - 11.30 WIB</h2> 
                              <div className="btn-wfresh">
                                    <button type="button" id="submit-wfresh"><a href="https://forms.gle/2PGWgGoX7as45K226"><strong>Daftar Sekarang</strong></a></button>
                              </div>          
                        </div>
                  </div>

                  <div className="nya-wfresh">
                        <div className="card-wfresh">
                              <h3 className="card-text-wfresh-3">Webinar</h3>
                              <a href=""><img className="webinar7" src={web7} alt="Welearn"/></a>
                              <h1 className="card-text-wfresh">Python Programming Language for Beginners</h1> <br/>
                              <h2 className="card-text-wfresh-2">Senin <br/> 19 April 2021 <br/>19.00 WIB - Selesai </h2>  
                              <div className="btn-wfresh">
                                    <button type="button" id="submit-wfresh"><a href="https://forms.gle/2PGWgGoX7as45K226"><strong>Daftar Sekarang</strong></a></button>
                              </div>    
                        </div>
                        </div>

                  <div className="nya-wfresh">
                        <div className="card-wfresh">
                              <h3 className="card-text-wfresh-3">Webinar</h3>
                              <a href=""><img className="webinar8" src={web8} alt="Welearn"/></a><br/>  
                              <h1 className="card-text-wfresh">Local Content for Furniture and Accessories in Hospitaly Design</h1> 
                              <h2 className="card-text-wfresh-2">Selasa <br/> 24 Oktober 2020 <br/>13.00 - 15.30 WIB</h2> 
                              <div className="btn-wfresh">
                                    <button type="button" id="submit-wfresh"><a href="https://forms.gle/2PGWgGoX7as45K226"><strong>Daftar Sekarang</strong></a></button>
                              </div>                   
                        </div>
                  </div>
            </div>
              </div>
              <div className="game-wfresh">
                    <img className="gbwfresh" src={gbwfresh} alt="Welearn" />
                    <h1 className="h1-text-wfresh">W-Fresh juga menyediakan mini game loh . . .</h1>
                    <Link to="/home/wfresh/game">
                    <div className="btn-wfresh2">
                        <button type="button" id="submit-wfresh2"><a href=""><strong>Yuk Coba Sekarang !</strong></a></button>
                    </div> 
                    </Link>
              </div>

              <div className="game-wfresh2">
                    <img className="gbwfresh2" src={gbwfresh2} alt="Welearn" />
                    <h1 className="h1-text-wfresh2">W-Fresh juga menyediakan mini game loh . . .</h1>
                    <Link to="/home/wfresh/game-card">
                    <div className="btn-wfresh3">
                        <button type="button" id="submit-wfresh3"><a href=""><strong>Yuk Coba Sekarang !</strong></a></button>
                    </div> 
                    </Link>
              </div>


</div>

  )
}

export default WFresh