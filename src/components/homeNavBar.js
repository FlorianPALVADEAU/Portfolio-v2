import '../style/Main.scoped.scss'
import React from 'react';

function homeNavBar() {

  return (
    <>
        <div className="navBar">
            <div className="element">
            <a href="#aboutMe">About Me</a>
            <span></span>
            </div>
            <div className="element">
            <a href="#studies">My Studies</a>
            <span></span>
            </div>
            <div className="element">
            <a href="#skills">My Skills</a>
            <span></span>
            </div>
        </div>
    </>
  );
}
  
export default homeNavBar;