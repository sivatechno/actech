import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function ProfileViewMentee() {
    let {id} = useParams();

    useEffect(() =>{
        axios.get(`http://localhost:5000/mentors/${id}`).then((response)=>{
            console.log(response);
        });
    });
    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}
