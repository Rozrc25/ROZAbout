import rohith from "./assets/images/rohith.jpeg"
import thumbnail from './assets/images/Screenshot (155).png'

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
        third: "I Love to play Games",
    },
    description: "As an accomplished and driven student, I am eager to translate my education into practical application within the professional arena. I possess outstanding technical proficiency in software and applications, adept at handling complex tasks, and demonstrate exemplary time management capabilities",
    your_img_url: rohith,
};

const dataabout = {
    title: "about my self",
    aboutme:"I'm a Computer Science Engineering student with a passion of ",
};
const certificates = [{
        jobtitle: "Advanced Software Engineering Virtual Experience Program",
        where: "(Walmart Global Tech)",
        date: "2023"
    },
    {
        jobtitle: "Accenture Nordics Virtual Experience Program",
        where: "(Developer)",
        date: "2023",
    },
    {
        jobtitle: "Certified Cloud Computing ",
        where: "(Europe Academy)",
        date: "2021",
    },
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
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