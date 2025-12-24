import "./App.css";
import "./Projects.css";
function Projects() {
    return (
        <div className="app-content">
            <h1 className="highlight">{"</ My Projects / >"}</h1>
            <section className="projects" translate="no" lang="zxx">
                <a
                    href="https://github.com/JexxyPL/ToDoApp"
                    target="_blank"
                    rel="noopener noreferrer">
                    <section className="project" key="todo-project">
                        <img
                            src="https://raw.githubusercontent.com/JexxyPL/ToDoApp/refs/heads/main/screenshot.png"
                            alt="Projekt"
                        />
                        <h1>To Do App!</h1>
                        <section className="techs">
                            <section className="tech">
                                <h3>Electron</h3>
                            </section>
                            <section className="tech">
                                <h3>Javascript</h3>
                            </section>
                        </section>
                    </section>
                </a>
                <a
                    href="https://github.com/JexxyPL/SMBHelper"
                    target="_blank"
                    rel="noopener noreferrer">
                    <section className="project" key="todo-project">
                        <img
                            src="https://raw.githubusercontent.com/JexxyPL/SMBHelper/refs/heads/main/Icon.png"
                            alt="Projekt"
                        />
                        <h1>SMBHelper</h1>
                        <section className="techs">
                            <section className="tech">
                                <h3>C++</h3>
                            </section>
                            <section className="tech">
                                <h3>Linux</h3>
                            </section>
                        </section>
                    </section>
                </a>
            </section>
        </div>
    );
}

export default Projects;
