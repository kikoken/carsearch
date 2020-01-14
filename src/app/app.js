import '../sass/main.sass';
import SearchBar from './searchbar';

const searchbar = SearchBar;

window.addEventListener( 'DOMContentLoaded', ( event ) => {
    searchbar.load();
} );
