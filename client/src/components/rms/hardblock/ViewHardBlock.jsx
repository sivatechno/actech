import React from 'react';
import './ViewHardBlock.scss';

function ViewHardBlock() {
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
            <th>Project</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
        <tr className='hardblocktr'>
          <td>vaishnavi</td>
          <td>React</td>
          <td>Website</td>
          <td>01/01/2022</td>
          <td>21/11/2022</td>
        </tr>
        <tr className='hardblocktr'>
          <td>vaishnavi</td>
          <td>React</td>
          <td>Website</td>
          <td>01/01/2022</td>
          <td>21/11/2022</td>
        </tr>
        <tr className='hardblocktr'>
          <td>Vaishnavi</td>
          <td>React</td>
          <td>Website</td>
          <td>01/01/2022</td>
          <td>21/11/2022</td>
        </tr>
        <tr className='hardblocktr'>
          <td>vaishnavi</td>
          <td>React</td>
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