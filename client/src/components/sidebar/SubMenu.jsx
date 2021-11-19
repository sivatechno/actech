import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SubMenu = (item) => {
    const [subnav,setSubNav] = useState(false);
    const showSubNav = () => setSubNav(!subnav)
    return (
        <div>
            <div to={item.path} onClick={item.subNav && showSubNav}>
                {item.icon}
                <div>
                    {item.title}
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.SubNav ? item.iconClosed : null}
                </div>
            </div>
            {subnav && item.subNav.map((item,index) => {
                return(
                    <div>
                        <Link to={item.path} key={index}>
                            {item.icon}
                            {item.title}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default SubMenu;