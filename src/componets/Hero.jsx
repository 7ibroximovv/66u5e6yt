import  './hero.css'
import Logo from '../assets/Logo.png'

function Hero() {
  return (
 <div className="ota">
    <img src={Logo.png} alt="logol" />
          <nav>
            <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Sign Up</a></li>
            </ul>
          </nav>
          <div className="box">
              <img src="{kard.png}" alt="kard" />
              <button className='btn'>Add To Cart</button>
              <h3>Gucci duffle bag</h3>
              <h4>$960</h4>
          </div>
 </div>
      
  )
}

export default Hero