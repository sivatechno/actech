import React from 'react'
import { useParams } from 'react-router';
export default function PageNotFound() {
    const params=useParams();
    return (
        <div>
            <h1>{params.pathname} Page not found</h1>
        </div>
    )
}
