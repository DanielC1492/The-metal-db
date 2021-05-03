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
          console.log(genres_response)
          return genres_response.data.genres; 
    }
}

export default SpotifyService;
