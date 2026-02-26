import "./App.css";
import "./Projects.css";

const projekty = [
    {
        id: "todo",
        href: "https://github.com/JexxyPL/ToDoApp",
        img: "https://raw.githubusercontent.com/JexxyPL/ToDoApp/refs/heads/main/screenshot.png",
        tytul: "To Do App!",
        technologie: ["Electron", "JavaScript"],
    },
    {
        id: "smb",
        href: "https://github.com/JexxyPL/SMBHelper",
        img: "https://raw.githubusercontent.com/JexxyPL/SMBHelper/refs/heads/main/Icon.png",
        tytul: "SMBHelper",
        technologie: ["C++", "Linux"],
    },
];

function Projects() {
    return (
        <div className="app-content">
            <h1 className="sekcja-naglowekwkszy">{"</ My Projects / >"}</h1>
            <section className="projekty-siatka" translate="no" lang="zxx">
                {projekty.map(({ id, href, img, tytul, technologie }) => (
                    <a
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project">
                        <div className="projekt-podglad">
                            <img src={img} alt={tytul} />
                            <div className="projekt-strzalka">
                                <svg viewBox="0 0 24 24">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </div>
                        </div>
                        <div className="projekt-info">
                            <h2 className="projekt-tytul">{tytul}</h2>
                            <div className="techs">
                                {technologie.map((t) => (
                                    <span key={t} className="tech">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </section>
        </div>
    );
}

export default Projects;
