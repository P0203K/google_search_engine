import { Link } from 'react-router-dom';
import AppsIcons from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';

import SearchBar from '../Components/Search';
import './Home.css';

const Home = () => {

  return (
    <>
      <header className='home-header'>
        <div className="home-header__left">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className="home-header__right">
          <Link to='/gmail'>Gmail</Link>
          <Link to='images'>Images</Link>
          <AppsIcons style={{ fontSize: '18px' }} />
          <Avatar
            src=""
            style={{ border: "1px solid green", width: '26px', height: '26px' }}
          />
        </div>
      </header>
      <main className='home-main'>
        <section>
          <img
            className='home-main__img'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            alt="Google logo image"
          />
          <SearchBar />
        </section>
      </main>
    </>
  );
}

export default Home;