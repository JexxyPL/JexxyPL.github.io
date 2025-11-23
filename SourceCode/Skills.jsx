import cpplogo from './assets/cpp.png';
import cslogo from './assets/csharp.png';
import jslogo from './assets/js.png';
import reactlogo from './assets/react.png';
import htmllogo from './assets/html.png';
import csslogo from './assets/css.png';
import './App.css'
import './Skills.css'
function Skills() {
    return (
        <div className='app-content'>
            <h1 className='highlight'>{"</ My Skills / >"}</h1>
            <section className="skills" translate='no' lang="zxx">
                 <a href="https://www.codecademy.com/learn/learn-c-plus-plus" target="_blank" rel="noopener noreferrer">
                 <section className="skill">
                    <img className='lang' src={cpplogo} alt="" srcset="" />
                    <h3>C++</h3>
                    <div className="progressbar">
                        <span>Intermediate</span>
                        <div className="progresscpp"></div>
                    </div>
                </section></a>
                 <a href="https://www.codecademy.com/learn/learn-c-sharp" target="_blank" rel="noopener noreferrer">
                 <section className="skill">
                    <img className='lang' src={cslogo} alt="" srcset="" />
                    <h3>CSharp</h3>
                    <div className="progressbar">
                        <span>Intermediate</span>
                        <div className="progresscs"></div>
                    </div>
                </section></a>
                <a href="https://www.codecademy.com/learn/react-101" target="_blank" rel="noopener noreferrer">
                <section className="skill">
                    <img className='lang' src={reactlogo} alt="" srcset="" />
                    <h3>React</h3>
                    <div className="progressbar">
                        <span>Novice</span>
                        <div className="progressreact"></div>
                    </div>
                </section></a>
                <a href="https://www.codecademy.com/learn/learn-html" target="_blank" rel="noopener noreferrer">
                <section className="skill">
                    <img className='lang' src={htmllogo} alt="" srcset="" />
                    <h3>HTML</h3>
                    <div className="progressbar">
                        <span>Professional</span>
                        <div className="progresshtml"></div>
                    </div>
                </section></a>
                <a href="https://www.codecademy.com/learn/learn-css" target="_blank" rel="noopener noreferrer">
                <section className="skill">
                    <img className='lang' src={csslogo} alt="" srcset="" />
                    <h3>CSS</h3>
                    <div className="progressbar">
                        <span>Expert</span>
                        <div className="progresscss"></div>
                    </div>
                </section></a>
                <a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank" rel="noopener noreferrer">
                <section className="skill">
                    <img className='lang' src={jslogo} alt="" srcset="" />
                    <h3>Javascript</h3>
                    <div className="progressbar">
                        <span>Intermediate</span>
                        <div className="progressjs"></div>
                    </div>
                </section></a>
            </section>
        </div>
    )
}

export default Skills