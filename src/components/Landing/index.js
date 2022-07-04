import BackgroundParticles from "../Particles/particles"
import './index.scss'
import PastWork from "../Past-Work"
import About from "../About"
function Landing() {
    return(
        <div className='landing-page-container'>
            <BackgroundParticles/>
            <About />
        </div>
    )
}


const Banner =()=>{
    return(
        <div className='banner'>
            <BackgroundParticles />
        </div>
    )
}

export default Landing