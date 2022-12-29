import React from 'react'
import LeftMenu from '../components/LeftMenu'
import cilt2 from '../images/cilt2.jpg'

const CiltBakim = () => {
  return (
    <>
    <div className='container-fluid my-4'> 
        <div className='row'>
          <div className='col-3 p-0 '>
            <LeftMenu></LeftMenu>
          </div>
          <div className='col-9'>
            <div className='container text-center'>
              <h3 className='display-3 text-danger'>CİLT BAKIMI</h3>
              <p className='lead md1rem'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <img className='img-fluid' src={cilt2} alt=''></img>
            </div>
            
          </div>
        </div>
    
    </div>
    </>
  )
}

export default CiltBakim
