import React  from 'react';
import { Link} from 'react-router-dom'


const Layout = () => {
  return (
    <div>
        <div className='middleMeThis'>
      <Link className='btn btn-outline-success' to={'game'}>Start</Link>      
      </div>
    </div>
  )
}

export default Layout