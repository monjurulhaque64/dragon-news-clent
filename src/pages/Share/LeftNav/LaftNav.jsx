import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LaftNav = () => {

    const [catagoris, setCatagoris] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/catagoris')
        .then(res => res.json())
        .then(data => setCatagoris(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h4>All Catagory</h4>
            <div className='ps-4'>
            {
                catagoris.map(catagory => <p key={catagory.id}>
                    <Link to={`/catagory/${catagory.id}`} className='text-black text-decoration-none' >{catagory.name}</Link>
                </p>)
            }
            </div>
        </div>
    );
};

export default LaftNav;