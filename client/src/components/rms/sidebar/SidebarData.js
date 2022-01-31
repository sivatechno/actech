import React from 'react'
import * as AiIcons  from "react-icons/all";

export const SidebarData = [
  {
    title:'DASHBOARD',
    path:'/Dashboardview',
  },
    {
      title: 'Associative',
      path:'/ViewAssociate',
      icon:<AiIcons.HiOutlineUserGroup/>,
    },
    {
      title: 'Client',
      path:'/ClientView',
      icon:<AiIcons.GrUserManager/>,
    },
    {
      title: 'Project',
      path:'/Projectprofileview',
      icon:<AiIcons.BiCodeBlock/>,
    },
    {
      title: 'Project Mapping',
      path:'/ProjectMappingView',
      icon:<AiIcons.GrMapLocation/>,
    },
     {
      title: 'Resource Handling',
      path:'',
      icon:<AiIcons.MdOutlinePersonOff/>,
      iconClosed:<AiIcons.AiFillCaretDown/> ,
      iconOpened:<AiIcons.AiFillCaretUp/>,
      subNav:[
        {
          title: 'Hard Block',
          path:'/HardBlock',
          icon:<AiIcons.BsLockFill/>,
        },
        {
          title: 'Soft Block',
          path:'/SoftBlock',
          icon:<AiIcons.BsLock/>,
        },
      ]
    },
    {
      title: 'Report',
      path:'',
      icon:<AiIcons.GoReport/>,
    },
]