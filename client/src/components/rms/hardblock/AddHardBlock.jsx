import React, { useEffect } from 'react';
import './AddHardBlock.scss';
import * as AiIcons from 'react-icons/all';
import { Select } from 'antd';
import config from '../../config/config';
import axios from 'axios';

function AddHardBlock({ closeModule }) {

    const { Option } = Select;
    const [defaultProject, setDefaultProject] = React.useState('');
    const [addUser, setAddUser] = React.useState('');

    const [name, setName] = React.useState('');
    const [technology, setTechnology] = React.useState('');
    const [project, setProject] = React.useState('');
    const [mail, setMail] = React.useState('');

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    useEffect(() => {

        axios.get(`${config.API_URL}/blocks/getproject`).then((response) => {
            setDefaultProject(response.data);
        });

    }, []);

    useEffect(() => {

        axios.get(`${config.API_URL}/blocks/addhardblockuser`).then((response) => {
            setAddUser(response.data);
        });

    }, []);

    const AddHardBlock = (e) => {
        e.preventDefault();
        axios.get(`${config.API_URL}/blocks/addhardblock`, {
            

        }).then((response) => {
        })

    }



    return (
        <div>
            <div className='addhard_overall_div'>
                <div className="add_hard_overall">
                    <div className="add_hard_inner">
                        <div className="add_hard_head">
                            <p className="add_hard_header">ADD Hard Block</p>
                            < AiIcons.CgClose className="add_hard_close" onClick={() => { closeModule(false) }} />

                        </div>
                        {console.log('defaultProject', addUser)}
                        <form>
                            <div className="add_hard_inner_body">
                                <div className="add_hard_content" >
                                    <p className="add_hard_text">Name*</p><br />
                                    <div className="add_hard_field_contain">
                                        <div className="add_hard_feild">

                                            <i><AiIcons.FaRegUserCircle className="add_hard_icons" /></i>

                                            <Select
                                                showSearch
                                                className="textfield"
                                                placeholder="Name"
                                                optionFilterProp="children"
                                                onChange={onChange}
                                                onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                {addUser && addUser.map((item) => {
                                                    return (
                                                        <>
                                                            <Option value={item.firstname + item.lastname}></Option>
                                                        </>
                                                    )
                                                })}
                                            </Select>,

                                        </div>
                                    </div>

                                </div>

                                <div className="add_hard_content" >
                                    <p className="add_hard_text">Email*</p><br />
                                    <div className="add_hard_field_contain">
                                        <div className="add_hard_feild">
                                            <i><AiIcons.SiMicrosoftoffice className="add_hard_icons" /></i>
                                            <Select
                                                showSearch
                                                className="textfield"
                                                placeholder="Email"
                                                optionFilterProp="children"
                                                onChange={(value) => { setMail(value); }, { onChange }}
                                                onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                {addUser && addUser.map((item) => {
                                                    return (
                                                        <>
                                                            <Option value={item.email}></Option>
                                                        </>
                                                    )
                                                })}
                                            </Select>,
                                            {console.log('mail', mail)}
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="add_hard_inner_body">
                                <div className="add_hard_content" >
                                    <p className="add_hard_text">Technology*</p><br />
                                    <div className="add_hard_field_contain">
                                        <div className="add_hard_feild">
                                            <i><AiIcons.SiGmail className="add_hard_icons" /></i>

                                            <input type="text" className="textfield" placeholder="Technology" required name="technologyname" onChange={(value) => { setTechnology(value); }, { onChange }} />

                                        </div>
                                    </div>

                                </div>
                                <div className="add_hard_content" >
                                    <p className="add_hard_text">Project*</p><br />
                                    <div className="add_hard_field_contain">
                                        <div className="add_hard_feild">
                                            <i><AiIcons.MdOutlineLocalPhone className="add_hard_icons" /></i>
                                            <Select
                                                showSearch
                                                className="textfield"
                                                placeholder="Projects"
                                                optionFilterProp="children"
                                                onChange={(value) => { setProject(value); }, { onChange }}
                                                onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                {defaultProject && defaultProject.map((item) => {
                                                    return (
                                                        <>
                                                            <Option value={item.default_projects}></Option>
                                                        </>
                                                    )
                                                })}
                                            </Select>,
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="add_hard_buttons">
                                <button className="hard_cancel_btn" onClick={() => { closeModule(false) }}>Cancel</button>
                                <button className="hard_add_btn">Add HardBlock</button>
                            </div>
                        </form>

                    </div>


                </div>
            </div>
        </div>

    );
}

export default AddHardBlock;
