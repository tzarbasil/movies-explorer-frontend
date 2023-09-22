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
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     setIsLoggedIn(false)
  //   }
  // }, [isLoggedIn]);

  // const [isMovieHeader, setIsisMovieHeader] = useState(false);

  // useEffect(() => {
  //   if (isMovieHeader) {
  //     setIsisMovieHeader(false)
  //   }
  // }, [isMovieHeader]);


  return (
    <div className='body'>
      <div className="page">
        {/* <CurrentUserContext.Provider value={currentUser}> */}
        <Routes>

          <Route path="/" element={<div className='route-container'> <Header /> <Main /> <Footer />
          </div>} />

          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<div className='route-container'> <Header /><main><Movies /></main><Footer /></div>} />
          <Route path="/saved-movies" element={<div className='route-container'> <Header /> <main><SavedMovies /> </main> <Footer /></div>} />
          <Route path="/profile" element={<div className='route-container'> <Header /> <main> <Profile /> </main> </div>} />
          < Route path="/signup" element={< main > <Register /> </main >} />
          < Route path="/signin" element={< main > <Login /> </main >} />
          < Route path="*" element={< main > < Error /> </main >} />

        </Routes >
      </div >
    </div >
  );
}
export default App;
