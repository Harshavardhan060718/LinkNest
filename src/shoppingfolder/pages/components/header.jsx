import React from 'react'



const Header = () => {
  return (
    <div className='headersection'>
        
            <div className="left">
                <div className="tittle">
                    <img src='https://pbs.twimg.com/profile_images/1930308561449693192/SsCzWLNb_400x400.jpg' alt='LinkNest Logo'/>

                   
                </div>
            </div>
            {/* <div className="center">
                <ul>
                    <li>Men</li>
                    <li>Woman</li>
                    <li>Childrens</li>
                    <li>Beauty</li>
                    
                    
                </ul>
            </div> */}
            <div className="search">
                <input type='text' placeholder='Search...'/>
            </div>
            <div className="right">
                <div className="signin">Signin/signup</div>
                <div className="cart">
                    <a>About</a>
                </div>
            </div>
        
      
    </div>
  )
}

export default Header
