import '../style/Main.scoped.scss'
import photoMe from '../assets/photoMe.png'


function Header() {
    return (
      <>
        <div className="Header">
              <div className="headerCircle">
                  <div className='headerDesc'>
                    <h1>Hello.</h1>
                    <div className="nameDesc">
                      <p className='name'>Florian PALVADEAU.</p>
                      <span></span>
                      <p className='desc'>A creative front-end developer.</p>
                    </div>
                  </div>
                  <img src={photoMe} alt ="profile picture"/>
                  <div className="navBar">
                    <div className="element">
                      <a href="">About Me</a>
                      <span></span>
                    </div>
                    <div className="element">
                      <a href="">My Studies</a>
                      <span></span>
                    </div>
                    <div className="element">
                      <a href="">My Skills</a>
                      <span></span>
                    </div>
                  </div>
              </div>
        </div>
      </>
    );
  }
  
  export default Header;