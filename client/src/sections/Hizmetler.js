import React from 'react'
import lazerEpilasyon from '../images/lazerep.png'
import ciltBakimi from '../images/ciltbakimi.jpg'
import zayiflama from '../images/zayiflama.jpg'

const Hizmetler = () => {
  return (
    <section className="" id="hizmet">
        <div className='container-fluid'>
            <h2 className='display-5 text-danger px-5 mx-5 mb-3'>HİZMETLER</h2>
            <div className="container-fluid">
                <div className="row">

                        <div className="col-lg-3 col-sm-6 p-0">
                                <div className='hizmet-item'> 
                                    <div className="d-grid bg-maroon py-5">
                                        <button type="button" className="btn btn-danger bg-maroon  border-0 rounded-0 py-5" data-bs-toggle="modal" data-bs-target="#modal1">
                                            <span className='lead'>LAZER EPİLASYON</span>
                                                <div className="overlay d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-chevron-down" ></i>
                                                </div>
                                        </button>
                                    </div>
                                </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 p-0">
                                <div className='hizmet-item'> 
                                    <div className="d-grid bg-red py-5">
                                        <button type="button" className="btn btn-danger bg-red  border-0 rounded-0 py-5" data-bs-toggle="modal" data-bs-target="#modal2">
                                            <span className='lead'>CİLT BAKIMI</span>
                                                <div className="overlay d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-chevron-down" ></i>
                                                </div>
                                        </button>
                                    </div>
                                </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 p-0">
                                <div className='hizmet-item'> 
                                    <div className="d-grid bg-maroon py-5">
                                        <button type="button" className="btn btn-danger bg-maroon  border-0 rounded-0 py-5" data-bs-toggle="modal" data-bs-target="#modal3">
                                            <span className='lead'>ZAYIFLAMA</span>
                                                <div className="overlay d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-chevron-down" ></i>
                                                </div>
                                        </button>
                                    </div>
                                </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 p-0">
                                <div className='hizmet-item'> 
                                    <div className="d-grid bg-red py-5">
                                        <button type="button" className="btn btn-danger bg-red  border-0 rounded-0 py-5" data-bs-toggle="modal" data-bs-target="#modal4">
                                            <span className='lead'>HİZMET-4</span>
                                                <div className="overlay d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-chevron-down" ></i>
                                                </div>
                                        </button>
                                    </div>
                                </div>
                        </div>
                
                </div>
            </div>
    </div>

    <div className="modal fade" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
            <button type="button" className="btn-close p-1" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
                    <div className='container-fluid'>
                        
                            <div className='row'>
                                <div className="overlay d-flex align-items-center justify-content-center">
                                <div className='col-lg-6'>
                                    <span className="text-info lead ">Lazer epilasyon ile geleneksel yöntemlerden kurtul!</span>
                                </div>
                                <div className='col-lg-6'>
                                    <img className='img-fluid hizmetpng' alt='' src={lazerEpilasyon}></img>
                                </div>
                                </div>
                            </div>
                        
                    </div>
            </div>
        </div>
        </div>
    </div>

    <div className="modal fade" id="modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
            <button type="button" className="btn-close p-1" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
                    <div className='container-fluid'>
                        
                            <div className='row'>
                                <div className="overlay d-flex align-items-center justify-content-center">
                                <div className='col'>
                                    <span className="text-info lead ">Cilt tipine uygun uygulamalar ile sağlık ve güzel bir cilde kavuşun!</span>
                                </div>
                                <div className='col'>
                                    <img className='img-fluid hizmetpng' alt='' src={ciltBakimi}></img>
                                </div>
                                </div>
                            </div>
                        
                    </div>
            </div>
        </div>
        </div>
    </div>

    <div className="modal fade" id="modal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
            <button type="button" className="btn-close p-1" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
                    <div className='container-fluid'>
                        
                            <div className='row'>
                                <div className="overlay d-flex align-items-center justify-content-center">
                                <div className='col'>
                                    <span className="text-info lead ">Sağlıklı zayıflama uygulamaları ile hızlı ve güvenli kilo vererek formunuza kavuşun!</span>
                                </div>
                                <div className='col'>
                                    <img className='img-fluid hizmetpng' alt='' src={zayiflama}></img>
                                </div>
                                </div>
                            </div>
                        
                    </div>
            </div>
        </div>
        </div>
    </div>

    <div className="modal fade" id="modal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
            <button type="button" className="btn-close p-1" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body">
                    <div className='container-fluid'>
                        
                            <div className='row'>
                                <div className="overlay d-flex align-items-center justify-content-center">
                                <div className='col'>
                                    <span className="text-info lead ">Cilt tipine uygun uygulamalar ile sağlık ve güzel bir cilde kavuşun!</span>
                                </div>
                                <div className='col'>
                                    <img className='img-fluid hizmetpng' alt='' src={lazerEpilasyon}></img>
                                </div>
                                </div>
                            </div>
                        
                    </div>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Hizmetler
