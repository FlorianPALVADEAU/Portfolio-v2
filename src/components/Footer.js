import { useEffect } from "react";
import { useState } from "react";
import cv_icon from "../assets/cv_icon.png";
import github_icon from "../assets/github_icon.png";
import linkedin_icon from "../assets/linkedin_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
import CV_PALVADEAU_FLORIAN from "../assets/CV_PALVADEAU_FLORIAN.pdf";
import '../style/Main.scoped.scss'



function Footer() {
    const lastURLElement = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    const [selectedContact, setSelectedContact] = useState(false)
    const [selectedHome, setSelectedHome] = useState(false)
    const [selectedProjects, setSelectedProjects] = useState(false)
    const [selectedElement, setSelectedElement] = useState(lastURLElement)

    const pages = [
        {'name':'contact' , 'info':setSelectedContact, 'description' : selectedContact}, 
        {'name':'' , 'info':setSelectedHome, 'description' : selectedHome}, 
        {'name':'projects' , 'info':setSelectedProjects, 'description' : selectedProjects}
    ]

    useEffect(() => {
        initURL()
    }, [selectedElement])

    function initURL() {
        setSelectedElement(lastURLElement)
        pages.map((page) => {
            if (page.name === selectedElement) {
                page.info(true)
            } else {
                page.info(false)
            }
        })
    }

    function select(el) {
        el.click()
        pages.forEach((page) => {
            if (page.name !== selectedElement && selectedElement !== el) {
                page.info(true)
            }
        })
    }


    return (
        <>
            <footer className="Footer">
                <a href={'/'} className='navLink'>florian-palvadeau.com</a>
                <div className="navBar">
                    <a href={'/' + pages[0].name} onClick={() => {select('contact')}} className={`${selectedContact ? "contact selected" : "contact"}`}>Contact</a>
                    <a href={'/'} onClick={() => {select('')}} className={`${selectedHome ? "home selected" : "home"}`}>Home</a>
                    <a href={'/' + pages[2].name} onClick={() => {select('projects')}} className={`${selectedProjects ? "projects selected" : "projects"}`}>Projects</a>
                </div>
                <div className="icons">
                    <a href="https://github.com/FlorianPALVADEAU" target={"_blank"} rel="noreferrer"><img src={github_icon} alt="github_icon"/></a>
                    <a href="https://www.instagram.com/flo.plvd/?hl=fr" target={"_blank"} rel="noreferrer"><img src={instagram_icon} alt="instagram_icon"/></a>
                    <a href="https://www.linkedin.com/in/florian-palvadeau/" target={"_blank"} rel="noreferrer"><img src={linkedin_icon} alt="linkedin_icon"/></a>
                    <a href={CV_PALVADEAU_FLORIAN} target={"_blank"} rel="noreferrer"><img src={cv_icon} alt="cv_icon" className="cv_icon"/></a>
                </div>
            </footer>
        </>
    );
  }
  
  export default Footer;