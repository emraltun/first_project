import React from 'react'
import adress from '../images/adres.png'

const Iletisim = () => {
  return (
    <>
    <div className='container-fluid py-5 text-light text-center dark-bg img-fluid vh30'>
      
                <div className='d-flex flex-column  justify-content-center h-100'>
                  <h1 className='display-5 '> İLETİŞİM</h1>
                </div>
    </div>

    <div className='container-fluid p-0'>
      
        <div className='row' id='iletisim'>
            <div className='container-fluid d-flex flex-column align-items-center justify-content-center'>

                  <div className='container-fluid d-flex flex-column bg-aboutus justify-content-center align-items-center py-3'>
                    <h3 className='text-white fs-3 lead md1rem'>TELEFON</h3>
                    <span ><i class="bi bi-telephone-fill text-white fs-3 md1rem" >    555 555 55555</i></span>
                  </div>

                  <div className='container-fluid d-flex flex-column justify-content-center align-items-center py-3'>
                    <h3 className='text-danger lead fs-3 md1rem'>E-MAİL</h3>
                    <span className='text-danger md1rem'><i class="bi bi-envelope-at-fill  text-danger lead" ></i>   qqqqq@gmail.com</span>
                  </div>

                  <div className='container-fluid d-flex flex-column bg-aboutus justify-content-center align-items-center py-3'>
                    <h3 className='text-white lead fs-3 md1rem'>ADRES BİLGİLERİ</h3>
                    <span className='text-white fs-3 lead md1rem'><i class="bi bi-geo-alt-fill text-white fs-3" ></i>adressssssssssssssssssssssssssssssssssssssssssssssssssssssssss</span>
                  </div>
                  <div className='py-5'>
                  <h3 className='text-danger text-center lead fs-3 pb-5 md1rem'>KONUM</h3>
                    <a href='https://www.google.com.tr/maps/place/Denizli,+Kumkısık,+Denizli/@37.7855197,29.0061351,18z/data=!4m5!3m4!1s0x14c73fb1353a6a69:0x2e3363fee62068ae!8m2!3d37.7830618!4d29.0962601?hl=tr'>
                      <img className='img-fluid' src={adress} alt =""></img>
                    </a>
                  </div>

            </div>
        </div>
        
    </div>
    
    </>
  )
}

export default Iletisim
