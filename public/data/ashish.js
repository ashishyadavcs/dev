import { config } from "./config";
const exp = `3.7 years`;
export const data = {
    projects: [
        { text: "birdlens creation", link: "https://birdlenscreation.com/" },
        {
            text: "student dashboard",
            link: "https://tutorbin.com/dashboard",
        },
        {
            text: "Tutor Dashboard",
            link: "https://t.tutorbin.com/",
        },
        {
            text: "Frontendzone",
            link: "/",
        },
        {
            ...(config.contacts && {
                text: "Old Portfolio",
                link: "https://ashishyadavcs.github.io/developer/#!/",
            }),
        },
        {
            text: "Wordpress Theme",
            link: "https://tutorbin.com/blog",
        },
        {
            text: "Landing page in next.js",
            link: "https://www.livecareer.co.uk/lp/lukrsmlp09.aspx?testCountry=UK",
        },
    ],

    totalexp: exp,
    interoduction: {
        short: `Frontend Developer | Blogger <br><br>I am a frontend developer with almost <strong>${exp} of experience </strong> in frontend development working in product based companies and having strong skills and experience in frontend development with <strong>React</strong> and <strong>Next js</strong>`,
    },
    hobby: ["Travelling", "Reading Book", "Coding"],
    social: {
        instagram: "https://instagram.com/ashishyadav.dev",
        linkedin: "https://linkedin.com/in/ashishyadavcs",
        github: "https://github.com/ashishyadavcs",
    },
    education: {
        degree: "BTech(CSE)",
        college: "Feroze Gandhi Institute of Engineering and Technology",
    },
    exp: [
        {
            company: {
                name: "BOLD Technology",
                link: "https://bold.com",
            },
            duration: "26 October, 2022 - Present",
            profile: "Software Engineer - UI",
            description: [
                `Creating landing pages and update ui for A/B test , fixing bugs , code review and do changes
              request for UAT`,
                `Fixing Performance and HTML validation`,
                `Creating and replacing lottie animation with css and js`,
                `Implementing new interfacing feature in react/next.js`,
                `code review`,
            ],
        },
        {
            company: {
                name: "Tutorbin",
                link: "https://tutorbin.com",
            },
            duration: "1 march, 2021 - 26 oct, 2022",
            profile: "frontend developer",
            description: [
                `Student-dashboard - Next.js, Bootstrap, Animation, Performance Optimization,API Integration`,
                `Tutor Dashboard - Tailwind CSS, Next.js, API Integration`,
                ` Public pages of website and migration to next.js`,
                ` Managing custom theme and performance of blog website.`,
                `Add , audit and fix seo schemas`,
            ],
        },
    ],
    skills: [
        "HTML",
        "CSS",
        "javascript",
        "typescript",
        "React js",
        "Next js",
        "Bootstrap",
        "Node js",
        "Express Js",
        "Mongodb",
        "SEO",
        "Vue js",
        "wordpress",
        "Jquery",
        "tailwind CSS",
        "REST API",
        "Git - version control",
        "Web accessibility",
        "website optimization",
    ],
};
