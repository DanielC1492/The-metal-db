import React, { useState, useEffect } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import Dropdown from '../../Components/Dropdown/Dropdown';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import background from '../../img/background.jpg';
import SpotifyService from '../../Services/Spotify.service';
// import  Credentials  from '../../Credentials';
// import Countries from '../../Components/CountrySelector/CountrySelector';

const Home = () => {


  const Credentials = () => {

    return { 
        ClientId: '71db2d6bf70e49f183678f5191ff85d0',
        ClientSecret: 'f5cb237a05c745b489dfa6119409fc75'
    }
  }


    const spotify = Credentials();
    const [spotify_service, setSpotifyService] = useState(new SpotifyService(''));
    
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
    useEffect( async () => {
      console.log('REFRESHING STATE');
      const spotify_instance = await SpotifyService.init(spotify.ClientId, spotify.ClientSecret);
      setSpotifyService(spotify_instance);
      const genres = await spotify_instance.getGenres(); 
      setGenres({
        selectedGenre : '',
        listOfGenresFromAPI: genres
      });
      console.log(genres);
    },[]);


    const genreChanged = val => {
      setGenres({
        selectedGenre: val, 
        listOfGenresFromAPI: genres.listOfGenresFromAPI
      });
  


    }

    return (
    <>
    <Header/>
        <Navbar/>
        <div className='homeContainer' style={{ backgroundImage: `url(${background})`}}>
            <div className='leftMid'>
                <div className='leftTop'>
                    <div className='search'>
                       
                      <Dropdown label="Genre :" options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} />
                      <Dropdown label="Genre :" options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} />

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
