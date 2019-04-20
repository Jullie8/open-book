import React from 'react';
import "./LandingPageMain.sass";


/*import components */
import NavigationBar from '../NavBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';

const LandingPageMain = () => {
    return <div className="landing-pg">
        <NavigationBar />
        <div className="bg-book-image">
          <SearchBar />
        </div>
      </div>;
}

export default LandingPageMain;
