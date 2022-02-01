import React from 'react';
import './ViewSoftBlock.scss';
import {Table, Input,Button} from "antd";
import {SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
function ViewSoftBlock() {
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

    },
    {
      name:"guna",
      technology:"website",
      email:"naresh@gmail.com",
      startdate:"12/01/2021",
      enddate:"31/01/2022"

    },

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
         onPressEnter={() => {
           confirm();
         }}
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

          <Button
                     onClick={()=>{
             clearFilters();
          }} 
           type='danger'>Reset</Button>

        
        </>
        );
      },
      filterIcon:() => {
        return <SearchOutlined/>;
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
   <div className='viewsoftblockcontainer'> 
      <div className='viewsoftblockheader'>
        <Table style={{display:"flex", flex:1, margin:'40px auto',backgroundColor:'#3253e2',textAlign:'center' }}columns={columns} dataSource={dataSource}>
          

        </Table>








       {/* <p className='viewsoftblocktext'>View Soft Block</p>
        <button className='viewsoftblockbtn'>Soft Block</button>
       </div>
     <div className='softblockcontainer'>
      <table className='softblocktable'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Technology</th>
            <th>Project</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
        <tr className='softblockhover'>
          <td>Naresh</td>
          <td>React</td>
          <td>Facebook</td>
          <td>01/01/2022</td>
          <td>21/11/2022</td>
        </tr>
        <tr className='softblockhover'>
          <td>kumar</td>
          <td>Python</td>
          <td>Apple</td>
          <td>01/01/2022</td>
          <td>21/11/2022</td>
        </tr>
        <tr className='softblockhover'>
          <td>Tom</td>
          <td>React</td>
          <td>Tech</td>
          <td>01/01/2022</td>
          <td>21/11/2022</td>
        </tr>
        <tr className='softblockhover'>
          <td>Jerry</td>
          <td>Aws</td>
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

export default ViewSoftBlock;
