import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import * as FaIcons  from "react-icons/fa";
import * as BiIcons  from "react-icons/bi";
import SubMenu from '../sidebar/SubMenu'
import { AdminSidebar } from '../sidebar/AdminSidebar';
import './Navbar.scss';
import{IconContext} from'react-icons';



function Navbar() {
    const[sidebar,setSidebar] = useState(false)
    const showSidebar =() => setSidebar(!sidebar);
    // const [submenu,setSubmenu] = useState(false);
    // const showSubmenu = () => setSubmenu(!submenu);

    return (
        <>
        <IconContext.Provider value={{color:'black'}}>
                <div className='navbar'>
           
                 <Link to='#' className='menu-bars'>
                 <FaIcons.FaBars onClick={showSidebar}/>
                 </Link>
              </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className= 'nav-menu-items' >
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                           <BiIcons.BiMenuAltRight onClick={showSidebar}/>
                    </Link>
                </li>
                {AdminSidebar.map((item, index) =>
                {
                 return <SubMenu key={index} item={item}/>;
        
                })}
            </ul>
        </nav>
       
        </IconContext.Provider>
     </>
        
    );
}

export default Navbar;
