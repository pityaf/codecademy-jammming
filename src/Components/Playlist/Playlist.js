import  { TrackList }  from '../TrackList/TrackList';

import './Playlist.css';

export const Playlist = ({ playlistName, playlistTracks, onRemove, onNameChange, onSave}) => {

    const handleNameChange = (e) => {
        onNameChange(e.target.value);
    }
    
    return(
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={ handleNameChange }/>
            {/*Add a TrackList component*/}
            <TrackList tracks={ playlistTracks } isRemoval={ false } onRemove={ onRemove }/>
            <button className="Playlist-save" onClick={ onSave }>SAVE TO SPOTIFY</button>
        </div>
    );
}