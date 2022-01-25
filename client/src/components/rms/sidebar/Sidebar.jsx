import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'



const SidebarNav = styled.div`
width:250px;
height:calc(100% - 70px);
display:flex;
justify-content:center;

`
const SidebarWrap=styled .div`
width:100%;
`


const Sidebar = ()=> {
    return (
        <div>
            <SidebarNav>
                <SidebarWrap>
{SidebarData.map((item,index)=>{
    return <SubMenu item={item}key={index}/>;
})}
                </SidebarWrap>
            
            </SidebarNav>
        </div>
    )
}

export default Sidebar;