import ScreenShot_sqy from '../assets/Screenshot_sqy.png'
import Screenshot_eiffel from '../assets/Screenshot_eiffel.png'
import Screenshot_a1 from '../assets/Screenshot_a1.png'
import Screenshot_dashboard from '../assets/Screenshot_dashboard.png'
import Screenshot_sl from '../assets/Screenshot_sl.png'
import Screenshot_ns from '../assets/Screenshot_nuxt_strapi.png'
import ScreenShot_sg from '../assets/Screenshot_snake_game.png'

const json = [
    {
        "Thumbnail" : Screenshot_ns,
        "Name": "Nuxt - Strapi.",
        "QuickDescription": "Recreacting this portfolio with nuxt and strapi.",
        "FullName" : "Another version of my portfolio",
        "FullDescription" : "This projet has been done during a headless CMS course. It made me discover Strapi and Nuxt, in addition of Supabase. I really enjoyed working on it, and i may do some freelance projects with this kind of technologies.",
        "VideoLink" : "https://www.youtube.com/watch?v=n10SYY55X8p",
        "Technologies" : [
            "Nuxt.js",
            "Strapi",
            "SCSS",
            "SupaBase",
        ],
        "Difficulty" : "Medium",
        "Client" : "None",
    },
    {
        "Thumbnail" : Screenshot_sl,
        "Name": "Doctor's website.",
        "QuickDescription": "Professional website for a Shiatsu doctor.",
        "FullName" : "Personal Website for a Professional Shiatsu doctor",
        "FullDescription" : "This project is kind of a portfolio for a shiatsu doctor. I worked really hard with the SEO of it, and i'm proud that i made this Shiatsu doctor happy about his website.",
        "VideoLink" : "https://www.youtube.com/watch?v=n10SYY55X8p",
        "Technologies" : [
            "React",
            "SCSS",
            "Barba.JS",
            "GSAP",
        ],
        "Difficulty" : "Medium",
        "Client" : "Sandrine LABAT",
    },
    {
        "Thumbnail" : Screenshot_dashboard,
        "Name": "Luxury Cars.",
        "QuickDescription": "A platform to manage car rentals.",
        "FullName" : "A platform to manage the rentals of a luxury car rental company",
        "FullDescription" : "This project has been realized during my second year at IIM, the goal was to resolve a real client's problem. Me and my team had to help our client to manage his retals. In addition, we've been elected as the best project of the year in my school ! I'm very proud of it. This project was very formative, it allowed me to work by myself even if i didn't know how to do or anything, i learnt to study and search all by my side.",
        "linkCars" : 'https://www.linkedin.com/posts/florianpalvadeau_developpementweb-developpeur-gestiondeprojet-activity-6932660992354992128-jXUs?utm_source=share&utm_medium=member_desktop',
        "VideoLink" : "https://www.youtube.com/embed/9LubV_O1AOo",
        "Technologies" : [
            "Laravel",
            "TailWind",
            "MySQL",
        ],
        "Difficulty" : "Hard",
        "Client" : "StarTourisme Services",
    },
    {
        "Thumbnail" : ScreenShot_sqy,
        "Name": "Innovative Map.",
        "QuickDescription": "MapBox project proposition for a city's website.",
        "FullName" : "Innovative map for the Saint-Quentin-En-Yvelines's website",
        "FullDescription" : "In this project that i did during the 2021's summer for the community's agglomeration of Saint-Quentin-En-Yvelines, the web-ingeneer that were supporting me asked me to propose an innovative way to demonstrate the progress of each city's construction site and works. It made me reflect so much time because their website is pretty complete and already had all the firsts ideas that i had in mind. Nevertheless i found a way to reinnovate this website by introducing an interactive map into it. I looked on the web what could i use to get it working, and in 5 weeks, i finished imaginating and coding this innovative item. Actually, i found out that a library called MapBox was doing exactly what i wanted. The first step, was to learn how to use this library, which was kinda complicated in less than 1 week if would still have enought time to code my project entirely. Then i started coding it, more or less quickly, and finished by present it to my tutor's boss. He didn't understand how it worked because he didn't know much about web-development, but my mentor said that my work was really good and that he was satifyed of what i did.",
        "VideoLink" : "https://www.youtube.com/embed/35ASrT2ur7Q",
        "Technologies" : [
            "HTML",
            "CSS",
            "JS",
            "MapBox",
        ],
        "Difficulty" : "Medium",
        "Client" : "Saint-Quentin-En-Yvelines",
    }, 
    {
        "Thumbnail" : ScreenShot_sg,
        "Name": "Snake Game.",
        "QuickDescription": "The classic game made in python.",
        "FullName" : "The Snake Game",
        "FullDescription" : "During a python lesson, we had 2 days to make a working snake game. I did not really enjoyed it, since i prefer front-end development, but it was still really interesting and fun.",
        "VideoLink" : "https://www.youtube.com/watch?v=n10SYY55X8p",
        "Technologies" : [
            "Python",
            "PYGame"
        ],
        "Difficulty" : "Medium",
        "Client" : "None",
    }, 
    {
        "Thumbnail" : Screenshot_eiffel,
        "Name": "Blog.",
        "QuickDescription": "My first complete website.",
        "FullName" : "A Tour Eiffel website with a working blog and it's administration system.",
        "FullDescription" : "This project was imposed to be done by my school if i wanna pursue my studies in the web-development axis. We had to make a full website with at least : a parallax animation, a live-error form, a working blog(with a wysiwyg interface, and a fully secured administration system), a gallery with filter and masonry effect, some comments under it with an anti-swearing, ... This project was very formative, it allowed me to work by myself even if i didn't know how to do or anything, i learnt to study and search all by my side.",
        "VideoLink" : "https://www.youtube.com/embed/YQ3bTsKf0cU",
        "Technologies" : [
            "HTML",
            "CSS",
            "PHP",
            "MySQL",
        ],
        "Difficulty" : "Easy",
        "Client" : "None",
    }, 
    {
        "Thumbnail" : Screenshot_a1,
        "Name": "Showreel.",
        "QuickDescription": "2021's showreel.",
        "FullName" : "My firsts projects at IIM",
        "FullDescription" : "During my first year at IIM, i did many projects on many different aspects of the digital world, such as video game, web-marketing, web-development, creation and design, and 3D conception/animation. You will be able to find some of my projects by clicking this link :",
        "link" : 'https://www.dropbox.com/sh/cewk3741fy3ebz9/AACx9KDEcRv_zIdGd1FNEDt1a?dl=0',
        "VideoLink" : "https://www.youtube.com/embed/kj68d2gTJ3I",
        "Technologies" : [
            "",
        ],
        "Difficulty" : "Undefined",
        "Client" : "None",
    }, 
]

if (localStorage.getItem("json") === null) {
    localStorage.setItem("json", JSON.stringify(json))
} else{
    localStorage.removeItem("json")
    localStorage.setItem("json", JSON.stringify(json))
}