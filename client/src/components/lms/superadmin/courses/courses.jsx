import React, { Component } from 'react';
import '../Pages/courses.scss';
import * as AiIcons from 'react-icons/all';
class Courses extends Component {
    render() {
        return (
            <div>
                <div class="main">
                <div class="section1">
                    <div><ion-icon name="menu"></ion-icon>Viewing Courses</div>
                </div>
                <hr/>
        <div class="section2">
            <table>
                <tr>
                    <th>Course Name</th>
                    <th>Course Description</th>
                    <th>Fees</th>
                    <th>Action</th>
                </tr>
                <tr>
                        <td>Snow Flake</td>
                        <td>SnowFlake is an Data ware house system used for Analytical purpose<br/>
                        Snow Flake is an Which runs on AWS/GCP/AZURE System</td>
                        <td>$0.USD</td>
                        <td class="icons">
                  <i><AiIcons.GrEdit/></i>
                  <i class="delete"><AiIcons.MdDelete/></i>
                  <i><AiIcons.BsFillEyeSlashFill/></i>
                    </td>
                    </tr>
                    <tr>
                        <td>AWS Cloud</td>
                        <td>AWS Cloud</td>
                        <td>$0.USD</td>
                        <td class="icons">
                  <i><AiIcons.GrEdit/></i>
                  <i class="delete"><AiIcons.MdDelete/></i>
                  <i><AiIcons.BsFillEyeSlashFill/></i>
                    </td>
                    </tr>
                
            </table>
                   
        </div>
    </div>
            </div>
        );
    }
}

export default Courses;
