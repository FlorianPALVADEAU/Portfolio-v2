import '../style/Main.scoped.scss'
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import '../js/localStorageProject'


function Projects() {

    var counter = 0
    const container = React.useRef(null);
    const singleProject = React.useRef(null);
    const json = JSON.parse(localStorage.getItem('json'))
    const [selected, setSelected] = useState(false)
    const [project, setProject] = useState(json[0])

    useEffect(()=>{
        if (counter <= 0) {
            json.forEach(el => {
                var elIndex = json.findIndex(object => {return object.Name === el.Name})
                var project = document.createElement("div")
                var projectContent = document.createElement("div")
                var projectImage = document.createElement("img")
                var projectName = document.createElement("h2")
                var projectQuickDescription = document.createElement("p")
                var projectTechnology = document.createElement("ul")
                projectName.innerHTML = el.Name
                projectQuickDescription.innerHTML = el.QuickDescription
                projectImage.setAttribute("src", el.Thumbnail)
                projectImage.setAttribute("alt", el.Name)
                project.classList.add("project")
                el.Technologies.forEach(t => {
                    var technology = document.createElement("li")
                    technology.innerHTML = t
                    projectTechnology.append(technology)
                })
                projectContent.append(projectName, projectQuickDescription, projectTechnology)
                project.append(projectImage, projectContent)
                project.addEventListener("click", () => {
                    setProject(json[elIndex])
                    handleClick(elIndex)
                })
                container.current.append(project)
            });
            counter++
        }
    },[])

    // function Welcome(props) {
    //     return <h1>Bonjour, {props.name}</h1>;
    // }
    function handleClick(){
        setSelected(true)
        container.current.style.display = "none"
        singleProject.current.style.removeProperty('display')
    }
    function close(){
        setSelected(false)
        singleProject.current.style.display = "none"
        container.current.style.removeProperty('display')
    }
    function HandleClick(props){
        return (
            <>
                <button onClick={() => {close()}}>← go back</button>
                <iframe src={props.project.VideoLink} title={props.project.Name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className='projectContent'>
                    <h1>{props.project.FullName}</h1>
                    <p>{props.project.FullDescription}</p>
                    <div className='projectInfo'>
                        <p>Difficulty : {props.project.Difficulty}</p>
                        <p>Client : {props.project.Client}</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
        <div className='projectsContainer' ref={container}>
        </div>
        <div className='projectsContainer aa' ref={singleProject} style={{display : "none"}}>
            <HandleClick project={project} />
        </div>
        </>
    );
}
  
export default Projects;