import "./App.css";
import { useState, useEffect } from "react";
import { Github, Youtube, Gamepad2 } from "lucide-react";

const TypingText = ({ words, speed = 150, pause = 1000 }) => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];
        const timeout = setTimeout(
            () => {
                if (isDeleting) {
                    setText(currentWord.substring(0, text.length - 1));
                } else {
                    setText(currentWord.substring(0, text.length + 1));
                }
                if (!isDeleting && text === currentWord) {
                    setTimeout(() => setIsDeleting(true), pause);
                } else if (isDeleting && text === "") {
                    setIsDeleting(false);
                    setWordIndex(wordIndex + 1);
                }
            },
            isDeleting ? speed / 2 : speed,
        );
        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, speed, pause]);

    return (
        <span>
            {text}
            <span className="cursor">|</span>
        </span>
    );
};

function App() {
    return (
        <div className="app-content">
            <div className="hero-wrapper">
                <section className="profile">
                    <div className="profil-dekoracja" />
                    <a
                        href="https://github.com/JexxyPL"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src="https://avatars.githubusercontent.com/u/164803938"
                            alt="JexxyPL GitHub avatar"
                        />
                    </a>
                </section>

                <div className="hero-tekst">
                    <h1 className="introduce" translate="no" lang="zxx">
                        I'm a{" "}
                        <span className="highlight">
                            <TypingText
                                words={[
                                    "Programmer",
                                    "Technician",
                                    "Web Developer",
                                ]}
                            />
                        </span>
                    </h1>
                    <p className="introduce-sub">
                        Server administrator · Student · Open-source enthusiast
                    </p>

                    <section
                        className="about-sekcja"
                        style={{ marginTop: "clamp(1.5rem, 2.5vh, 2.5rem)" }}>
                        <p className="sekcja-naglowek">{"</ About Me / >"}</p>
                        <div className="o-mnie-siatka">
                            <div className="o-mnie-kafelek">
                                <span className="kafelek-ikona">🖥️</span>
                                <p>
                                    Young server administrator specializing in
                                    network and server management & maintenance.
                                </p>
                            </div>
                            <div className="o-mnie-kafelek">
                                <span className="kafelek-ikona">🎓</span>
                                <p>
                                    Studying Computer & Electronics Technology,
                                    doing web development as a hobby on the
                                    side.
                                </p>
                            </div>
                            <div className="o-mnie-kafelek">
                                <span className="kafelek-ikona">🐧</span>
                                <p>
                                    Linux and open-source enthusiast. I enjoy
                                    programming — even if I'm not amazing at it
                                    yet.
                                </p>
                            </div>
                            <div className="o-mnie-kafelek">
                                <span className="kafelek-ikona">⏳</span>
                                <p>
                                    Still in school, projects might take a bit
                                    longer — but I always give it my best!
                                </p>
                            </div>
                        </div>

                        <section className="socials">
                            <a
                                href="https://github.com/JexxyPL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="soc">
                                <Github className="soc-ikona" />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://steamcommunity.com/id/JexxyPL/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="soc">
                                <Gamepad2 className="soc-ikona" />
                                <span>Steam</span>
                            </a>
                            <a
                                href="https://www.youtube.com/@JexxyPL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="soc">
                                <Youtube className="soc-ikona" />
                                <span>YouTube</span>
                            </a>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;
