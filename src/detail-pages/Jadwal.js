import React from 'react'
import "../css/style-mapel.css";

function Jadwal() {
  return (
    <div className="Jadwal">
      <section className="luar-jadwal">
            <section className="dalam-jadwal">
            <section className="about-jadwal">
                  <h2>Jadwal Ujian</h2><br/>
                  <div className="sejajar-jadwal">
                  <h3>Senin,10 Agustus 2021</h3>
                  <h3>WAKTU</h3>
                  </div>
            
                  <div className="row-jadwal">
                  <div className="jadwal-col">
                        <p className="p1-jadwal">Bahasa Indonesia</p>
                        <p className="p1-jadwal">Bahasa Inggris</p>
                  </div>

                  <div className="waktu-col-jadwal">
                        <p className="p2-jadwal">07.00-10.00</p>
                        <p className="p2-jadwal">10.00-13.00</p>
                  </div>
                  </div>

                  <div className="sejajar-jadwal">
                  <h3>Selasa,11 Agustus 2021</h3>
                  <h3>WAKTU</h3>
                  </div>

                  <div className="row-jadwal">
                  <div className="jadwal-col">
                        <p className="p1-jadwal">Pendidikan Agama</p>
                        <p className="p1-jadwal">Sejarah</p>
                  </div>
      
                  <div className="waktu-col-jadwal">
                        <p className="p2-jadwal">07.00-10.00</p>
                        <p className="p2-jadwal">10.00-13.00</p>
                  </div>
                  </div>

            </section>  
            </section>
      </section>
</div>

  )
}

export default Jadwal