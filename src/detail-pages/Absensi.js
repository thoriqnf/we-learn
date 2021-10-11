import React from 'react'
import "../css/style-absensi.css";

import student from "../img/student.png"

function Absensi() {
  return (
    <div className="Absensi">
    <div className="background-absensi">
        <div id="absensi">
            <h1>ABSENSI</h1>
        </div>
    </div>

    <div id="absensiii">
            <div id="foto-absensi"> 
                <center><img className="gb-absensi" src={student} alt="Welearn"/></center>
                <center><p className="p-absensi">Siswa</p></center>
            </div>
        </div>

        <div className="absensi-form">
            <div id="absen">
                <div id="card-content-absensi">
                    <div id="card-title-absensi">
                        <h5 className="absensi">Jangan Lupa Absensi</h5>
                            <br/><div className="underline-title-absensi"></div>
                    </div>
                </div>

        <form act method="POST" className="form-absensi">

            <label className="label-absensi" for="name">&nbsp;<h1 className="h1-absensi">Nama Siswa / Siswi : </h1></label>
                <input id="name-absensi" className="form-content-absensi" autocomplete="on" required />
                    <div className="form-border-absensi"></div>
                            
            <label className="label-absensi" for="kelas">&nbsp;<h1 className="h1-absensi2">Kelas Siswa :</h1></label>
                <select className="select-absensi">
                    <option value="Pilih Jurusan" selected="selected">Pilih Kelas :</option>
                    <option value="X">X</option>
                    <option value="XI">XI</option>
                    <option value="XII">XII</option>
                </select>
                            
            <label className="label-absensi" for="jurusan">&nbsp;<h1 className="h1-absensi3">Program Keahlian : </h1></label>
                <select className="select-absensi">
                    <option value="Program Keahlian" selected="selected">Program Keahlian</option>
                    <option value="Teknik Bisnis Konstruksi dan Properti">Teknik Bisnis Konstruksi dan Properti</option>
                    <option value="Teknik Desain Pemodelan dan Informasi Bangunan">Teknik Desain Pemodelan dan Informasi Bangunan</option>
                    <option value="Teknik Geomatika">Teknik Geomatika</option>
                    <option value="Teknik Instalasi Tenaga Listrik">Teknik Instalasi Tenaga Listrik</option>
                    <option value="Teknik Audio Video">Teknik Audio Video</option>
                    <option value="Teknik Pemesinan">Teknik Pemesinan</option>
                    <option value="Teknik Fabrikasi dan Manufaktur">Teknik Fabrikasi dan Manufaktur</option>
                    <option value="Teknik Kendaraan Ringan Otomotif">Teknik Kendaraan Ringan Otomotif</option>
                    <option value="Teknik Komputer dan Jaringan">Teknik Komputer dan Jaringan</option>
                    <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
                </select>
                            

            <label className="label-absensi" for="ket">&nbsp;<h1 className="h1-absensi4">Keterangan Siswa : </h1></label>
                <input id="ket" className="form-content-absensi" autocomplete="on" required />
                    <div className="form-border-absensi"></div>
                        <label className="label-absensi"><h1 className="h1-absensi5">Jenis Kelamin : </h1></label>
                        <label className="label-absensi"><input className="input-absensi" type="radio" name="jenis_kelamin" value="laki-laki"/>Laki-Laki</label>
                        <label className="label-absensi"><input className="input-absensi"type="radio" name="jenis_kelamin" value="perempuan"/>Perempuan</label>
                        <div className="button-submit-absensi">
                            <button type="submit" className="submit-absensi"><a href="beranda.html">SUBMIT</a></button>
                        </div>
        </form>
    </div>
</div>
</div>

  )
}

export default Absensi