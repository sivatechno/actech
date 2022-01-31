import React from 'react';
import './ViewSoftBlock.scss';

function ViewSoftBlock() {
  return( 
  <>
   <div className='viewsoftblockcontainer'> 
      <div className='viewsoftblockheader'>
       <p className='viewsoftblocktext'>View Soft Block</p>
        {/* <button className='viewsoftblockbtn'>Soft Block</button> */}
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
      </table>
    </div>
   </div>
  </>
  );
}

export default ViewSoftBlock;
