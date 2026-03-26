import cpplogo from "./assets/cpp.png";
import cisco from "./assets/cisco.png";
import jslogo from "./assets/js.png";
import linuxlogo from "./assets/linux.png";
import htmllogo from "./assets/html.png";
import csslogo from "./assets/css.png";
import "./App.css";
import "./Skills.css";

const umiejetnosci = [
    {
        id: "html",
        logo: htmllogo,
        nazwa: "HTML",
        poziom: "Professional",
        klasa: "progresshtml",
        link: "https://www.codecademy.com/learn/learn-html",
    },
    {
        id: "css",
        logo: csslogo,
        nazwa: "CSS",
        poziom: "Expert",
        klasa: "progresscss",
        link: "https://www.codecademy.com/learn/learn-css",
    },
    {
        id: "js",
        logo: jslogo,
        nazwa: "JavaScript",
        poziom: "Intermediate",
        klasa: "progressjs",
        link: "https://www.codecademy.com/learn/introduction-to-javascript",
    },
    {
        id: "linux",
        logo: linuxlogo,
        nazwa: "Linux Server Administration",
        poziom: "Advanced",
        klasa: "progresslinux",
        link: "https://training.linuxfoundation.org/training/introduction-to-linux/",
    },
    {
        id: "cpp",
        logo: cpplogo,
        nazwa: "C++",
        poziom: "Intermediate",
        klasa: "progresscpp",
        link: "https://www.codecademy.com/learn/learn-c-plus-plus",
    },
    {
        id: "cs",
        logo: cisco,
        nazwa: "Cisco Networking",
        poziom: "Advanced",
        klasa: "progresscs",
        link: "https://www.netacad.com/catalogs/learn",
    },
];

function Skills() {
    return (
        <div className="app-content">
            <h1 className="sekcja-naglowekwkszy">{"</ My Skills / >"}</h1>
            <section className="umiejetnosci-siatka" translate="no" lang="zxx">
                {umiejetnosci.map(
                    ({ id, logo, nazwa, poziom, klasa, link }) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="skill">
                            <div className="skill-naglowek">
                                <img className="lang" src={logo} alt={nazwa} />
                                <h3>{nazwa}</h3>
                                <span className="skill-poziom-tekst">
                                    {poziom}
                                </span>
                            </div>
                            <div className="progressbar">
                                <div className={klasa}></div>
                            </div>
                        </a>
                    ),
                )}
            </section>
        </div>
    );
}

export default Skills;
