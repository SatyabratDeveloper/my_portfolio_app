import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <section id='home_page' className='section'>
        <Navbar />
        <Home />
      </section>
      <section id='profile_page' className='section'>
        <Profile />
      </section>
      <section id='skills_page' className='section'>
        <Skills />
      </section>
      <section id='projects_page' className='section'>
        <Projects />
      </section>
      <section id='contact_page' className='section'>
        <Contact />
      </section>
    </div>
  );
}

export default App;