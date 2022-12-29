import React from 'react'



const Randevu = () => {

  
  // const [name,setName] = useState('')
  // const [phone,setPhone] = useState('')
  // const [email,setEmail] = useState('')
  // const [message,setMessage] = useState('')



  const submitHandler = async (e) =>{
    e.preventDefault()
    
  }

  

 
  
  return (

    

    <div>
          
      <div className='container-fluid py-5 text-light text-center dark-bg vh30'>
          <div className='d-flex flex-column  justify-content-center h-100'>
                <h1 className='display-5'>RANDEVU İŞLEMLERİ</h1>
          </div>
      </div>

      
      <div className="container w-50 my-5 border border-danger rounded ">
        <p className='m-3'>Bilgi almak ve randevu talebinde bulunmak için aşağıdaki formdan iletişime geçebilirsiniz.</p>
        <form onSubmit={submitHandler} style={{ padding: "20px" }}>
          <div className="form-floating mb-3">
            <input
              type="text" 
              className="form-control"
              id="name"
              placeholder="Ad Soyad*"
              name="name"
              // onChange={(e)=>setName(e.target.value)}
             
            />
            <label for="floatingInput">Ad Soyad</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text" 
              className="form-control"
              id="phone"
              placeholder="Telefon*"
              name="phone"
              // onChange={(e)=>setPhone(e.target.value)}
            />
            <label for="floatingInput">Telefon</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email" 
              className="form-control"
              id="email"
              placeholder="E-posta*"
              name="email"
              // onChange={(e)=>setEmail(e.target.value)}
            />
            <label for="floatingInput">E-Posta</label>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Eklemek İstedikleriniz.</label>
            <textarea 
                    class="form-control" 
                    id="message" 
                    rows="10" 
                    name='message' 
                    // onChange={(e)=>setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success mt-3 w-100">Gönder</button>
        </form>
      </div>

      <div className='container  shadow border-0 rounded-0 bg-light mb-5'>

        <div className='row py-5 px-3'>
          <h5 className='text-danger fs-4'>Telefonla Randevu Almak İçin</h5>
          <div className='col d-flex flex-column p-3'>
            <span className='d-flex align-items-middle'> <i className='bi bi-telephone text-danger fs-4'></i>  <p className='fs-4 px-3'>  555-555-5555</p> </span>
            <span className='d-flex align-items-middle'> <i className='bi bi-telephone text-danger fs-4'></i>  <p className='fs-4 px-3'>  555-555-5555</p> </span>
          </div>        
        </div>
      </div>
    </div>
  )
}

export default Randevu
