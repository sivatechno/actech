import React,{useState} from 'react';
import{ Link } from 'react-router-dom';
import './SubMenu.scss';

const SubMenu = ({item}) =>{
    const [subNav, setSubNav] = useState(false);
    const showSubNav = () => setSubNav(!subNav);
    return (
        <div className='side'>
            <Link to={item.path} onClick={item.subNav && showSubNav} className="nav-side" >
                <div>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                                <div>
                                  {item.subNav && subNav 
                                   ? item.iconOpened 
                                   : item.subNav 
                                   ? item.iconClosed 
                                   : null}
                                  </div>

            </Link>
            
            {subNav && item.subNav.map((item, index) => {
                return(
                    <div className="dropdown-bar">
                    <Link to={item.path} key={index} className='dropdown'>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  </div>
                );
            })}
            
        </div>
    );
};

export default SubMenu;
