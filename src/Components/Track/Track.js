import './Track.css';

export const Track = ({ track, onAdd, onRemove, isRemoval }) => {

    const addTrack = () => {
        onAdd(track);
    }
    const removeTrack = () => {
        onRemove(track);
    }

    let renderAction = <button className='Track-action' onClick={ addTrack }>+</button>

    if(!isRemoval) {
        renderAction = <button className='Track-action' onClick={ removeTrack }>-</button>
    } else { 
        renderAction = <button className='Track-action' onClick={ addTrack }>+</button>
    }

    return(
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} |  {track.album} </p>
            </div>
            { renderAction }
        </div>
    );
}