import React, { useEffect, useState } from 'react';
import './ViewHardBlock.scss';
import { useDispatch, useSelector } from "react-redux"
import { viewHardBlock } from '../../../store/actions/hardBlockActions'
import { Table, Input, Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';
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
    height: '80%',
    width: '70%',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    overflow: 'hidden',
  },

};



function ViewHardBlock(users) {



  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(viewDefaultProject())
  // }, [dispatch])

  useEffect(() => {
    dispatch(viewHardBlock())
  }, [dispatch])

  // const usersData = useSelector((state) => state.usersData)
  // const projectdefault = useSelector(function (projects) {
  //   return projects.hardblock
  // })

  const hardblockdata = useSelector(function (state) {
    return state.hardblock.data
  })

  const hardblockproject = useSelector(function (state) {
    return state.hardblock.data
  })


  // console.log("overal", hardblockdata)
  // console.log("state", hardblockproject);




  const columns = [
    {
      title: "Name",
      dataIndex: 'firstname',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Type text here'
              value={selectedKeys[0]}

              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });

              }}
              onPressEnter={() => { confirm(); }}
              style={{ marginBottom: 8, display: 'block' }}

              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm()
              }}
              icon={<SearchOutlined />}
              type='primary'>Search</Button>

            <Button onClick={() => { clearFilters(); }} type='danger' >Reset</Button>


          </>
        );
      },
      filterIcon: (filtered) => {
        return <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />;
      },

      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase())
      }

    },
    {
      title: "Technology",
      dataIndex: 'primaryskill',
    },
    {
      title: "Email",
      dataIndex: 'email',
    },
    {
      title: "Project",
      dataIndex: 'HardBlocks',
      render: HardBlocks => (
        <>
          {HardBlocks.map(HardBlocks => {
            return (
              <div>
                {HardBlocks.project}
              </div>
            );
          })}
        </>
      ),

    },
    {
      title: "Start Date",
      dataIndex: 'HardBlocks',
      render: HardBlocks => (
        <>
          {HardBlocks.map(HardBlocks => {
            return (
              <div>
                {HardBlocks.start_date}
              </div>
            );
          })}
        </>
      ),

    },
    {
      title: "End Date",
      dataIndex: 'HardBlocks',
      render: HardBlocks => (
        <>
          {HardBlocks.map(HardBlocks => {
            return (
              <div>
                {HardBlocks.end_date}
              </div>
            );
          })}
        </>
      ),

    }
  ]


  return (
    <>
      <div className='viewhardblockcontainer'>
        <div className='viewhardblockheader'>
          <div className='viewhardblockhead'>
            <p className='viewhardblock-title'>View Hard Block</p>
            <button className='viewhardblockbtn' onClick={() => { setIsOpen(true); }}>Hard Block </button>

          </div>
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal">
            {<AddHardBlock closeModule={setIsOpen} />}

          </Modal>

          <Table style={{ width: "80%", margin: "0 auto " }} columns={columns} dataSource={hardblockdata}>


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