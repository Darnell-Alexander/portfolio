import { NavLink } from 'react-router-dom';
import './index.scss'


const Menu =()=>{ 
    return(
        <div className='menu'>
            <div className = 'nav' >
                <NavLink exact='true' activeclassname="active" to='/'>
                    <h1>Home</h1>
                </NavLink>
                <NavLink activeclassname="active" to='home'>
                    <h1>Home</h1>
                </NavLink>
                <NavLink activeClassName="active" to='home'>
                    <h1>Home</h1>
                </NavLink>
                <NavLink activeClassName="active" to='home'>
                    <h1>Home</h1>
                </NavLink>
            </div>
        </div>
    )
}

export default Menu;