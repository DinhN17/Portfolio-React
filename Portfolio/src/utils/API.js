
// {title, description, image, link, githubLink}
import noteTakerImage from "../assets/images/NoteTaker.PNG";
import weatherDashboardImage from "../assets/images/WeatherDashboard.PNG";
import employeeTrackerImage from "../assets/images/EmployeeTracker.PNG";
import textEditorImage from "../assets/images/TextEditor.PNG";
import techBlogImage from "../assets/images/TechBlog.PNG";
import eCommerceBackEndImage from "../assets/images/eCommerceBackend.PNG";
import shopMateImage from "../assets/images/ShopMate.PNG";


const getProjects = () => {
    return {
        data: [
            {
                id: 1,
                title: "Shop Mate",
                description: "ShopMate simplifies your shopping experience by keeping all your lists organised and accessible wherever you go and whatever device you have.",
                image: shopMateImage,
                link: "https://limitless-meadow-75906-eea46bc8be0c.herokuapp.com/",
                githubLink: "https://github.com/DinhN17/Shop-Mate"

            },
            {
                id: 2,
                title: "GoalGetter",
                description: "Climb mountains and conquer milestones with this goal setting application.",
                image: "https://github.com/zaczacariah/GoalGetter/blob/main/public/images/overview-sal.png?raw=true",
                link: "https://aqueous-scrubland-14072-c1a72f47fd0b.herokuapp.com/",
                githubLink: "https://github.com/zaczacariah/GoalGetter"

            },
            {
                id: 3,
                title: "Crypto Bazaar",
                description: "a platform where individuals can buy crypto currencies and NFT's online, and track their purchases in the wallet section of our site.",
                image: "https://github.com/mattkellyirl/crypto-bazaar/assets/152781829/3a9e43c9-d0f9-4095-8bdb-d77f97fc072b",
                link: "https://mattkellyirl.github.io/crypto-bazaar/",
                githubLink: "https://mattkellyirl.github.io/crypto-bazaar/"

            },
            {
                id: 4,
                title: "Text Editor",
                description: "Text Editor is a web application for editing text which can run offline, powered by Express.js, idb and webpack-pwa-manifest.",
                image: textEditorImage,
                link: "https://text-editor-v5vs.onrender.com/",
                githubLink: "https://github.com/DinhN17/Text-Editor"

            },
            {
                id: 5,
                title: "Employee Tracker",
                description: "Employee tracker is a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
                image: employeeTrackerImage,
                link: "https://github.com/DinhN17/Employee-Tracker",
                githubLink: "https://github.com/DinhN17/Employee-Tracker"
            },
            {
                id: 6,
                title: "Tech Blog",
                description: "A CMS-style blog site where user can publish their blog posts and comment on other users’ posts as well.",
                image: techBlogImage,
                link: "https://mysterious-ocean-87615-52c1d91464e5.herokuapp.com/",
                githubLink: "https://github.com/DinhN17/Tech-Blog"
            },
            {
                id: 7,
                title: "Note Taker",
                description: "A webpage to save and keep notes using nodejs and express as backend.",
                image: noteTakerImage,
                link: "https://infinite-meadow-48373-28e482f922db.herokuapp.com/",
                githubLink: "https://github.com/DinhN17/Note-Taker"
            },
            {
                id: 8,
                title: "Weather Dashboard",
                description: "A webpage to search 5-day weather forecast.",
                image: weatherDashboardImage,
                link: "https://dinhn17.github.io/Weather-Dashboard/",
                githubLink: "https://github.com/DinhN17/Weather-Dashboard"
            },
            {
                id: 9,
                title: "E-Commerce Backend",
                description: "E-Commerce Back End is a back end for an e-commerce site, using an Express.js API to use Sequelize to interact with a MySQL database.",
                image: eCommerceBackEndImage,
                link: "https://github.com/DinhN17/eCommerce-Back-End",
                githubLink: "https://github.com/DinhN17/eCommerce-Back-End"
            }
        ]
    }
};

export default { getProjects };