import React from 'react'

const LeftMenu = () => {
  return (
    <div className='side-bar bg-light rounded border-0 w-75 mt-5 mb-0'>
            <h3 className='lead text-center bg-red py-4 m-0 min-w-75'>Uygulamalar</h3>
        
            <ul className="nav flex-column text-center rounded m-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/epilasyon">Lazer Epilasyon</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ciltbakim">Cilt Bakımı</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/zayiflama">Zayıflama</a>
              </li>
            </ul>
    </div>
  )
}

export default LeftMenu
