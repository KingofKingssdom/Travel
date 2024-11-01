import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import './common.css'
function Header(){
  const [activeItem, setActiveItem] = useState('hotel')
    return(
    <div>
  <header className='fixed-top'>
    <div className='direction'>
         <div className='logo'>
          <img src='/image/logo.png' alt='logo'/>
        </div> 
         <div className='directionChild'>
          <Link  to="/"  className={activeItem === 'hotel' ? 'active' : ''}
            onClick={() => setActiveItem('hotel')}
          >Khách sạn</Link>
        </div>
        <div className='directionChild'>
          <Link  to="/tourPage"  className={activeItem === 'tours' ? 'active' : ''}
          onClick={() => setActiveItem('tours')}
          >Tours</Link>
        </div>
        <div className='directionChild'>
          <Link to="/airLinePage"  className={activeItem === 'plane' ? 'active' : ''} 
            onClick={() => setActiveItem('plane')}
          >Vé máy bay</Link>
        </div>
    </div>
  </header>
      
</div>
    )
}
export default Header;