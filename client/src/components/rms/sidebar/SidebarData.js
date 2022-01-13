import React from 'react'
import * as AiIcons  from "react-icons/all";

export const SidebarData = [
  {
    title:'RMS_DASHBOARD',
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
      title: 'Resource Blocking',
      path:'',
      icon:<AiIcons.MdOutlinePersonOff/>,
      iconClosed:<AiIcons.AiFillCaretDown/> ,
      iconOpened:<AiIcons.AiFillCaretUp/>,
      subNav:[
        {
          title: 'Hard Block',
          path:'/Project_profile',
          icon:<AiIcons.BsLockFill/>,
        },
        {
          title: 'Soft Block',
          path:'/Project_profile',
          icon:<AiIcons.BsLock/>,
        },
      ]
    },
    {
      title: 'Report',
      path:'',
      icon:<AiIcons.MdReportGmailerrorred/>,
    },
]