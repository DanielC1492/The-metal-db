import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { Navbar, NavbarProfile } from '../../Components/Navbar/Navbar';
import Dropdown from '../../Components/Dropdown/Dropdown';
import Header from '../../Components/Header/Header';
import background from '../../img/background.jpg';
import SpotifyService from '../../Services/Spotify.service';
import TracksDropdown from '../../Components/TracksDropdown/TracksDropdown';
import axios from 'axios';
import { Input, Space } from 'antd';

const Home = (props) => {


  const { Search } = Input;

  const onSearch = value => console.log(value);

  let history = useHistory();
 
    const [search, setSearch] = useState({ searchBox: '' });
    // const [artist, setArtist] = useState({selectedArtist: '', listOfArtistsFromAPI: []});
    const [artists, setArtists] = useState({artistSelect: '', selectedArtist: []});

    const stateHandler = (event) => {
        setSearch({...search, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };


  const searchingEngine = async () => {
        
    const result = await axios.get(`http://localhost:8000/api/artist/Ayreon`);
    // const arraySearch = result.data.data.results.filter(explore => 
    //     explore.title.toLowerCase().includes(search.searchBox.toLowerCase())
    // )
    // console.log("buscador", arraySearch);
    // props.dispatch({type: SEARCH, payload: arraySearch})
    

    // setSearch({
    //     ...search, searchBox: arraySearch
    // });
  }
    
  
  useEffect( async () => {

      getArtists();

    },[]);
    
    const getArtists = async () => {
      const artists = await axios.get('http://localhost:8000/api/artists')
      console.log(artists)
      // localStorage.setItem("token", JSON.stringify(res))
      // localStorage.setItem("user", JSON.stringify(res.data.user))
      // props.dispatch({type: LOGIN, payload: res.data})  
      
     
      setArtists({
        artistSelect : 'artists',
        selectedArtist: artists
      })

      return artists;
  }

  console.log(artists)

    // const artistsChanged = artistsVal => {
    //   console.log(artistsVal)
    //   setArtists({
    //     selectedArtist: artistsVal,
    //     listOfArtistsFromAPI: artists.listOfArtistsFromAPI,
    //   })
    // }
    
    const handleOnKeyDown = (event) => {
      if(event.keyCode === 13) searchingEngine()
    };
   
    return (
    <>
    <Header/>
        <Navbar/>
        <div className='homeContainer' style={{ backgroundImage: `url(${background})`}}>
            <div className='leftMid'>
                <div className='leftTop'>
                    <div className='search'>
                       
                      {/* <Dropdown label="Bands :" options={artists.listOfGenresFromAPI} selectedValue={artists.data} changed={artistsChanged} /> */}
                      {/* <Dropdown label="Tracks :" options={artists.listOfArtistsFromAPI} selectedValue={artists.selectedArtist} changed={artistChanged} /> */}
                      {/* <TracksDropdown label="Tracks :" options={artists.listOfArtistsFromAPI} selectedValue={artists.selectedArtist} changed={artistChanged}/> */}
                      <Search className='input' placeholder="Search a band" allowClear onSearch={searchingEngine} style={{ width: 200 }} />
                      <Search className='input' placeholder="Search a genre" allowClear onSearch={onSearch} style={{ width: 200 }} />
                      <Search className='input' placeholder="Search a country" allowClear onSearch={onSearch} style={{ width: 200 }} />
                    </div>
                   
                </div>
                <div className='leftBot'>
                  <div className='weeklySugest'>
                    <div className='sugestText'>Weekly Sugest</div>
                      {/* <div className='sugestLeft'>
                        <div className='bandImg'>
                          <img className='bandImg' src={`${artists.selectedArtist.data[8].image}`}></img>
                        </div>
                      </div>
                      <div className='sugestRight'>
                        <div className='sugestRightTop'>
                          <div className='bandName'> {`${artists.selectedArtist.data[8].name}`}</div>
                        </div>
                        <div className='sugestRightBot'>
                          <div className='bandGenres'>{`${artists.selectedArtist.data[8].genre}`}</div>
                        </div>  
                        <div className='sugestRightBot'>
                          <div className='bandGenres'>{`${artists.selectedArtist.data[8].country}`}</div>
                        </div>   
                      </div>           */}
                  </div>
                </div>
                
            </div>
            <div className='rightMid'>
              
                <div className='topBands'>
                  <div className='textTopBands'>TOP 5 BANDS</div>
                    {/* <div className='band'>
                      <div className='topBandsLeft'>
                        <div className='topBandImg'>
                          <img className='topBandImg' src={`${artists.selectedArtist.data[0].image}`}></img>
                        </div>
                      </div>
                      <div className='topBandsRight'>
                        <div className='topBandName'> {`${artists.selectedArtist.data[0].name}`}</div>
                        <div className='topBandGenres'>{`${artists.selectedArtist.data[0].genre}`}</div>
                        <div className='topBandGenres'>{`${artists.selectedArtist.data[0].country}`}</div>
                      </div>
                      
                      
                    </div>

                    <div className='band'>
                      <div className='topBandsLeft'>
                        <div className='topBandImg'>
                          <img className='topBandImg' src={`${artists.selectedArtist.data[1].image}`}></img>
                        </div>
                      </div>
                      <div className='topBandsRight'>
                        <div className='topBandName'> {`${artists.selectedArtist.data[1].name}`}</div>
                        <div className='topBandGenres'>{`${artists.selectedArtist.data[1].genre}`}</div>
                        <div className='topBandGenres'>{`${artists.selectedArtist.data[1].country}`}</div>
                      </div>
                    </div>

                    <div className='band'>
                      <div className='topBandsLeft'>
                        <div className='topBandImg'>
                          <img className='topBandImg' src={`${artists.selectedArtist.data[3].image}`}></img>
                        </div>
                      </div>

                      <div className='topBandsRight'>
                        <div className='topBandName'> {`${artists.selectedArtist.data[3].name}`}</div>
                        <div className='topBandGenres'>{`${artists.selectedArtist.data[3].genre}`}</div>
                        <div className='topBandGenres'>{`${artists.selectedArtist.data[3].country}`}</div>
                      </div> 
                    </div>

                    <div className='band'>
                      <div className='topBandsLeft'>
                        <div className='topBandImg'>
                          <img className='topBandImg' src={`${artists.selectedArtist.data[6].image}`}></img>
                        </div>
                      </div>
                      <div className='topBandsRight'>
                        <div className='topBandName'> {`${artists.selectedArtist.data[6].name}`}</div>
                        <div className='topBandGenres'>{`${artists.selectedArtist.data[6].genre}`}</div>
                        <div className='topBandGenres'>{`${artists.selectedArtist.data[6].country}`}</div>
                      </div>
                    </div>

                    <div className='band'>
                      <div className='topBandsLeft'>
                        <div className='topBandImg'>
                          <img className='topBandImg' src={`${artists.selectedArtist.data[9].image}`}></img>
                        </div>
                      </div>
                      <div className='topBandsRight'>
                        <div className='topBandName'> {`${artists.selectedArtist.data[9].name}`}</div>
                        <div className='topBandGenres'>{`${artists.selectedArtist.data[9].genre}`}</div>
                        <div className='topBandGenres'>{`${artists.selectedArtist.data[9].country}`}</div>
                      </div>
                      
                      
                    </div> */}

                </div>
            </div>
        </div>

    </>
    )
}


export default Home;
