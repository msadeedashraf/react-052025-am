import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header>
      <h1>JobZila</h1>
        <nav>
            <ul>
                <li> <Link to='/'>Home</Link>  </li>
                <li> <Link to='/Jobsearch'>Job Search</Link>  </li>
                <li> <Link to='/Joblisting'>Job Listing</Link>  </li>
                <li> <Link to='/Terms'>Terms</Link>  </li>
                <li> <Link to='/Privacy'>Privacy</Link>  </li>
                 <li> <Link to='/Contactus'>Contact</Link>  </li>
                
                
              
            </ul>
        </nav>
        </header>

    </div>
  )
}

export default Header
