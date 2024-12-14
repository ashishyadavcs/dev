import { config } from "./config";

export const projects = [
    {
        title: "Student Dashboard",
        techs: ["react.js", "next.js", "html", "css", "js"],
        thumbnail: "",
        type: "company project",
        url: "https://tutorbin.com/dashboard",
        detail: {
            title: "",
            info: {},
        },
    },
    {
        title: "Tutor Dashboard",
        techs: ["react.js", "next.js", "html", "css", "js"],
        thumbnail: "/portfolio/tutor-dashboard.png",
        url: "https://t.tutorbin.com/",
        type: "company project",
        detail: {
            title: "",
            info: {},
        },
    },
    {
        title: "Tutorbin Public Pages",
        techs: ["react.js", "next.js", "html", "css", "js"],
        thumbnail: "/portfolio/publicpages.png",
        url: "https://tutorbin.com/",
        type: "company project",
        detail: {
            title: "",
            info: {},
        },
    },
    {
        title: "Birdlens Creation",
        techs: ["react.js", "next.js", "prismic cms", "SEO"],
        thumbnail: "/portfolio/birdlens.png",
        url: "https://birdlenscreation.com",
        type: "Client project",
        detail: {
            title: "",
            info: {},
        },
    },
    {
        title: "Milanmagic",
        techs: ["react.js", "next.js", "prismic cms", "SEO"],
        thumbnail: "/portfolio/milanmagic.png",
        url: "https://www.milanmagic.com",
        type: "Client project",
        detail: {
            title: "",
            info: {},
        },
    },
    {
        title: "Frontendzone",
        url: "/",
        techs: ["react.js", "next.js", "styled component", "node.js", "express", "mongodb"],
        thumbnail: "/portfolio/frontendzone.png",
        type: "Personal project",
        detail: {
            title: "",
            info: {},
        },
    },
];

if (config.contacts) {
    projects.push({
        title: "Portfolio website",
        url: "/",
        techs: ["html", "css", "js", "angular js", "materializ css"],
        thumbnail: "/portfolio/portfolio-old.png",
        url: "https://ashishyadavcs.github.io/developer",
        type: "Personal project",
        detail: {
            title: "",
            info: {},
        },
    });
}
