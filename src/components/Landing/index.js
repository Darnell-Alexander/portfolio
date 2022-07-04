import BackgroundParticles from "../Particles/particles"
import './index.scss'
import PastWork from "../Past-Work"
import About from "../About"
import ContactForm from "../Contact-Form"
function Landing() {
    return(
        <div className='landing-page-container'>
            <Banner />
            <About />
            <h1 className="headers">Projects</h1>
            <PastWork />
            <h1 className="headers">Get In Contact</h1>
            <ContactForm />
        </div>
    )
}


const Banner =()=>{
    return(
        <span className='banner'>
            <div className='banner-text'>
                <h1>Hey, I'm Darnell</h1>
                <h2>Web Developer</h2>
                <h3>Frontend & React Specialist</h3>
            </div>
            <BackgroundParticles />
        </span>
    )
}

export default Landing