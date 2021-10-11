import React from 'react'
import {Link} from 'react-router-dom'
import "../css/style-wexam.css";

function WeExam() {
  return (
    <div className="WeExam">
    <section class="wexam1" id="wexam1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a8d5e5"
          fill-opacity="0.7"
          d="M0,224L80,186.7C160,149,320,75,480,74.7C640,75,800,149,960,176C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div class="judul-wexam">
        <strong><span>Wexam</span></strong>
        <h1>Uji kemampuanmu dengan WeXam</h1>
        <h2>Coba Kerjakan Pelatihan yang Tersedia !</h2>
      </div>
      <div class="wexam-container">
        <div class="box-wxam">
          <i class="bx bxs-book-reader"></i>
          <h2>TryOut</h2>
          <p>
            Tryout online adalah solusi yang mau belajar terus
            menerus. Persiapan ujian harus maksimal, jangan sampai ada pelajaran
            yang terlewat, yang belum dimengerti. Try out sebagai uji coba .
          </p>
          
          <div class="tombol-wxam">
          <Link to="/home/wsat/weexam/tpa">
            <a href="tka.html" class="button-aktif-wxam hijau-wxam"
              >TPA</a>
          </Link>
          
          <Link to="/home/wsat/weexam/tps">
          <a href="tps.html" class="button-aktif-wxam hijau-wxam"
              >TPS</a>
          </Link>
          </div>
        </div>

        <div class="box-wxam">
          <i class="bx bx-library"></i>
          <h2>Tes Kemampuan Bahasa Inggris</h2>
          <p>
            Tes kemampuan Bahasa Inggris merupakan tes yang digunakan untuk mengukur tngkat
            bahasa inggris seseorang. Tes ini diadakan atau dilaksanakan dengan
            tujuan untuk menentukan tingkat kemampuan seseorang .
          </p>
          <div class="tombol-wxam">
            <a href="https://www.efset.org/quick-check" class="button-aktif-wxam hijau-wxam">Mulai Kerjakan !</a>
          </div>
        </div>

        <div class="box-wxam">
          <i class="bx bxs-pencil"></i>
          <h2>Tes Personality</h2>
          <p>
            Memiliki tujuan untuk melihat apakah minat, karakter dan potensi
            anak paling sesuai di bagian apa (jurusan sekolah, kegiatan tambahan
            di luar sekolah, jurusan kuliah bahkan jenis pekerjaan).
          </p>
          <div class="tombol-wxam">
            <a href="https://www.16personalities.com/id/tes-kepribadian" class="button-aktif-wxam hijau-wxam">Mulai Kerjakan !</a>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a8d5e5"
          fill-opacity="0.7"
          d="M0,32L80,74.7C160,117,320,203,480,208C640,213,800,139,960,122.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </section>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
</div>

  )
}

export default WeExam