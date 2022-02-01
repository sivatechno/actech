import React,{ useEffect,useState } from 'react';
import './ViewHardBlock.scss';
import { useDispatch,useSelector } from "react-redux"
import { viewDefaultProject } from '../../../store/actions/hardBlockActions'

function ViewHardBlock(users) {
  
  

  const dispatch = useDispatch();
  


  useEffect(() =>{
    dispatch(viewDefaultProject())
  },[dispatch])


  // const usersData = useSelector((state) => state.usersData)
  const usersData = useSelector(function(state){
    return state.hardblock  })

  console.log("state",usersData);


  return( 
  <div>
   <div className='viewhardblockoverallcontainer'> 
      <div className='viewhardblockheader'>
        <p className='viewhardblocktext'>View Hard Block</p>
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
      </table>
    </div>
   </div>
  </div>
  );
}

export default ViewHardBlock;