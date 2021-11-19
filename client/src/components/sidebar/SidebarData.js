import React from 'react'
import * as AiIcons  from "react-icons/all";

export const SidebarData = [
    {
      title: 'User Manager',
      path:'/',
      icon: <AiIcons.FiUsers/>,
      iconClosed:<AiIcons.MdKeyboardArrowDown/>,
      iconOpened:<AiIcons.MdKeyboardArrowUp/>,
      cName:'nav-text',
      subNav: [
        {
          title:'Staff',
          path:'/staff',
          icon:<AiIcons.FiUser/>,
          cName:'dropdown-text'
        },
        {
          title:'Students',
          path:'/students',
          icon:<AiIcons.FiUser/>,
          cName:'dropdown-text'
        },
      ]
    },
    {
        title: 'Course Exams',
        path:'/course',
        icon: <AiIcons.ImFilesEmpty/>,
        iconClosed:<AiIcons.MdKeyboardArrowDown/>,
        iconOpened:<AiIcons.MdKeyboardArrowUp/>,
        cName:'nav-text' ,
        subNav:[
          {
            title:'Manage Courses',
            path:'/managecourse',
            icon:<AiIcons.RiFileCopy2Line/>,
            cName:'dropdown-text'
          },
          {
            title:'Manage Exams',
            path:'/manageexams',
            icon:<AiIcons.RiFileListLine/>,
            cName:'dropdown-text'
          },
          {
            title:'Manage Question',
            path:'/managequestion',
            icon:<AiIcons.AiOutlineFolderOpen/>,
            cName:'dropdown-text'
          },
          {
            title:'Add Question',
            path:'/add',
            icon:<AiIcons.AiOutlineFileAdd/>,
            cName:'dropdown-text'
          },
          {
            title:'Results',
            path:'/results',
            icon:<AiIcons.HiOutlineTrendingUp/>,
            cName:'dropdown-text'
          },
    
        ]
    },
    {
      title: 'Enrollment',
      path:'/enrollment',
      icon: <AiIcons.FaBuffer/>,
      iconClosed:<AiIcons.MdKeyboardArrowDown/>,
      iconOpened:<AiIcons.MdKeyboardArrowUp/>,
      cName:'nav-text',
      subNav: [
        {
          title:'Enroll',
          path:'/roll',
          icon:<AiIcons.TiArrowShuffle/>,
          cName:'dropdown-text'
        },
      ]
    },
    {
      title: 'Contents',
      path:'/contents',
      icon: <AiIcons.AiOutlineContainer/>,
      iconClosed:<AiIcons.MdKeyboardArrowDown/>,
      iconOpened:<AiIcons.MdKeyboardArrowUp/>,
      cName:'nav-text',
      subNav:[
        {
          title:'Resource Categories',
          path:'/resourcecategories',
          icon:<AiIcons.RiFileCopy2Line/>,
          cName:'dropdown-text'
        },
        {
          title:'Resource Items',
          path:'/resourceitems',
          icon:<AiIcons.RiFileListLine/>,
          cName:'dropdown-text'
        },
        {
          title:'Add Resource Item',
          path:'/addresourceitem',
          icon:<AiIcons.AiOutlineFolderOpen/>,
          cName:'dropdown-text'
        },
        {
          title:'Manage FAQs',
          path:'/managefaq',
          icon:<AiIcons.AiOutlineFileAdd/>,
          cName:'dropdown-text'
        },
        {
          title:'Add FAQ Item',
          path:'/addfaqitem',
          icon:<AiIcons.HiOutlineTrendingUp/>,
          cName:'dropdown-text'
        },
      ]
    },
    {
      title: 'System Setting',
      path:'/system',
      icon: <AiIcons.GrSystem/>,
      iconClosed:<AiIcons.RiArrowDownSFill/>,
      iconOpened:<AiIcons.RiArrowUpSFill/>,
      cName:'nav-text',
      subNav:[
        {
          title:'System Configuration',
          path:'/systemconfig',
          icon:<AiIcons.GrSettingsOption/>,
          cName:'dropdown-text'
        },
        {
          title:'Database Backup',
          path:'/databasebackup',
          icon:<AiIcons.FiDatabase/>,
          cName:'dropdown-text'
        },
        {
          title:'Email Manager',
          path:'/emailmanager',
          icon:<AiIcons.AiOutlineMail/>,
          cName:'dropdown-text'
        },
      ]
    },
]