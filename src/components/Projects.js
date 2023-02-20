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
                })
                handleClick(elIndex)
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
    function handleMoreProjects(item){
        var elIndex = json.findIndex(object => {return object.Name === item.Name})
        close()
        setProject(json[elIndex])
        handleClick()
    }
    function SingleProject(props){
        var item = json[Math.floor(Math.random()*json.length)];
        var item2 = json[Math.floor(Math.random()*json.length)];
        while (item === item2) {
            var item2 = json[Math.floor(Math.random()*json.length)];
        }

        return (
            <>
                <button onClick={() => {close()}}>← go back</button>
                <iframe src={props.project.VideoLink} title={props.project.Name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className='projectContent'>
                    <h2>{props.project.FullName}.</h2>
                    <p className='desc'>{props.project.FullDescription} {props.project.link ? <a href={props.project.link} target='_blank'>see my dropbox.</a> : ''} {props.project.linkCars ? <a href={props.project.linkCars} target='_blank'>See my post about this project.</a> : ''}</p>
                    <div className='projectInfo'>
                        <p>Difficulty : {props.project.Difficulty}</p>
                        <p>Client : {props.project.Client}</p>
                    </div>
                </div>
                <div className='moreProjects'>
                    <h3>More projects.</h3>
                    <div className='content'>
                        <a onClick={() => {handleMoreProjects(item)}} className='project first'>
                            <img src={item.Thumbnail} alt={item.Name} />
                            <h4>{item.Name}</h4>
                        </a>
                        <a onClick={() => {handleMoreProjects(item2)}} className='project second'>
                            <img src={item2.Thumbnail} alt={item2.Name} />
                            <h4>{item2.Name}</h4>
                        </a>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
        <div className='projectsContainer' ref={container}>
        </div>
        <div className='singleProject' ref={singleProject} style={{display : "none"}}>
            <SingleProject project={project} />
        </div>
        </>
    );
}
  
export default Projects;