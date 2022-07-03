import BackgroundParticles from "../../particles"
import './index.scss'
import PastWork from "../Past-Work"
function Landing() {
    return(
        <div className='landing-page-container'>
           <PastWork />
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