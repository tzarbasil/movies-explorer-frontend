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

import api from '../../utils/MainApi';

import { moviesApi } from '../../utils/MoviesApi';

import { CurrentUserContext } from '../contexts/context'


function App() {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });


  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) { return } else {

      api.updateJWTToken(jwt);
      console.log('Token check passed');
      api.getUserInfo().then(res => {
        setCurrentUser(res.data)
        setLoggedIn(true);
      })
    }
  }, []);


  useEffect(() => {
    if (loggedIn) {
      moviesApi.getMovies()
        .then((moviesData) => {
          setMovies(moviesData);
          localStorage.setItem('movies', JSON.stringify(moviesData));
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        })
    }
  }, [loggedIn]);


  function userSaveMovie(movie) {
    api.saveMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, res])
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }

  const userDeleteMovie = (_id) => {
    api.deleteSavedMovie(_id)
      .then((res) => {
        const newSavedMovies = savedMovies.filter((i) => i._id !== _id);
        setSavedMovies(newSavedMovies);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }

  return (
    <div className='body'>
      <div className="page">
        <CurrentUserContext.Provider
          value={currentUser}
        >
          <Routes>

            <Route path="/" element={<div className='route-container'> <Header /> <Main /> <Footer />
            </div>} />

            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<div className='route-container'> <Header /><main>
              <Movies movies={movies} saveMovie={userSaveMovie} savedMovies={savedMovies} deleteMovie={userDeleteMovie} /></main><Footer /></div>} />
            <Route path="/saved-movies" element={<div className='route-container'> <Header /> <main><SavedMovies movies={movies} savedMovies={savedMovies} setSavedMovies={setSavedMovies} deleteMovie={userDeleteMovie} /> </main> <Footer /></div>} />
            <Route path="/profile" element={<div className='route-container'> <Header /> <main> <Profile setCurrentUser={setCurrentUser} /> </main> </div>} />
            < Route path="/signup" element={< main className='main'> <Register setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} /> </main >} />
            < Route path="/signin" element={< main > <Login setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} /> </main >} />
            < Route path="*" element={< main > < Error /> </main >} />

          </Routes >
        </CurrentUserContext.Provider>
      </div >
    </div >
  );
}
export default App;
