import './index.scss'
import css from '../../Images/Icons/css.png'
import html from '../../Images/Icons/html.png'
import js from '../../Images/Icons/js.png'
import react from '../../Images/Icons/react.png'
import ux from '../../Images/Icons/ux-interface.png'
import sql from '../../Images/Icons/database.png'
import office from '../../Images/Icons/office.png'
import node from '../../Images/Icons/nodejs.png'

const About =()=>{
    return(
        <div className="about-container">
            <Skills />
        </div>
    )
}

const Sum =()=>{
    return(
        <div className="sum-box">
            <div className='top'>
                <h1>ABOUT ME</h1>
            </div>
            <div className="text">
                <p>
                    Lets start with a little about me personally. 
                    I have been in love with computers & programming for most of my life.
                    Building my first static website in Middle School and doing my first freelance project as a freshman in college.
                    Unique projects are my favorite, like a big puzzle that just needs a different viewpoint.
                </p>
            </div>
        </div>
    )
}

const Skills =()=>{
    return(
        <div className="skills-container">
            <div className='top'>
                <h1>Skills</h1>
            </div>
            <div className="hard-skills">
                <div className='row'>
                    <i><img src={css}  alt='CSS3'/></i>
                    <i><img src={html} alt='HTML5' /></i>
                    <i><img src={js} alt='JavaScript' /></i>
                    <i><img src={react} alt="React" /></i>
                    <i><img src={sql}  alt='SQL'/></i>
                    <i><img src={node} alt='NodeJS' /></i>
                    <i><img src={office} alt='Office 365' /></i>
                    <i><img src={ux} alt="UI/UX Design" /></i>
                </div>
            </div>
            <div className="soft-skills">

            </div>
        </div>
    )
}

export default About;