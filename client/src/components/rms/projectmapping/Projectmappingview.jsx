import React from 'react';
import './Projectmappingview.scss'

function Projectmappingview() {
  return (
    <div>

      <div className='proj_mapping_overall_contain'>

        <div className='proj_mapping_table_head_contain'>

          <p className='proj_mapping_table_head_text'>Project Maping View</p>
          <button className='proj_mapping_table_head_button'>Map Project</button>
          
        </div>

        <div className='proj_mapping_table_body_contain'>

          <table className='proj_mapping_table'>

            <thead className='proj_mapping_table_thead'>

              <tr className='proj_mapping_table_head'>

                <th>Client Name</th>
                <th>Project Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>status</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody className='proj_mapping_table_tbody'>

              <tr className='proj_mapping_table_body'>

                <td>Google</td>
                <td>AI</td>
                <td>22-01-2022</td>
                <td>22-12-2022</td>
                <td>Enable</td>
                <td>Enable</td>

              </tr>

              <tr className='proj_mapping_table_body'>

                <td>Google</td>
                <td>AI</td>
                <td>22-01-2022</td>
                <td>22-12-2022</td>
                <td>Enable</td>
                <td>Enable</td>

              </tr>

              <tr className='proj_mapping_table_body'>

                <td>Google</td>
                <td>AI</td>
                <td>22-01-2022</td>
                <td>22-12-2022</td>
                <td>Enable</td>
                <td>Enable</td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
  
};

export default Projectmappingview;
