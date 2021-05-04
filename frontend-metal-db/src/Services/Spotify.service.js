import axios from 'axios';


class SpotifyService {
    static ACCOUNTS_API_URL = "https://accounts.spotify.com";
    static API_URL = "https://api.spotify.com/v1";
    token = '';

    static init = async (ClientId, ClientSecret ) => {
        const token = await this.getToken(ClientId, ClientSecret);
        const spotify_service = new SpotifyService(token);
        return spotify_service;
    }
    
    static getToken = async (ClientId, ClientSecret) => {
        const token_response = await axios(SpotifyService.ACCOUNTS_API_URL + '/api/token', {
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(ClientId + ':' + ClientSecret) 
        
        },   
        data: 'grant_type=client_credentials',
        method: 'POST'
        })
        const token = token_response.data.access_token;
        return token;
    }

    constructor(token){
        this.token = token;
    }
    
    getGenres = async (page = 0) => {
        
          const genres_response = await axios.get( SpotifyService.API_URL + '/recommendations/available-genre-seeds',{
        
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + this.token}
            
          });
          // console.log(genres_response)
          return genres_response.data.genres; 
    }

    searchArtist = async (inputName) => {
        
        const genres_response = await axios.get( SpotifyService.API_URL + `/recommendations/search?q=${inputName}&type=artist&limit=10&offset=5`,{
      
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + this.token}
          
        });
        console.log(genres_response)
        return genres_response.data.genres; 
    }

    getArtists = async (genreName) => {
        console.log(genreName)
        const artists_response = await axios.get( SpotifyService.API_URL + `/recommendations?seed_genres=${genreName}`,{
            
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + this.token}
          
        });
        
        console.log(artists_response.data.tracks.name)
        return artists_response; 
  }
  
  getAnArtist = async () => {
    const artist_response = await axios.get ( SpotifyService.API_URL + '/artists/2ye2Wgw4gimLv2eAKyk1NB',{

      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + this.token}
    })
    console.log (artist_response);
    return artist_response;
  }
}
export default SpotifyService;
