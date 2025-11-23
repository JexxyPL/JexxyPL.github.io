import './App.css'
import gitlogo from './assets/gith.png';
import ytlogo from './assets/yt.png';
import steamlogo from './assets/steam.png';
import { useState, useEffect } from 'react';
const TypingText = ({ words, speed = 150, pause = 1000 }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex(wordIndex + 1);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return <span>{text}<span className="cursor">|</span></span>;
};
function App() {
  return (
    <div className="app-content">
      <section className="profile">
         <a href="https://github.com/JexxyPL" target="_blank" rel="noopener noreferrer">
          <img
            src="https://avatars.githubusercontent.com/u/164803938"
            alt="pfp from github"
          />
        </a>
        <h1 className='introduce' translate='no' lang="zxx">
          I'm a <span className="highlight">
            <TypingText words={['Programmer', 'Technician', 'Web Developer']} />
          </span>
        </h1>
      </section>
      <section className="about">
        <h1 className='highlight'>{"</ About Me / >"}</h1>
        <section className="textabout">
          <h2>Young server administrator, who specializes in network / server managment / maintentance</h2>
          <h2>I study Computer Engineering and Electronics but in meantime as a hobby I do web development</h2>
          <h2>I also like programming in general, but I'm not very good at it. Linux and Open source enthusiast</h2>
          <h2>Still at school, so It might take me longer to make / commit projects, but I'll try my best!</h2>
          <h2>You can find me Here</h2>
        </section>
        <section className="socials">
          <a href="https://github.com/JexxyPL" target="_blank" rel="noopener noreferrer"><img src={gitlogo} alt="git" srcset="" className="soc" /></a>
          <a href="https://steamcommunity.com/id/JexxyPL/" target="_blank" rel="noopener noreferrer"><img src={steamlogo} alt="discord" srcset="" className="soc" /></a>
          <a href="https://www.youtube.com/@JexxyPL" target="_blank" rel="noopener noreferrer"><img src={ytlogo} alt="youtube" srcset="" className="soc" /></a>
        </section>
      </section>
    </div>
  )
}

export default App
