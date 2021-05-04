import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import Dropdown from '../../Components/Dropdown/Dropdown';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import background from '../../img/background.jpg';
import SpotifyService from '../../Services/Spotify.service';
import TracksDropdown from '../../Components/TracksDropdown/TracksDropdown';
// import  Credentials  from '../../Credentials';
// import Countries from '../../Components/CountrySelector/CountrySelector';

const Home = () => {

  let history = useHistory();

  const Credentials = () => {

    return { 
        ClientId: '71db2d6bf70e49f183678f5191ff85d0',
        ClientSecret: 'f5cb237a05c745b489dfa6119409fc75'
    }
  }


    const spotify = Credentials();
    const [spotify_service, setSpotifyService] = useState(new SpotifyService(''));
    const [query,setQuery] = useState('');
    const [genres, setGenres] = useState({selectedGenre: '', listOfGenresFromAPI: []});
    const [artists, setArtists] = useState({selectedArtist: '', listOfArtistsFromAPI: []});

    const search = () => {
      if (query != '') history.push(`${query}`);
  }


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

    const typeArtist = async () => {
      const spotify_instance = await SpotifyService.init(spotify.ClientId, spotify.ClientSecret);
      const inputArtist = await spotify_instance.searchArtist(inputArtist);
      console.log(inputArtist)
      setArtists({
      selectedArtist : '',
      listOfArtistsFromAPI: artists,
      
    })
    }

  
    const getBands = async () => {
      
      const spotify_instance = await SpotifyService.init(spotify.ClientId, spotify.ClientSecret);
      const artists = await spotify_instance.getArtists(genres.selectedGenre);
      console.log(genres.selectedGenre)
      console.log(artists);
      setArtists({
      selectedArtist : '',
      listOfArtistsFromAPI: artists,
      
    })
    }
    
    if(!genres.selectedGenre){
      console.log('ESTOY EN EL IF')
    
    }else{
      getBands();
    } 
    
    const genreChanged = genreVal => {
      console.log(genreVal)
      setGenres({
        selectedGenre: genreVal,
        listOfGenresFromAPI: genres.listOfGenresFromAPI
      });
     
    }

    const artistChanged = val1 => {
      
      setArtists({
        selectedArtist: val1,
        listOfArtistsFromAPI: artists.listOfArtistsFromAPI,
      })
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
                      <TracksDropdown label="Tracks :" options={artists.listOfArtistsFromAPI} selectedValue={artists.selectedArtist} changed={artistChanged}/>
                      <input type="search" className="searchArtist" placeholder="Search an artist..." onChange={(e)=>setQuery(e.target.value)} />
                        <button type='submit' onClick={search}>   
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
