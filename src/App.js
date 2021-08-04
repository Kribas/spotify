import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

function App() {

  const spotify  = new SpotifyWebApi();

  const [{user, token, }, dispatch] = useDataLayerValue();

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      
      })
      spotify.getUserPlaylists().then((playlists) => 
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      )

      spotify.getPlaylist('4GpBODwgLjOwL6JcBunQcr').then(response => 
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
        
        )
    }

  }, []);

  console.log("User",user)
  console.log("Token", token)
 

  return (
    <div className="app">
      {token ? <Player spotify = {spotify}/> : <Login/>}
    </div>
  );
}

export default App;
