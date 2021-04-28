import React from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import  Dropdown  from '../../Components/Dropdown/Dropdown';
import axios from 'axios';

const Home = () => {

    const data = [
        {value: 1, name : 'A'},
        {value: 2, name : 'B'},
        {value: 3, name : 'C'},
        {value: 4, name : 'D'},
        {value: 5, name : 'E'},
        {value: 6, name : 'F'},
        {value: 7, name : 'G'}
    ]

    const [token, setToken] = useState('');

    const tokenData = axios.get('https://accounts.spotify.com/api/token',{
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic' + btoa(spotify.ClientId + ':' + spotify.ClientSecret )
        },
        data: 'grant_type=client_credentials',
        method: 'POST' 
    })
    .then(tokenResponse => {
        console.log(tokenResponse.data.access_token);
        setToken(tokenResponse.data.access_token);
    });
        console.log(tokenData);

    return (
    <>
        <Navbar/>
        <div className='homeContainer'>
            <div className='leftMid'>
                <div className='leftTop'>
                    <div className='search'>
                        <Dropdown options={data}/>
                        <button type='submit'>
                            Search
                        </button>
                    </div>
                   
                </div>
                <div className='leftBot'>
                    <div className='weeklySugest'></div>
                </div>
                
            </div>
            <div className='rightMid'>
                <div className='topBands'></div>
            </div>
        </div>

    </>
    )
}

export default Home
