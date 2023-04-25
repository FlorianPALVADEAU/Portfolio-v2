import '../style/Main.scoped.scss'
import '../style/TimeLine.scoped.scss'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
// import '../js/skewEffect'




function Main() {
    const dataFrontEnd = ["HTML", "CSS/Scss", "JavaScript", "React", "VueJS", "Nuxt", "Next.JS"]
    const dataBackEnd = ["Python", "Django", "PHP", "Symfony", "Laravel", "MySQL", "Docker"]
    const dataFront = {
      labels: dataFrontEnd,
      datasets: [{
        maintainAspectRatio: false,
        label: 'Front-End Skills',
        data: [90, 95, 80, 65, 80, 50, 65],
        backgroundColor: ['#CCDBFD','#CCDBFD','#CCDBFD','#CCDBFD','#CCDBFD','#CCDBFD','#CCDBFD'],
        borderWidth: 1
      }]
    };
    const dataBack = {
      labels: dataBackEnd,
      datasets: [{
        maintainAspectRatio: false,
        label: 'Front-End Skills',
        data: [50, 40, 60, 55, 60, 70, 20],
        backgroundColor: ['#CCDBFD','#CCDBFD','#CCDBFD','#CCDBFD','#CCDBFD','#CCDBFD','#CCDBFD'],
        borderWidth: 1
      }]
    };



    return (
      <>
        <div className="Main">
            <div className="aboutMe" id='aboutMe'>
                <h2>About Me.</h2>
                <p>
                I'm Florian PALVADEAU, a student at IIM school, doing my third year of
                web-development, in order to get graduated of a web-ingeneer frond-end and creative developer master.<br/><br/>

                Over the past 3 years, I have been developing many different skills, both in hardskills and in softskills. 
                I am passionate about coding, and I'm always trying to push my limits in order to learn and play with differents languages.

                My goal is to become the best web-developer that I could ever be, and I'm really determined to, maybe one day, become
                a renowned developer.<br/><br/>

                I would say that my personnality is pretty adaptative depending from a situation to another, but more generally I'm a really
                devoted person, hard-working and determined. I do not fear challenges, and always try to do my best to defeat them.<br/><br/>

                Besides, I am very social and open-minded, which I think is a pretty good advantage in the digital world,
                because it allows me to be team-spirited and to understand my working mates easier.<br/><br/>

                Finally, I could add that I can speak english at a professional level (written/spoken) and I've got Spanish basics.<br/><br/>
                </p>

            </div>
            <div className="studies" id='studies'>
                <h2>My Studies.</h2>
                <p>
                    Currently in the third year of my scolarship cursus, I am following a work-study program of 3 weeks working / 1 Week stodying at school.<br/>
                    Thanks to my school and a part of my curiosity, I have been able to develop many hardskills in the web-development area. 
                    I am able to realize a complete website from the wireframe to the development and the FTP.  In addition to this, I am very comfortable with 
                    CAD and video making softwares.<br/>

                    Luckily, my school is giving lessons of softskills to it's students, in order to prevent them of the embarrassing situations 
                    that could happen in the professional working area, or simply in the real life. I have learnt to work in team, how to manage 
                    my stress, my timetable, some angry people, and many other stuff, but also how to behave
                    correctly and professionally from a situation to another.
                </p>
                <div className="cursus">
                    <h3>My cursus.</h3>
                    <ul className="timeline">
                        <li>
                            <div className="direction-r">
                                <div className="flag-wrapper">
                                    <span className="flag">First year at IIM</span>
                                    <span className="time-wrapper"><span className="time">2020-2021</span></span>
                                </div>
                                <div className="desc">
                                    I learnt a lot of skills since I've been in touch with 3D softwares, Creation and Design softwares, get introduced to web 
                                    development, as well as video-game programming/designing, and marketing. 
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="direction-l">
                                <div className="flag-wrapper">
                                    <span className="flag">Second Year at IIM</span>
                                    <span className="time-wrapper"><span className="time">2021 - 2022</span></span>
                                </div>
                                <div className="desc">
                                    I decided to specialize my studies in web development. 
                                    I have learnt a lot of things and web development started to become a real passion to me.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="direction-r">
                                <div className="flag-wrapper">
                                    <span className="flag">Third Year at IIM</span>
                                    <span className="time-wrapper"><span className="time">2022 - 2023</span></span>
                                </div>
                                <div className="desc">
                                    I started to work in companies through a work-study program, while learning on my side. I will get graduated by july of a 
                                    developer project chief bachelor.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="direction-l">
                                <div className="flag-wrapper">
                                    <span className="flag">Incoming...</span>
                                    <span className="time-wrapper"><span className="time">2023 - 2025</span></span>
                                </div>
                                <div className="desc">
                                    2 years remaining to get graduated of a web-engeneer front-end creative developer master.
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="cursus">
                    <h3>My experiences.</h3>
                    <ul className="timeline">
                        <li>
                            <div className="direction-r">
                                <div className="flag-wrapper">
                                    <span className="flag">Internship at SQY's town hall</span>
                                    <span className="time-wrapper"><span className="time">2020-2021</span></span>
                                </div>
                                <div className="desc">
                                    I did an internship as a full-stack developper for 1 month out there. As a first professionnal experience, I had the opportunity to discover more about all the
                                    possibilities and works that exists in IT. I realised and proposed them a full customizable map (you can find this project in the "projects" page) with MapBox and JavaScript. 
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="direction-l">
                                <div className="flag-wrapper">
                                    <span className="flag">Internship at NeuronesIT</span>
                                    <span className="time-wrapper"><span className="time">05/2022 - 08/2022</span></span>
                                </div>
                                <div className="desc">
                                    I enjoyed work in a team full of ambition and values. I learnt the basics of VueJS and Django. 
                                    My missions were to maintain and deploy their IT services, while handling problems with the clients.
                                    This is where I had the first ever responsibilities in a professionnal environment.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="direction-r">
                                <div className="flag-wrapper">
                                    <span className="flag">Still at NeuronesIT...</span>
                                    <span className="time-wrapper"><span className="time">09/2022 - 09/2023</span></span>
                                </div>
                                <div className="desc">
                                    Since the team loved the way I worked, they decided to keep our touch and so I did a one year apprenticeship, still at NeuronesIT.
                                    During this year, I learnt a lot of things about technologies and development, and I am really proud to have worked for such big clients (Kering, LVMH, Castel, BNP Paris Bas, Berlutti, ...).
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="direction-l">
                                <div className="flag-wrapper">
                                    <span className="flag">Incoming...</span>
                                    <span className="time-wrapper"><span className="time">2023 - 2025</span></span>
                                </div>
                                <div className="desc">
                                    I'm currently looking for another opportunity to develop my skills and build new relationships through a 24 month apprenticeship as a front-end or a full-stack developer.
                                    If you are recruiting or know someone recruiting, I would be so happy to get in touch with them ! Don't hesitate to contact me directly by phone or email. (available in "Contact" page)
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="skills" id='skills'>
                <h2>My Skills.</h2>
                <div className="canva">
                    <h3>Front-end Skills.</h3>
                    <Bar data={dataFront} />
                    <h3>Back-end Skills.</h3>
                    <Bar data={dataBack} />
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Main;