import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";
import MediumIcon from "./../public/assets/icons/Medium.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "feedback",
    title: "Testimonals",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Software Testing",
    icon: <FrontendIcon />,
  },
  {
    title: "DevOps Engineer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
  title: "Agile and Scrum",
     icon: <FreelancerIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "PHP",
      icon: "/assets/tech/php.png",
      link: "https://www.php.net/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
};

const experiences = [
  {
    title: "Senior Software Developer (MTS-3)",
    company_name: "Oracle Cloud Infrastructure (OCI)",
    icon: "/assets/company/oracle_cloud.jpg",
    iconBg: "#E6DEDD",
    date: "September 2024 - Present",
    points: [
      "Currently serving as a senior software developer at Oracle Cloud Infrastructure (OCI).",
    ],
  },
  {
    title: "Software Developer (MTS-2) - AI Vision Service",
    company_name: "Oracle Cloud Infrastructure (OCI)",
    icon: "/assets/company/oracle_cloud.jpg",
    iconBg: "#E6DEDD",
    date: "March 2022 - August 2024",
    points: [
      "Design and develop some of key feature in AI vision like key value extraction, face detection, video service etc .",
      "Implemented code hint feature support that is widely accepted inside the org for various othe feature.",
      "Led the design and implementation of the frontend, providing a user-friendly interface for efficient using of AI vision and document service.",
      "Created a labilng platform for key value labling development.",
      "Build multiple region support for AI vision cloud. ",
      "Created multiple pipeline support for console feature whitlisting and easy onboard of customer through the same."
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "Teradata India Pvt. limited",
    icon: "/assets/company/TERADATA.png",
    iconBg: "#E6DEDD",
    date: "January 2022 - March 2022",
    points: [
      "Worked on building pipeline to integrate the SERVICE NOW and AWS to create an automate driver onboard system.",
      "Worked on different scenarios of AWS site provisioning where major challenge was to integrate different components and requirements of different users.",
      "Create Automation for Site provisioning via AWS and GCP.",
      "Worked to create a remediation pipeline for log4J on various instances of Teradata."
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Teradata India Pvt. limited",
    icon: "/assets/company/TERADATA.png",
    iconBg: "#E6DEDD",
    date: "September 2020 - January 2022",
    points: [
      "I was a part of devOps team in Teradata where I was fully functional on building cross relationship between Software Development and Operational Team.",
      "Developed an unified dashboard to integrate all the pipelines within various team, and to give enhanced feature like detail reporting and management of those pipeline.",
      "As part of reducing software security and compliance issues, I developed black duck pipeline using Synopsys detect and Jenkins pipeline that helped in increasing the amount of code undergo in pipeline for vulnerability check",
      "Developed SCM release pipeline for automating the SCM release reducing the time to make release within Teradata.",
      "Worked on the maintenance of existing pipeline like feature pipeline, hook manager etc. Added new features to existing pipeline and improving the existing pipelines."
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Amazon India Pvt. limited",
    icon: "/assets/company/AMAZON.jpeg",
    iconBg: "#E6DEDD",
    date: "September 2019 - August 2020",
    points: [
      "I was a part of Amazon Relay Team.",
      "Created automation system for automating different test cases for Amazon relay in Asia-Australia region (Covering test cases for India Region, Japan Region and Australia region.",
      "Modified the features of Amazon Relay website and re-modified them.",
      "Done automation and manual testing on release of Amazon Relay 2.0.",
      "Work with AWS to create an automate driver onboard system.",
      "Bring the pipeline stability from 40 percent to 93 percent in terms of test cases passed."
    ],
  },
  {
    title: "Campus Ambassdor",
    company_name: "Mindtree India",
    icon: "/assets/company/MINDTREE.png",
    iconBg: "#E6DEDD",
    date: "January 2019 - August 2019",
    points: [
      "Conducted Mindtree Limited - OSMOSIS 2019",
      "Handle the event planning and management as a lead coordinator in Mindtree India pvt. limited.",
    ],
  },
  {
    title: "Trainee",
    company_name: "Infowiz India",
    icon: "/assets/company/INFOWIZ.jpg",
    iconBg: "#E6DEDD",
    date: "March 2018 - June 2018",
    points: [
      "Learnt various frontend and backend technologies.",
      "Developed projects on e-midwifery system for medical assistant.",
      "Developed projects on REACT such as GitHub KPI Indicator.",
      "Undergone professional certification goal on writing effective code and documentations."
    ],
  },
  {
    title: "Graduate Student (CSE)",
    company_name: "Chandigarh University (CSE)",
    icon: "/assets/company/CU.jpg",
    iconBg: "#E6DEDD",
    date: "July 2016 - June 2020",
    points: [
      "Gold medalist with 9.13 CGPA - 2020 batch."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had closely work with Abhishek for more than 5 years and was amazed with his problem solving skills. The perspective that Abhishek brings on the table is different which adds significant value while addressing any challenges. His Analytical skills is remarkable. What makes Abhishek unique is his will power to make this world a better place to live and he always looks forward to leverage his skills to solve real time problems. Abhishek would be an asset to any team or organization he is part of..",
    name: "Harshit Grover",
    designation: "Senior Support Engineer",
    company: "Microsoft India",
    image: "/assets/people/HARSHIT.png",
  },
  {
    testimonial:
      "Abhishek Jha is a fantastic person to work with, and is not only a multi-skilled and insightful colleague, but also an inspiring strategist. Goal Oriented and responsible team player. Great employee with a very strong problem solving skills and handful knowledge in Devops. Abhishek Jha will be an asset to any company.",
    name: "Abhishek Joshi",
    designation: "Data Engineer",
    company: "Salseforce India",
    image: "/assets/people/ABHISHEKJOSHI.png",
  },
  {
    testimonial:
      "Abhishek!! joined as a fresher to our team and I was impressed with his skillset from the Day 1, His expertise is commendable, it helped our team to come up with efficient solutions, he is smart and easily approachable. I highly recommend him and would love to work with him again. ",
    name: "Chandra V",
    designation: "Senior Devops Engineer",
    company: "VMware India",
    image: "/assets/people/CHANDRA.png",
  },
  {
    testimonial:
      "I have known Abhishek since my college days and he is one of the most hardworking and dedicated personality. When it comes to knowledge, he is exceptional in fields like Data structure and algorithms. He is also remarkable when it comes to interpersonal skills and always shows effective communication. I wish him all the best for future! ",
    name: "Pranshu Jaipuriya",
    designation: "Senior Support Engineer",
    company: "Microsoft India",
    image: "/assets/people/PRANSHU.png",
  },
  {
    testimonial:
      "We’ve joined our hands on several projects, and Abhishek is one of the best people I had as a partner. I highly recommend his expertise to any person looking for an Software Engineer. He is the most profound person I have met, and his ability to tackle any problem is remarkable and with a warm smile. Abhishek would become an appreciated member of any team.Abhishek!! joined as a fresher to our team and I was impressed with his skillset from the Day 1, His expertise is commendable, it helped our team to come up with efficient solutions, he is smart and easily approachable. I highly recommend him and would love to work with him again. ",
    name: "Sudhanshu Shrivastava",
    designation: "Senior Data Engineer",
    company: "Gartner India",
    image: "/assets/people/SUDHANSHU.png",
  },

];

const projects = [
  {
    name: "Crypt Master",
    description:
      "Very basic example of encryption using python (uses Advanve Encryption System). AES encryption uses various key lengths (128, 192, or 256 bits) to provide strong protection against unauthorized access. This data security measure is efficient and widely implemented in securing internet communication, protecting sensitive data.",
    tags: [
      {
        name: "Python3",
        color: "blue-text-gradient",
      },
      {
        name: "AES Encryption",
        color: "green-text-gradient",
      },
    ],
    image: "/assets/projects/ENCRYPTION.png",
    source_code_link: "https://github.com/AJSANU/Crypt-Master",
    // deployed_link: "https://fig-pro-github.vercel.app",
  },
  {
    name: "Facebook Scrapper",
    description:
      "It takes sample question excel file as input (Web Scrapping Task..xlsx), extracts the url of the facebook url profile page to be scrapped automatically, and then collect the scrapped result and store it back to the excel file in the format as required..",
    tags: [
      {
        name: "python3",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "data Science",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/FACEBOOK.jpeg",
    source_code_link: "https://github.com/AJSANU/FcaebookScrapper",
    // deployed_link: "https://gdscmvjce.vercel.app/",
  },
  {
    name: "Project Viewer",
    description:
      "This is a simple application to list all projects.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/PROJECT.png",
    source_code_link:
      "https://github.com/AJSANU/ProjectViewer",
    deployed_link:
      "https://ajprojectlist.netlify.app/",
  },
  {
    name: "Web-Automation-Scrapping-And-Testing",
    description:
      "This project does the automation testing for the web browser and also on basis of automation, filters the important data and stores them in a file. That file automatically created and updated on regular basis as we execute the cases.",
    tags: [
      {
        name: "python3",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Selenium",
        color: "pink-text-gradient",
      },
      {
        name: "Web Automation",
        color: "pink-text-gradient",
      },
      {
        name: "Web Driver",
        color: "pink-text-gradient",
      },
      {
        name: "Alloy",
        color: "green-text-gradient",
      },
    ],
    image: "/assets/projects/AUTOMATION.jpeg",
    source_code_link: "https://github.com/AJSANU/Web-Automation-Scrapping-And-Testing",
    deployed_link: " https://drive.google.com/file/d/1-vyJsq-_LMU9wjPEWe3FlABdcEnz5EWf/view?usp=drivesdk",
  },
  {
    name: "Graph viewer",
    description:
      "This project is to demonstrate various charts using React.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/GRAPHS.png",
    source_code_link:
      "https://github.com/AJSANU/ChartMakes/tree/main/graph-and-charts",
    deployed_link:
      "https://user-images.githubusercontent.com/76152559/213898375-23c0dbf5-7707-47ce-a6d4-262c228eb031.mp4",
  },
  
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/AJSANU",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/abhishek-jha-2135b1184/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/1abhishek1998",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/1abhishek1998/",
  },
  {
    id: "blogs",
    icon: <MediumIcon />,
    link: "https://medium.com/@cu.16bcs5007",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Agile and Scrum master",
  500,
  "Senior Software developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Senior Software Developer at OCI",
  500,
  "Worked with Amazon, Teradata etc.",
  500,
  "> 4 year of experince",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
