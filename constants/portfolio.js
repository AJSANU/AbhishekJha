// Career facts and impact figures follow public/document/Abhishek__Resume.pdf.
// Personal project links and recommendations are retained from the original site.

export const profile = {
  name: "Abhishek Jha",
  firstName: "Abhishek",
  lastName: "Jha",
  initials: "AJ",
  role: "Senior Software Developer",
  company: "Oracle Cloud Infrastructure",
  location: "Bengaluru, India",
  email: "cu.16bcs5007@gmail.com",
  resume: "/document/Abhishek__Resume.pdf",
  headline: "Engineering ideas into impact.",
  intro:
    "I build intelligent cloud products, thoughtful interfaces, and the infrastructure that brings them to life.",
  bio: "I’m a senior software developer at Oracle Cloud Infrastructure, working at the intersection of AI, cloud, and product engineering. From global AI services to the tools that make teams faster, I turn complex problems into useful, dependable software.",
  about:
    "My journey spans Oracle, Teradata, and Amazon — building across the stack, automating what slows people down, and making ambitious ideas work in the real world. I’m a Computer Science gold medalist, a hands-on problem solver, and a technical writer who enjoys making complex ideas easier to understand.",
  socials: [
    { id: "github", label: "GitHub", href: "https://github.com/AJSANU" },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhishek-jha-2135b1184/",
    },
    {
      id: "medium",
      label: "Medium",
      href: "https://medium.com/@cu.16bcs5007",
    },
  ],
  stats: [
    { value: "3", label: "Global technology companies" },
    { value: "30+", label: "Technical articles published" },
    { value: "9.3", label: "CGPA · Gold medalist" },
  ],
  education: {
    institution: "Chandigarh University",
    degree: "B.E. in Computer Science",
    period: "2016 — 2020",
    dates: "Aug 2016 — Mar 2020",
    distinction: "Gold medalist",
    score: "9.3 / 10 CGPA",
  },
  awards: [
    { name: "AI Pinnacle Award", organization: "Oracle Cloud Infrastructure" },
    { name: "AI Ninja Award", organization: "Oracle Cloud Infrastructure" },
    { name: "Google Hash Code", organization: "3rd rank · Punjab region" },
    { name: "NCAT", organization: "92nd percentile · University best" },
  ],
  certifications: [
    "OCI Foundation & Associate",
    "Python Certification · IIT Bombay",
    "Applied ML Algorithm · LinkedIn Learning",
  ],
};

export const experience = [
  {
    id: "oracle",
    company: "Oracle",
    fullCompany: "Oracle Cloud Infrastructure",
    role: "Senior Software Developer",
    period: "2022 — Present",
    dates: "Mar 2022 — Present",
    location: "Bengaluru, India",
    current: true,
    summary:
      "Building AI products at global scale — from video and document understanding to the infrastructure behind them.",
    highlights: [
      "Led the global rollout of AI Video Analysis, AI Streaming, AI Biometric, and Face Detection products serving millions of users.",
      "Developed end-to-end Document Understanding solutions, improving key-value extraction by 40% and barcode scanning efficiency by 60%.",
      "Built an annotation review tool that reduced annotation time by 50% across OCI teams.",
      "Designed AI product infrastructure that improved scalability and cut deployment time by 30%.",
    ],
    tags: ["AI & ML", "Cloud infrastructure", "Product engineering"],
    metric: { value: "50%", label: "less annotation time" },
  },
  {
    id: "teradata",
    company: "Teradata",
    fullCompany: "Teradata India Pvt. Limited",
    role: "Software Engineer",
    period: "2020 — 2022",
    dates: "Sep 2020 — Mar 2022",
    location: "Hyderabad, India",
    current: false,
    summary:
      "Making delivery faster and software more secure through automation, cloud provisioning, and developer tooling.",
    highlights: [
      "Built an integrated Black Duck security pipeline, reducing vulnerabilities by 90% across multiple products.",
      "Automated driver onboarding with ServiceNow and AWS, streamlining provisioning for 1,000+ users.",
      "Developed a Log4J remediation pipeline that secured 500+ Teradata instances.",
      "Created a unified pipeline dashboard that reduced debugging time by 40%.",
    ],
    tags: ["DevOps", "AWS", "Security automation"],
    metric: { value: "90%", label: "fewer vulnerabilities" },
  },
  {
    id: "amazon",
    company: "Amazon",
    fullCompany: "Amazon India Pvt. Limited",
    role: "Software Developer Intern",
    period: "2019 — 2020",
    dates: "Sep 2019 — Jun 2020",
    location: "Chennai, India",
    current: false,
    summary:
      "Helping Amazon Relay run reliably across India, Japan, and Australia through testing and automation.",
    highlights: [
      "Built an automation system for testing Amazon Relay across India, Japan, and Australia.",
      "Improved pipeline stability from 40% to 93% and automated driver onboarding using AWS.",
      "Enhanced Amazon Relay 2.0 through manual and automated testing.",
    ],
    tags: ["Test automation", "AWS", "Amazon Relay"],
    metric: { value: "93%", label: "pipeline stability" },
  },
];

export const projects = [
  {
    id: "project-viewer",
    number: "01",
    name: "Project Viewer",
    category: "Full-stack development",
    description:
      "A focused application for exploring projects, built with a modern React and TypeScript stack.",
    tags: ["React", "TypeScript", "TanStack Query", "Node.js"],
    source: "https://github.com/AJSANU/ProjectViewer",
    demo: "https://ajprojectlist.netlify.app/",
    demoLabel: "Live project",
    image: "/assets/projects/PROJECT.png",
    visual: "projects",
  },
  {
    id: "crypt-master",
    number: "02",
    name: "Crypt Master",
    category: "Security & cryptography",
    description:
      "An exploration of AES encryption in Python, turning core data security concepts into a working application.",
    tags: ["Python", "AES encryption", "Security"],
    source: "https://github.com/AJSANU/Crypt-Master",
    image: "/assets/projects/MYPROJECTIMAGE.png",
    visual: "encryption",
  },
  {
    id: "graph-viewer",
    number: "03",
    name: "Graph Viewer",
    category: "Data visualization",
    description:
      "A collection of charts built with React, exploring ways to make data easier to read and understand.",
    tags: ["React", "TypeScript", "Node.js"],
    source: "https://github.com/AJSANU/ChartMakes/tree/main/graph-and-charts",
    demo: "https://user-images.githubusercontent.com/76152559/213898375-23c0dbf5-7707-47ce-a6d4-262c228eb031.mp4",
    demoLabel: "Watch demo",
    image: "/assets/projects/GRAPHS.png",
    visual: "charts",
  },
  {
    id: "web-automation",
    number: "04",
    name: "Web Automation Toolkit",
    category: "Automation & testing",
    description:
      "Browser test automation and data extraction workflows that collect, filter, and update useful information with each run.",
    tags: ["Python", "Java", "Selenium", "WebDriver"],
    source: "https://github.com/AJSANU/Web-Automation-Scrapping-And-Testing",
    demo: "https://drive.google.com/file/d/1-vyJsq-_LMU9wjPEWe3FlABdcEnz5EWf/view?usp=drivesdk",
    demoLabel: "View demo",
    image: "/assets/projects/AUTOMATION.jpeg",
    visual: "automation",
  },
  {
    id: "facebook-scrapper",
    number: "05",
    name: "Facebook Scrapper",
    category: "Data extraction",
    description:
      "A Python workflow that reads profile URLs from a spreadsheet, extracts data, and writes structured results back to the file.",
    tags: ["Python", "Web scraping", "Data processing"],
    source: "https://github.com/AJSANU/FcaebookScrapper",
    image: "/assets/projects/FACEBOOK.jpeg",
    visual: "data",
  },
];

export const caseStudies = [
  {
    id: "document-understanding",
    number: "01",
    title: "Making documents intelligent.",
    name: "AI Document Understanding",
    company: "Oracle Cloud Infrastructure",
    category: "AI & cloud",
    type: "industry",
    description:
      "End-to-end AI Document Understanding solutions that improved how information is extracted from documents.",
    tags: ["Document AI", "Key-value extraction", "Product engineering"],
    metric: "+40%",
    metricLabel: "Key-value extraction improvement",
    visual: "document",
    details: [
      {
        title: "The work",
        body: "Developed end-to-end AI Document Understanding solutions at Oracle Cloud Infrastructure, with a focus on key-value extraction and barcode scanning.",
      },
      {
        title: "The impact",
        body: "Improved key-value extraction by 40% and barcode scanning efficiency by 60%.",
      },
      {
        title: "The experience",
        body: "Led frontend design and implementation for AI Vision and document services, creating an interface for using these capabilities.",
      },
    ],
  },
  {
    id: "ai-platform",
    number: "02",
    title: "Intelligence at global scale.",
    name: "OCI AI Platform",
    company: "Oracle Cloud Infrastructure",
    category: "AI & cloud",
    type: "industry",
    description:
      "Global AI product rollouts, annotation tooling, and the cloud infrastructure that connects them.",
    tags: ["AI Vision", "Cloud infrastructure", "Developer tools"],
    metric: "50%",
    metricLabel: "Less annotation time",
    visual: "platform",
    details: [
      {
        title: "The work",
        body: "Led the global rollout of AI Video Analysis, AI Streaming, AI Biometric, and Face Detection products serving millions of users.",
      },
      {
        title: "Better tools for teams",
        body: "Built a cross-functional annotation review tool that reduced annotation time by 50% across OCI teams.",
      },
      {
        title: "Infrastructure that keeps pace",
        body: "Designed and deployed AI product infrastructure, improving scalability and cutting deployment time by 30%.",
      },
    ],
  },
  {
    id: "devops-automation",
    number: "03",
    title: "Less friction. Stronger systems.",
    name: "DevOps & Security Automation",
    company: "Teradata",
    category: "Engineering",
    type: "industry",
    description:
      "Security pipelines, automated provisioning, and delivery tools that made engineering workflows more dependable.",
    tags: ["DevOps", "AWS", "Security", "Automation"],
    metric: "90%",
    metricLabel: "Fewer vulnerabilities",
    visual: "pipeline",
    details: [
      {
        title: "Stronger security",
        body: "Built an integrated Black Duck security pipeline, reducing vulnerabilities by 90% across multiple products. A Log4J remediation pipeline secured more than 500 Teradata instances.",
      },
      {
        title: "Automated provisioning",
        body: "Integrated ServiceNow and AWS to automate driver onboarding, streamlining provisioning for more than 1,000 users.",
      },
      {
        title: "Clearer visibility",
        body: "Created a unified pipeline dashboard that improved visibility and reduced debugging time by 40%.",
      },
    ],
  },
  ...projects.slice(0, 3).map((project) => ({
    ...project,
    title: project.name,
    repo: project.source,
    discipline: project.category,
    category: "Side projects",
    type: "personal",
    details: [
      { title: "The project", body: project.description },
      { title: "Built with", body: project.tags.join(" · ") },
    ],
  })),
];

export const capabilities = [
  {
    id: "product",
    number: "01",
    title: "Product & frontend",
    description:
      "Clear interfaces for complex products. From interactive experiences to tools that help teams get more done.",
    skills: ["React", "TypeScript", "JavaScript", "Next.js", "Selenium"],
  },
  {
    id: "cloud",
    number: "02",
    title: "Cloud & infrastructure",
    description:
      "Scalable services, reliable deployments, and infrastructure built for real-world demands.",
    skills: [
      "OCI",
      "AWS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "OCI Functions",
    ],
  },
  {
    id: "backend",
    number: "03",
    title: "Backend & systems",
    description:
      "The logic behind the experience — APIs, data, and services that make ambitious products possible.",
    skills: ["Python", "Java", "C++", "SQL", "Oracle", "Redis"],
  },
  {
    id: "automation",
    number: "04",
    title: "DevOps & automation",
    description:
      "Removing friction from software delivery with pipelines, observability, and repeatable workflows.",
    skills: ["Jenkins", "Groovy", "Shell", "Prometheus", "Grafana", "Git"],
  },
];

export const testimonials = [
  {
    name: "Abhishek Joshi",
    role: "Data Engineer",
    company: "Salesforce India",
    quote:
      "Abhishek Jha is a fantastic person to work with, and is not only a multi-skilled and insightful colleague, but also an inspiring strategist.",
    image: "/assets/people/ABHISHEKJOSHI.png",
  },
  {
    name: "Chandra V",
    role: "Senior DevOps Engineer",
    company: "VMware India",
    quote:
      "His expertise is commendable, it helped our team to come up with efficient solutions, he is smart and easily approachable.",
    image: "/assets/people/CHANDRA.png",
  },
  {
    name: "Harshit Grover",
    role: "Senior Support Engineer",
    company: "Microsoft India",
    quote:
      "The perspective that Abhishek brings on the table is different which adds significant value while addressing any challenges.",
    image: "/assets/people/HARSHIT.png",
  },
];

export const writing = [
  {
    id: "event-driven-architecture",
    title: "Why enterprises are moving beyond request-response",
    category: "System design",
    topic: "Event-driven architecture",
    href: "https://medium.com/stackademic/event-driven-architecture-why-enterprises-are-moving-beyond-request-response-c90d23ad8291",
  },
  {
    id: "oci-vision",
    title: "Building a smart image analyzer with OCI Vision",
    category: "Cloud & AI",
    topic: "Oracle Cloud Vision + Streamlit",
    href: "https://medium.com/stackademic/building-a-smart-image-analyzer-with-oracle-cloud-vision-and-streamlit-9232535c2e80",
  },
  {
    id: "react-performance",
    title: "10 simple tips for faster React applications",
    category: "Frontend engineering",
    topic: "React performance",
    href: "https://medium.com/stackademic/mastering-react-10-simple-tips-for-faster-app-web-performance-243c22920b66",
  },
  {
    id: "bloom-filters",
    title: "Bloom filters: the probabilistic data structure",
    category: "Computer science",
    topic: "Data structures",
    href: "https://medium.com/@cu.16bcs5007/bloom-filters-the-probabilistic-data-structure-9f30716764b4",
  },
];
