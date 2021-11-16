import React from 'react'
import * as FaIcons  from "react-icons/fa";
import * as AiIcons  from "react-icons/ai";
import * as FiIcons  from "react-icons/fi";
import * as RiIcons  from "react-icons/ri";
import * as HiIcons  from "react-icons/hi";
import * as GrIcons  from "react-icons/gr";
import * as ImIcons  from "react-icons/im";
import * as TiIcons  from "react-icons/ti";
import * as MdIcons  from "react-icons/md";
export const AdminSidebar = [
    {
      title: 'User Manager',
      path:'/',
      icon: <FiIcons.FiUsers/>,
      iconClosed:<MdIcons.MdKeyboardArrowDown/>,
      iconOpened:<MdIcons.MdKeyboardArrowUp/>,
      cName:'nav-text',
      subNav: [
        {
          title:'Staff',
          path:'/staff',
          icon:<FiIcons.FiUser/>,
          cName:'dropdown-text'
        },
        {
          title:'Students',
          path:'/students',
          icon:<FiIcons.FiUser/>,
          cName:'dropdown-text'
        },
      ]
    },
    {
        title: 'Course Exams',
        path:'/course',
        icon: <ImIcons.ImFilesEmpty/>,
        iconClosed:<MdIcons.MdKeyboardArrowDown/>,
        iconOpened:<MdIcons.MdKeyboardArrowUp/>,
        cName:'nav-text' ,
        subNav:[
          {
            title:'Manage Courses',
            path:'/managecourse',
            icon:<RiIcons.RiFileCopy2Line/>,
            cName:'dropdown-text'
          },
          {
            title:'Manage Exams',
            path:'/manageexams',
            icon:<RiIcons.RiFileListLine/>,
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
            icon:<HiIcons.HiOutlineTrendingUp/>,
            cName:'dropdown-text'
          },
    
        ]
    },
    {
      title: 'Enrollment',
      path:'/enrollment',
      icon: <FaIcons.FaBuffer/>,
      iconClosed:<MdIcons.MdKeyboardArrowDown/>,
      iconOpened:<MdIcons.MdKeyboardArrowUp/>,
      cName:'nav-text',
      subNav: [
        {
          title:'Enroll',
          path:'/roll',
          icon:<TiIcons.TiArrowShuffle/>,
          cName:'dropdown-text'
        },
      ]
    },
    {
      title: 'Contents',
      path:'/contents',
      icon: <AiIcons.AiOutlineContainer/>,
      iconClosed:<MdIcons.MdKeyboardArrowDown/>,
      iconOpened:<MdIcons.MdKeyboardArrowUp/>,
      cName:'nav-text',
      subNav:[
        {
          title:'Resource Categories',
          path:'/resourcecategories',
          icon:<RiIcons.RiFileCopy2Line/>,
          cName:'dropdown-text'
        },
        {
          title:'Resource Items',
          path:'/resourceitems',
          icon:<RiIcons.RiFileListLine/>,
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
          icon:<HiIcons.HiOutlineTrendingUp/>,
          cName:'dropdown-text'
        },
      ]
    },
    {
      title: 'System Setting',
      path:'/system',
      icon: <GrIcons.GrSystem/>,
      iconClosed:<RiIcons.RiArrowDownSFill/>,
      iconOpened:<RiIcons.RiArrowUpSFill/>,
      cName:'nav-text',
      subNav:[
        {
          title:'System Configuration',
          path:'/systemconfig',
          icon:<GrIcons.GrSettingsOption/>,
          cName:'dropdown-text'
        },
        {
          title:'Database Backup',
          path:'/databasebackup',
          icon:<FiIcons.FiDatabase/>,
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