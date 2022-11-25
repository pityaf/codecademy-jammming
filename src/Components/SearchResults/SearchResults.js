import  { TrackList }  from '../TrackList/TrackList';

import './SearchResults.css';

export const SearchResults = ({ searchResults, onAdd }) => {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                {/*Add a TrackList component*/}
                <TrackList tracks={ searchResults } onAdd={ onAdd } isRemoval={ true }/>
            </div>
        );
}
