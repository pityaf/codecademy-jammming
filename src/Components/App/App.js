import './App.css';

import { useState } from 'react';
import { useCallback} from 'react';

import { SearchBar } from '../SearchBar/SearchBar';
import  { SearchResults }  from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

import { Spotify }  from '../../util/Spotify';


export const App = () => {

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const [results, setResults ] = useState([]);

  const[playlistName, setPlaylistName] = useState('playlist name');

  const [playlistTracks, setPlaylistTracks] = useState([ ]);

  const addTrack = (track) => {
    let tracks = playlistTracks;
    if(playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    setPlaylistTracks(tracks);
     
    forceUpdate();
  }

  const removeTrack = (track) => {
    let tracks = playlistTracks;

    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    setPlaylistTracks(tracks);

    forceUpdate();
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName('New playlist name');
      setPlaylistTracks([]);
    })
  }

  const search = (term) => {
    Spotify.search(term).then(searchResults => {
      setResults(searchResults);
    });
  }
  
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
          {/*Add a SearchBar component*/} 
          <SearchBar onSearch={ search } />
        <div className="App-playlist">
          {/*Add a SearchResults component*/}
          <SearchResults  searchResults={ results } 
                          onAdd={ addTrack } 
                        
          />
          {/*Add a Playlist component*/}
          <Playlist playlistName={ playlistName } 
                    playlistTracks={ playlistTracks } 
                    onRemove={ removeTrack } 
                    onNameChange={ updatePlaylistName }
                    onSave= { savePlaylist }
          />
        </div>
      </div>
    </div>
  );
}
