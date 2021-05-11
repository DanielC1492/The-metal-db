import background from '../../img/background-concert.jpg';
import React from 'react';
import {useHistory} from 'react-router-dom';
import { Navbar, NavbarProfile } from '../../Components/Navbar/Navbar';
import {connect} from 'react-redux';

const Band = (props) => {
    console.log(props);
    const history = useHistory();

    return (
    <>
        <Navbar></Navbar>
        <div className='bandContainer' style={{ backgroundImage: `url(${background})`}} >
            <div className='bandForm'>
                <div className='bandLeft'>
                    <div className='bandImg'>{props.data}</div>
                </div>
                <div className='bandRight'>
                    <div className='bandName'></div>
                    <div className='bandGenre'></div>
                    <div className='bandCountry'></div>
                </div>
            </div>
            
            

        </div>
    </>
    )
}

export default connect() (Band);
