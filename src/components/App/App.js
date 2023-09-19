import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import "./App.css";
import Main from '../Main/Main.js'
import Movies from '../Movies/Movies.js'
import SavedMovies from '../Movies/SavedMovies/SavedMovies'

import Profile from '../Profile/Profile.js'
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'
import Error from '../Error/Error.js'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoggedIn(false)
    }
  }, [isLoggedIn]);



  return (
    <div className='body'>
      <div className="page">
        {/* <CurrentUserContext.Provider value={currentUser}> */}
        <Routes>

          <Route path="/" element={<div className='route__container'> <Header loggedIn={false} /> <Main /> <Footer />
          </div>} />

          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<div className='route__container'> <Header loggedIn={true} /><Movies /></div>} />
          <Route path="/saved-movies" element={<div className='route__container'> <Header loggedIn={true} /><SavedMovies /></div>} />
          <Route path="/profile" element={<div className='route__container'> <Header loggedIn={true} /><Profile /></div>} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<Error />} />

        </Routes>
      </div>
    </div>
  );
}
export default App;
