import React from 'react'
import company from '../images/company.png'
import company2 from '../images/company2.jpg'

const About = () => {
  return (
    <section className="generic" id="about">
        <div className="container">
            <h2 className="display-5 text-danger mb-5">Biz Kimiz ?</h2>
            <div className="row mb-4">
                <div className="col-sm-12 col-lg-8 bg-light">
                    <div className="d-flex h-100 flex-column justify-content-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aliquam officiis! Enim error odio beatae dignissimos molestiae sit excepturi optio quae inventore sunt? Fugit, sint!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aliquam officiis! Enim error odio beatae dignissimos molestiae sit excepturi optio quae inventore sunt? Fugit, sint!</p>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4 p-0">
                        <img className="img-fluid" src={company} alt=".."/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-lg-8 bg-light">
                    <div className="d-flex h-100 flex-column justify-content-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aliquam officiis! Enim error odio beatae dignissimos molestiae sit excepturi optio quae inventore sunt? Fugit, sint!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aliquam officiis! Enim error odio beatae dignissimos molestiae sit excepturi optio quae inventore sunt? Fugit, sint!</p>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-4 p-0 order-first">
                    <img className="img-fluid" src={company2} alt=".."/>                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
