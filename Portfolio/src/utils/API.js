
// {title, description, image, link, githubLink}
import noteTakerImage from "../assets/images/NoteTaker.PNG";
import weatherDashboardImage from "../assets/images/WeatherDashboard.PNG";
import employeeTrackerImage from "../assets/images/EmployeeTracker.PNG";
import textEditorImage from "../assets/images/TextEditor.PNG";
import techBlogImage from "../assets/images/TechBlog.PNG";
import eCommerceBackEndImage from "../assets/images/eCommerceBackend.PNG";


const getProjects = () => {
    return {
        data: [
            {
                id: 1,
                title: "Text Editor",
                description: "Text Editor is a web application for editing text which can run offline, powered by Express.js, idb and webpack-pwa-manifest.",
                image: textEditorImage,
                link: "https://text-editor-v5vs.onrender.com/",
                githubLink: "https://github.com/DinhN17/Text-Editor"

            },
            {
                id: 2,
                title: "Employee Tracker",
                description: "Employee tracker is a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
                image: employeeTrackerImage,
                link: "",
                githubLink: "https://github.com/DinhN17/Employee-Tracker"
            },
            {
                id: 3,
                title: "Tech Blog",
                description: "A CMS-style blog site where user can publish their blog posts and comment on other users’ posts as well.",
                image: techBlogImage,
                link: "https://mysterious-ocean-87615-52c1d91464e5.herokuapp.com/",
                githubLink: "https://github.com/DinhN17/Tech-Blog"
            },
            {
                id: 4,
                title: "Note Taker",
                description: "A webpage to save and keep notes using nodejs and express as backend.",
                image: noteTakerImage,
                link: "https://infinite-meadow-48373-28e482f922db.herokuapp.com/",
                githubLink: "https://github.com/DinhN17/Note-Taker"
            },
            {
                id: 5,
                title: "Weather Dashboard",
                description: "A webpage to search 5-day weather forecast.",
                image: weatherDashboardImage,
                link: "https://dinhn17.github.io/Weather-Dashboard/",
                githubLink: "https://github.com/DinhN17/Weather-Dashboard"
            },
            {
                id: 6,
                title: "E-Commerce Backend",
                description: "E-Commerce Back End is a back end for an e-commerce site, using an Express.js API to use Sequelize to interact with a MySQL database.",
                image: eCommerceBackEndImage,
                link: "",
                githubLink: "https://github.com/DinhN17/eCommerce-Back-End"
            }
        ]
    }
};

export default { getProjects };