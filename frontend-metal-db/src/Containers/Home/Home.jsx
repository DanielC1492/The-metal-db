import React, { useState, useEffect } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import Dropdown from '../../Components/Dropdown/Dropdown';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import background from '../../img/background.jpg';
// import  Credentials  from '../../Credentials';

const Home = () => {


  const Credentials = () => {

    return { 
        ClientId: '71db2d6bf70e49f183678f5191ff85d0',
        ClientSecret: '1c32d5f87980445fa906aba039a1171b'
    }
}


    const spotify = Credentials();
    const [token, setToken] = useState('');
    
    const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
    const data = [
        {value: 1, name : 'A'},
        {value: 2, name : 'B'},
        {value: 3, name : 'C'},
        {value: 4, name : 'D'},
        {value: 5, name : 'E'},
        {value: 6, name : 'F'},
        {value: 7, name : 'G'}
    ]

    useEffect(() => {
         getToken();
                      
        }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]); 
   
        // console.log(carlosval);
        
        const getToken = async () => {
          const token = await axios('https://accounts.spotify.com/api/token', {
            headers: {
              'Content-Type' : 'application/x-www-form-urlencoded',
              'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret) 
            
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
          })
          setToken(token);
          getGenres();

        }

      const getGenres = val => {
        setGenres({
          selectedGenre: val, 
          listOfGenresFromAPI: genres.listOfGenresFromAPI
        });   
        console.log(token)
        const getGenres = async (token) => {
        const allGenres = await axios.get('https://api.spotify.com/v1/browse/categories?locale=sv_US',{
        
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + token}
        });
        console.log(token)
        console.log(allGenres);
        getGenres();
      };
      }

    return (
    <>
    <Header/>
        <Navbar/>
        <div className='homeContainer' style={{ backgroundImage: `url(${background})`}}>
            <div className='leftMid'>
                <div className='leftTop'>
                    <div className='search'>
                        <Dropdown option={data}></Dropdown>

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
                <div className='topBands'>
                  <div className='band'>
                    <div className='bandImg'></div>
                    <div className='Name'></div>
                  </div>

                </div>
            </div>
        </div>

    </>
    )
}

export default Home;




        // const refreshAuthToken = async() => {
        //   const refreshBody = querystring.stringify({
        //     grant_type: 'refresh_token',
        //     refresh_token: refresh_token,
        //   });
        //   const req = request(
        //     {
        //       // Assuming you have this setup as: https://accounts.spotify.com/api/token
        //       url: refresh_token_url, 
        //       method: 'POST',
        //       headers:{
        //         // Authorization: Basic <base64 encoded client_id:client_secret>
        //         'Authorization': token,
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Content-Length': Buffer.byteLength(refreshBody)
        //       }
        //     },
        //     (err, res) => {
        //       if (res) {
        //         const resData = JSON.parse(res.body);
        //         // Set new access tokens
        //         access_token = resData.spotify;
        //         // setup your Authorization token, e.g.
        //         token = btoa(spotify);
        //       } else if (err) {
        //         // Handle error...
        //       }
        //     }
        //   );
        //   req.write(refreshBody); 
    
      // const token1 = 'BQB7_ifRburBHV771pBl34wVwPRyyA1zQ8Q4etO0T1blmuMBBWW5Q3fr2lobKWLfCXfS9s-naHsZK-W7tcc'


                // const refreshToken = await axios('https://accounts.spotify.com/api/token',{
          //   headers: {
          //     'Content-Type' : 'application/x-www-form-urlencoded',
          //     'Authorization': 'Basic' + btoa(spotify.ClientId + ':' + spotify.ClientId),
              
          //   }

                
          // })