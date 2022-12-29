import React from 'react'
import logo from '../images/logo.png'


const Contact = () => {
  return (
    

        <section id='contact' className='dark-bg h-25 py-5'>
              <div className='container py-2'>
                  <div className='row'>
                        <div className='col-lg-4 text-center'>
                          <h5 className='fs-3 text-danger'>İLETİŞİM</h5>
                          <div className='d-flex justify-content-center m-3'>
                              <span className="text-light"><i className="bi bi-geo-alt-fill text-danger" ></i> Addresssssssssssssssssss</span>
                          </div>
                          <div className='d-flex justify-content-center m-3'>
                              <span className="text-light"><i className="bi bi-telephone-fill text-danger" ></i> 555-555-5555</span>
                          </div>
                          <div className='d-flex justify-content-center m-3'>
                              <span className="text-light"><i className="bi bi-envelope-at-fill text-danger" ></i> email@email.com</span>
                          </div>
                          <div className='d-flex flex-wrap justify-content-center'>
                                <span className="text-light fs-2 px-4"><a className='text-info' href="https://www.facebook.com" target='_blank' rel='noreferrer'><i className="bi bi-facebook"></i></a></span>
                                <span className="text-light fs-2 px-4"><a className="text-instagram" href="https://www.instagram.com"  target='_blank' rel='noreferrer'><i className="bi bi-instagram"></i></a></span>
                                <span className="text-light fs-2 px-4"><a className="text-success" href="https://www.whatsapp.com"  target='_blank' rel='noreferrer'><i className="bi bi-whatsapp"></i></a></span>                                                      
                          </div>
                      </div>
 
                      <div className='col-lg-4 text-center mt-3'>
                        <div className='container-fluid h-100'>
                            <img className='img-fluid contact-logo h-100' src={logo} alt='' />
                        </div>
                      </div>

                      <div className='col-lg-4 text-center mt-3'>
                        <h5 className='fs-3 text-danger'>MENÜ</h5>
                        <ul className="nav flex-column text-center rounded m-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Anasayfa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">Hakkımızda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/galeri">Galeri</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/randevu">Randevu İşlemleri</a>
                            </li>
                        </ul>
                      </div>

                   </div>
              </div>
        </section>

        
        
    
)
}

export default Contact
