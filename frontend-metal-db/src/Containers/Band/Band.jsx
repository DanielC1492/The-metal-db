import background from '../../img/background-concert.jpg';
import React from 'react';
import {useHistory} from 'react-router-dom';
import { Navbar, NavbarProfile } from '../../Components/Navbar/Navbar';


const Band = (props) => {

    const history = useHistory();

    return (
    <>
        <Navbar></Navbar>
        <div className='bandContainer' style={{ backgroundImage: `url(${background})`}} >
            <div className='black'>
                <div className='bandsList'></div>
            </div>
        </div>
    </>
    )
}

export default Band;
