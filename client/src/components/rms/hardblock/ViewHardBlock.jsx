import React,{ useEffect,useState } from 'react';
import './ViewHardBlock.scss';
import { useDispatch,useSelector } from "react-redux"
import { viewDefaultProject } from '../../../store/actions/hardBlockActions'
import {Table, Input,Button} from "antd";
import {SearchOutlined } from '@ant-design/icons';
import Modal from 'react-modal';
import AddHardBlock from './AddHardBlock';


const customStyles = {
  content: {
      top: '54%',
      left: '58%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height:'80%',
      width:'70%',
      background:'transparent',
      border:'none',
      outline:'none',
      overflow:'hidden',
  },

};



function ViewHardBlock(users) {

  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
 
  useEffect(() =>{ 
    dispatch(viewDefaultProject())
  },[dispatch])


  // const usersData = useSelector((state) => state.usersData)
  const usersData = useSelector(function(state){
    return state.hardblock  })

  console.log("state",usersData);



  const [dataSource,setDataSource] = useState([
    {
      name:"Naresh",
      technology:"website",
      email:"naresh@gmail.com",
      startdate:"12/01/2021",
      enddate:"31/01/2022"

    },
    {
      name:"kumar",
      technology:"website",
      email:"naresh@gmail.com",
      startdate:"12/01/2021",
      enddate:"31/01/2022"

    },
    {
      name:"raj",
      technology:"website",
      email:"naresh@gmail.com",
      startdate:"12/01/2021",
      enddate:"31/01/2022"

    },
    {
      name:"ram",
      technology:"website",
      email:"naresh@gmail.com",
      startdate:"12/01/2021",
      enddate:"31/01/2022"

    },
    {
      name:"guna",
      technology:"website",
      email:"naresh@gmail.com",
      startdate:"12/01/2021",
      enddate:"31/01/2022"

    },
    {
      name:"ram",
      technology:"website",
      email:"naresh@gmail.com",
      startdate:"12/01/2021",
      enddate:"31/01/2022"

    }

  ]);
  const columns = [
    {
      title:"Name",
      dataIndex:'name',
      filterDropdown:({setSelectedKeys, selectedKeys,confirm, clearFilters }) => {
        return (
          <>
        <Input
         autoFocus
         placeholder='Type text here'
         value={selectedKeys[0]}
        
         onChange={(e)=>{
          setSelectedKeys(e.target.value? [e.target.value]: []);
          confirm({closeDropdown:false});
         
         }}
         onPressEnter={() => {confirm(); }}
         style={{ marginBottom: 8, display: 'block' }}
         
         onBlur= {() => {
           confirm();
         }}
         ></Input>
           <Button 
           onClick={()=>{
             confirm()
            }} 
            icon={<SearchOutlined/>}
           type='primary'>Search</Button>

          <Button onClick={()=>{clearFilters(); }} type='danger' >Reset</Button>

        
        </>
        );
      },
      filterIcon:(filtered) => {
        return <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }}/>;
      },
      
        onFilter:(value,record)=>{
          return record.name.toLowerCase().includes(value.toLowerCase())
        }
      
    },
    {
      title:"Technology",
      dataIndex:'technology',
    },
    {
      title:"Email",
      dataIndex:'email',
    },
    {
      title:"Project",
      dataIndex:'project',
    },
    {
      title:"Start Date",
      dataIndex:'startdate'

    },
    {
      title:"End Date",
      dataIndex:'enddate',
    }
  ]


  return( 
  <>
    <div className='viewhardblockcontainer'> 
      <div className='viewhardblockheader'>
        <div className='viewhardblockhead'>
         <p className='viewhardblock-title'>View Hard Block</p>
         <button className='viewhardblockbtn'onClick={()=>{setIsOpen(true);}}>Hard Block </button>

        </div>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal">
          {<AddHardBlock closeModule={setIsOpen}/>}

        </Modal>

      <Table style={{width:"80%", margin:"0 auto "}}columns={columns} dataSource={dataSource}>
          

          </Table>







        {/* <p className='viewhardblocktext'>View Hard Block</p>
        <button className='viewhardblockbtn'>Hard Block</button>
       </div>

     <div className='hardblockcontainer'>
      <table className='hardblocktable'>
        <thead>
          <tr className='hardblocktr'>
            <th>Name</th>
            <th>Technology</th>
            <th>Email</th>
            <th>Project</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <tr className='hardblocktr'>
          <td>Admin</td>
          <td>React</td>
          <td>Admin@gmail</td>
          <td>Website</td>
          <td>01/01/2022</td>
          <td>21/11/2022</td>
          
        </tr>
        </tbody>
      </table> */}
    </div>
   </div>
  </>
  );
}

export default ViewHardBlock;