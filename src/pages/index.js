// pages/index.js
import Navbar from '@/components/Header/Navbar/Navbar';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';



export default function Home() {
  return (
    <div className='home'>
         <header class="navbar">
        <Navbar/>
    </header>

      <Header/>
      <div className='home-desc green'>
        <h1 style={{display:"none"}}>Welcome to Sociolite</h1> <h2>Tools & Games for Social Growth.</h2>
        <p className=''>Struggling to speak up? Stuck in awkward moments? Unsure how to navigate social situations? Sociolite helps you ditch the cringe and talk with confidence—through games, smart tools, and real-world practice. 
          No fluff, just social skills that actually work.</p>
      </div>
      <Main/>
        {/* <svg viewBox="0 0 800 250" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
       
  <g class="background">
    <rect width="1600" height="250" fill="#87CEEB" /> 
    <ellipse cx="800" cy="220" rx="800" ry="80" fill="#2E8B57" /> 
    <circle cx="1300" cy="50" r="30" fill="white" /> 
  </g>

  <g class="foreground">
    <rect y="230" width="1600" height="20" fill="#2E8B57" />
  </g>

  <g class="character">
    <circle cx="400" cy="90" r="20" fill="tan" /> 
    <polygon points="390,100 410,100 415,160 385,160" fill="brown" /> 
    
    <g class="upper-arm" transform="translate(385,120)">
      <rect width="15" height="40" fill="tan" />
      <g class="forearm" transform="translate(0,40)">
        <rect width="15" height="40" fill="tan" />
      </g>
    </g>
    <g class="upper-arm" transform="translate(415,120)">
      <rect width="15" height="40" fill="tan" />
      <g class="forearm" transform="translate(0,40)">
        <rect width="15" height="40" fill="tan" />
      </g>
    </g>
    <g class="thigh" transform="translate(390,160)">
      <rect width="20" height="50" fill="blue" />
      <g class="shin" transform="translate(0,50)">
        <rect width="20" height="50" fill="blue" />
      </g>
    </g>
    <g class="thigh" transform="translate(410,160)">
      <rect width="20" height="50" fill="blue" />
      <g class="shin" transform="translate(0,50)">
        <rect width="20" height="50" fill="blue" />
      </g>
    </g>
  </g>
        </svg> */}
    </div>
  );
}
