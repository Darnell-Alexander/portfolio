import { NavLink } from 'react-router-dom';
import './index.scss'


const Menu =()=>{ 
    return(
        <div className='menu'>
            <div className = 'nav' >
                <NavLink exact='true' activeclassname="active" to='/'>
                    <h1>HOME</h1>
                </NavLink>
                <NavLink activeclassname="active" to='/about'>
                    <h1>ABOUT</h1>
                </NavLink>
                <NavLink activeClassName="active" to='home'>
                    <h1>CONTACT</h1>
                </NavLink>
                <NavLink activeClassName="active" to='home'>
                    <h1>PROJECTS</h1>
                </NavLink>
            </div>
        </div>
    )
}

export default Menu;