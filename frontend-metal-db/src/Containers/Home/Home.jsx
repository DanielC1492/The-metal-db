import React, { useState, useEffect } from 'react';
import { SHOWCOUNT, SEARCH, SHOWBAND, LOGOUTBAND} from '../../redux/types/bandsTypes.js'
import {useHistory} from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import background from '../../img/background-concert.jpg';
// import SpotifyService from '../../Services/Spotify.service';
import axios from 'axios';
import { connect } from 'react-redux';

const Home = (props) => {

  const history = useHistory();

  const [search, setSearch] = useState({
    searchBox: ''
  });

  const stateHandler = (event) => {
    setSearch({...search, 
        [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});
};

  
    const [artists, setArtists] = useState([{artistSelect: [], selectedArtist: []}]);
    

    const searchingByName = async () => {
        
      const res = await axios.get(`http://localhost:8000/api/artistName/${search.searchBox}`);
      console.log(res + 'ESTE ES EL LOG DEL RESULT');
      const arraySearch = res.data.filter(explore => 
        explore.name.toLowerCase().includes(search.searchBox.toLowerCase())
    )
      props.dispatch({type: SEARCH, payload: arraySearch})
    
      console.log(arraySearch);
      setSearch({
          ...search, searchBox: arraySearch
      });

      return setTimeout(() => {
        history.push('/band')
    }, 1000);
  }

  const searchingByGenre = async () => {
        
    const res = await axios.get(`http://localhost:8000/api/artistGenre/${search.searchBox}`);
    console.log(res + 'ESTE ES EL LOG DEL RESULT');
    const arraySearch = res.data.filter(explore => 
        explore.genre.toLowerCase().includes(search.searchBox.toLowerCase())
    )
    console.log("buscador", arraySearch);
    setSearch({
      ...search, searchBox: arraySearch
  });

      return setTimeout(() => {
        history.push('/band')
    }, 1000);
    props.dispatch({type: SEARCH, payload: arraySearch})
  }

  const searchingByCountry = async () => {
        
    const res = await axios.get(`http://localhost:8000/api/artistCountry/${search.searchBox}`);
    console.log(res + 'ESTE ES EL LOG DEL RESULT');
    localStorage.setItem("band", JSON.stringify(res.data))
    const arraySearch = res.data.filter(explore => 
        explore.country.toLowerCase().includes(search.searchBox.toLowerCase())
    )
    console.log("buscador", arraySearch);
    setSearch({
      ...search, searchBox: arraySearch
  });

      return setTimeout(() => {
      history.push('/band')
      }, 1000);
    props.dispatch({type: SEARCH, payload: arraySearch})


  }
    
  
  useEffect( async () => {

      getArtists();

    },[]);
    
    const getArtists = async () => {
      const artists = await axios.get('http://localhost:8000/api/artists')
      console.log(artists);
      // localStorage.setItem("token", JSON.stringify(res))
      // localStorage.setItem("user", JSON.stringify(res.data.user))
      // props.dispatch({type: LOGIN, payload: res.data})  
      
     
      setArtists(
        artists.data
      )

      return artists;
  }

  console.log(artists)
    
    const handleOnKeyDown = (event) => {
      if(event.keyCode === 13) searchingByName()
    };
   
    
    return (
    <>
    <Header/>
        <Navbar/>
        <div className='homeContainer' style={{ backgroundImage: `url(${background})`}}>
            <div className='leftMid'>
              <div className='leftTop'>
              <div className='search'>
                <input className="searchBox" type="search" name="searchBox" placeholder="Search by name..." onKeyUp={stateHandler} onKeyDown={handleOnKeyDown}/>
                  <button type="submit" className="" onClick={()=> searchingByName()} >Buscar</button>
                <input className="searchBox" type="search" name="searchBox" placeholder="Search by genre..." onKeyUp={stateHandler} onKeyDown={handleOnKeyDown}/>
                  <button type="submit" className="" onClick={()=> searchingByGenre()} >Buscar</button>
                <input className="searchBox" type="search" name="searchBox" placeholder="Search by country..." onKeyUp={stateHandler} onKeyDown={handleOnKeyDown}/>
                  <button type="submit" className="" onClick={()=> searchingByCountry()} >Buscar</button>
              </div>
              </div>
              <div className='leftBot'>
                <div className='weeklySugest'>
                  <div className='sugestText'>Weekly Sugest</div>
                  <div className='sugestLeft'>
                    <div className='bandImg'>
                      <img className='bandImg'></img>
                    </div>
                  </div>
                  <div className='sugestRight'>
                    <div className='sugestRightTop'>
                      <div className='bandName'></div>
                    </div>
                    <div className='sugestRightBot'>
                      <div className='bandGenres'></div>
                    </div>
                    <div className='sugestRightBot'>
                      <div className='bandGenres'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className='rightMid'>
              <div className='topBands'>
                <div className='textTopBands'>Top  Bands</div>
                <div className='band'>{
                        artists.slice(0, 4).map((artist, index) => {
                          return(
                          <div className='topBandsLeft' key={index}>
                            <div className='topBandImg'>
                                <img className='topBandImg'  src={artist.image}></img>
                            </div>
                            <div className='topBandsRight'>
                              <div className='topBandName'> {artist.name}</div>
                              <div className='topBandGenres'>{artist.genre}</div>
                              <div className='topBandGenres'>{artist.country}</div>
                            </div>
                  
                          </div>
                        );
                      })
                    }
                  </div>
              </div>
            </div>
        </div>
                           
    </>
    )
}
// const mapStateToProps = state => {
//   return {
//       band : state.bandReducer.band,
//       count : state.userReducer.query
//   }
// }


export default connect(/*mapStateToProps*/) (Home);
