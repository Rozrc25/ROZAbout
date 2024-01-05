import rohith from "./assets/images/avarohith.jpg"
import thumbnail from './assets/images/Screenshot (155).png'
import walmart from "./assets/images/walmart ASEVEP.jpg"
import accent from "./assets/images/accenture DVEP.jpg"
import cloud from "./assets/images/europ cloud.jpg"
import camb from "./assets/images/BEC interm.jpg"
import spktl from './assets/images/spok java.jpg'
var ceticon ="https://img.favpng.com/6/20/9/diploma-higher-education-logo-academic-certificate-png-favpng-t9LrfKwr2GdHpV088Ph3dQ5NF.jpg"

const logotext = "ROZRC25";
const meta = {
    title: "Rohith",
    description: "I’m Rohith CSE_STUDENT",
};

const introdata = {
    title: "I’m Rohith Faizal R",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "Still Learning",
        fourth: "I Love to play Games",
    },
    description: "As an accomplished and driven student, I am eager to translate my education into practical application within the professional arena. I possess outstanding technical proficiency in software and applications, adept at handling complex tasks, and demonstrate exemplary time management capabilities",
    your_img_url: rohith,
};

const dataabout = {
    title: "about my self",
    aboutme:"I am Rohith, a final-year B.Tech CSE student. Driven by a passion for technology, I possess a strong foundation in programming, software development, and data structures. With excellent problem-solving abilities and effective communication skills, I thrive in dynamic environments. Eager to contribute to innovative projects, I am dedicated to continuous learning and staying ahead in the rapidly evolving tech industry.",
};
const certificates = [{
        jobtitle: "Advanced Software Engineering Virtual Experience Program",
        where: "(Walmart Global Tech)",
        date: "2023",
        link:"https://drive.google.com/file/d/1ULl-qAOyFpatIcZXsWdRNt_u-clJGxui/view?usp=sharing",
       src:walmart
    },
    {
        jobtitle: "Accenture Nordics Virtual Experience Program",
        where: "Forage(Developer)",
        date: "2023",
        link:"https://drive.google.com/file/d/1dYLcCCmC6LnG1YlCU7qCJaI24zPbLaf3/view?usp=sharing",
        src:accent
    },
    {
        jobtitle: "Certified Cloud Computing ",
        where: "(Europe Academy)",
        date: "2021",
        link:"https://drive.google.com/file/d/1zs10WXvnmVA8_awXAvDXq43tYaCNZfqX/view?usp=sharing",
        src:cloud
    },
    {
        jobtitle: "Business English",
        where: "Cambridge English",
        date: "2023",
        link:camb,
       src:camb
    },{
        jobtitle:"Spoken Toturial",
        where:"IIT Bombay",
        date:2021,
        link:spktl,
        src:spktl
    }
];

const skills = [{
        name: "React"
    },
    {
        name: "HTML & CSS"
    },
    {
        name: "Javascript"
    },
    {
        name: "JAVA"
    },
    {
        name: "SQL"
    },
    {
        name: "MS office"
    },
    {
        name:"Ubuntu"
    }
];

const services = [{
        title: "Full Stack Developement Intern",
        description: "Bharat Intern",
    }
];

const dataportfolio = [{
        img: thumbnail,
        description: "clone of Swiggy with its API",
        link: "https://drive.google.com/file/d/13bpumZ1Dq1MMcuTNuS94u70QVe2sMdob/view?usp=sharing",
    }
];

const contactConfig = {
    YOUR_EMAIL:"rohithfaizal25@yahoo.com",
    description: " ''Feel free to reach out to me via email or connect with me on LinkedIn. I'm always open to engaging in meaningful conversations and expanding my professional network. Please don't hesitate to contact me if you have any questions or would like to discuss potential opportunities. I look forward to connecting with you!'' ",
    YOUR_SERVICE_ID: "service_4qs2zaa",
    YOUR_TEMPLATE_ID: "template_krmsggl",
    YOUR_USER_ID: "D_1NQSO7mWGRViTq3",
};

const socialprofils = {
    github: "https://github.com/Rozrc25?tab=repositories",
    linkedin: "https://www.linkedin.com/in/rohith-faizal-r-2b1419251/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    certificates,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};