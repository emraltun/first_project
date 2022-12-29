import React from "react";
import logo from '../images/logo.png'

const Navigation = () => {
  return (

    <header id="header">
    <nav className="navbar navbar-expand-md navbar-dark bg-danger py-4">
      <div className="container">
        <a className="navbar-brand" href="#!"><img src={logo} className="img-fluid header-logo" alt=""/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">ANASAYFA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">HAKKIMIZDA</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              HİZMETLERİMİZ
            </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/epilasyon">Lazer Epilasyon</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/ciltbakim">Cilt Bakımı</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/zayiflama">Zayıflama</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/galeri">GALERİ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/randevu">RANDEVU AL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/iletisim">İLETİŞİM</a>
            </li>
            </ul>
        </div>
      </div>
    </nav>
  </header>


    




  );
}

export default Navigation