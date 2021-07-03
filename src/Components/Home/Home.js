import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData.json'
import Card from '../Card/Card';
import './Home.css'

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
     useEffect(() =>{
         setVehicles(FakeData)
     },[])
    return (
        <div className='card'>
            {
                vehicles.map(vehicle => <Card vehicle={vehicle}></Card>)
            }
        </div>
    );
};

export default Home;