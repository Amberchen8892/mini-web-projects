import React from 'react';

import './App.css';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        marginTop: '2rem',
      }}
    >
      <h3>Mini web projects using Vanilla Javascript</h3>

      <a
        href='https://github.com/Amberchen8892'
        target='_blank'
        rel='noopener noreferrer'
        style={{ fontWeight: 'bold', color: 'orange' }}
      >
        Phuong Tran
      </a>
      <div className='container' style={{ marginTop: '2rem' }}>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '25rem' }}
        >
          <img
            src='../img/light-dark-mode.png'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '14rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1 rem' }}
            >
              Light Dark Mode
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              DOM, Local Storage, Toggle
            </p>
            <div className='group-buttons'>
              <div className='box'>
                <a
                  href='https://amberchen8892.github.io/light-dark-mode/'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  Live Demo
                </a>
              </div>

              <div className='box' style={{ marginLeft: '15px' }}>
                <a
                  href='https://github.com/Amberchen8892/light-dark-mode'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '25rem' }}
        >
          <img
            src='../img/ten-richest-people.png'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '14rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1 rem' }}
            >
              Sortable List
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              Drap & Drop API
            </p>
            <div className='group-buttons'>
              <div className='box'>
                <a
                  href='https://amberchen8892.github.io/Sortable-List/'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  Live Demo
                </a>
              </div>

              <div className='box' style={{ marginLeft: '15px' }}>
                <a
                  href='https://github.com/Amberchen8892/Sortable-List'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '25rem' }}
        >
          <img
            src='../img/booking-seat.png'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '14rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1 rem' }}
            >
              Movie Seat Booking
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              DOM, CSS, Local storage
            </p>
            <div className='group-buttons'>
              <div className='box'>
                <a
                  href='https://friendly-haibt-500483.netlify.app/'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  Live Demo
                </a>
              </div>

              <div className='box' style={{ marginLeft: '15px' }}>
                <a
                  href='https://github.com/Amberchen8892/Movie-seat-booking'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '25rem' }}
        >
          <img
            src='../img/meal-finder.png'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '14rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1 rem' }}
            >
              Meal Finder
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              Fetch API, CSS Grid, Overlay
            </p>
            <div className='group-buttons'>
              <div className='box'>
                <a
                  href='https://amberchen8892.github.io/Meal-Finder/'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  Live Demo
                </a>
              </div>

              <div className='box' style={{ marginLeft: '15px' }}>
                <a
                  href='https://github.com/Amberchen8892/Meal-Finder'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '25rem' }}
        >
          <img
            src='../img/guessing-number.png'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '14rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1 rem' }}
            >
              Speak Number Guess
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              Speech Recognition API
            </p>
            <div className='group-buttons'>
              <div className='box'>
                <a
                  href='https://amberchen8892.github.io/Speak-number-guessing-game/'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  Live Demo
                </a>
              </div>

              <div className='box' style={{ marginLeft: '15px' }}>
                <a
                  href='https://github.com/Amberchen8892/Speak-number-guessing-game'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '25rem' }}
        >
          <img
            src='../img/lyrics-search.png'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '14rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1 rem' }}
            >
              Lyrics Serach App
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              Fetch, Async/Await, Pagination
            </p>
            <div className='group-buttons'>
              <div className='box'>
                <a
                  href='https://inspiring-liskov-b70085.netlify.app/'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  Live Demo
                </a>
              </div>

              <div className='box' style={{ marginLeft: '15px' }}>
                <a
                  href='https://github.com/Amberchen8892/Lyrics-Search'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '25rem' }}
        >
          <img
            src='../img/countdown.png'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '14rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1 rem' }}
            >
              New Year Countdown
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              DOM, Events, CSS, Time
            </p>
            <div className='group-buttons'>
              <div className='box'>
                <a
                  href='https://amberchen8892.github.io/New-Year-Countdown/'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  Live Demo
                </a>
              </div>

              <div className='box' style={{ marginLeft: '15px' }}>
                <a
                  href='https://github.com/Amberchen8892/New-Year-Countdown'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '25rem' }}
        >
          <img
            src='../img/quote-generator.png'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '14rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1 rem' }}
            >
              Quote Generator
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              Fetch API, DOM, CSS
            </p>
            <div className='group-buttons'>
              <div className='box'>
                <a
                  href='https://elated-almeida-b2a653.netlify.app/'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  Live Demo
                </a>
              </div>

              <div className='box' style={{ marginLeft: '15px' }}>
                <a
                  href='https://github.com/Amberchen8892/quote-generator'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '25rem' }}
        >
          <img
            src='../img/splash-page.png'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '14rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1 rem' }}
            >
              Splash Page
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              DOM, Building UI with Figma
            </p>
            <div className='group-buttons'>
              <div className='box'>
                <a
                  href='https://loving-payne-d27247.netlify.app/'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  Live Demo
                </a>
              </div>

              <div className='box' style={{ marginLeft: '15px' }}>
                <a
                  href='https://github.com/Amberchen8892/splash-page'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '25rem' }}
        >
          <img
            src='../img/animation.png'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '14rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1 rem' }}
            >
              Navigation Nation
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              Animation CSS, Overlay
            </p>
            <div className='group-buttons'>
              <div className='box'>
                <a
                  href='https://amberchen8892.github.io/animated-navigation/'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  Live Demo
                </a>
              </div>

              <div className='box' style={{ marginLeft: '15px' }}>
                <a
                  href='https://github.com/Amberchen8892/animated-navigation'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '25rem' }}
        >
          <img
            src='../img/exchange-caculator.png'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '14rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1 rem' }}
            >
              Exchange Rate Calculator
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              Fetch API, JSON
            </p>
            <div className='group-buttons'>
              <div className='box'>
                <a
                  href='https://amberchen8892.github.io/Exchange-rate-calculator/'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  Live Demo
                </a>
              </div>

              <div className='box' style={{ marginLeft: '15px' }}>
                <a
                  href='https://github.com/Amberchen8892/Exchange-rate-calculator'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='shadow card'
          style={{ width: '18rem', marginTop: '1rem', height: '25rem' }}
        >
          <img
            src='../img/form-validator.png'
            className='card-img-top'
            alt='...'
            style={{ width: '18rem', height: '14rem' }}
          />
          <div className='card-body' style={{ textAlign: 'center' }}>
            <h5
              className='card-title'
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1 rem' }}
            >
              Form Validator
            </h5>
            <p
              className='card-text'
              style={{ fontFamily: 'Lato, sans-serif', fontSize: '1rem' }}
            >
              Intro to DOM and Events
            </p>
            <div className='group-buttons'>
              <div className='box'>
                <a
                  href='https://amberchen8892.github.io/Form-validator/'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  Live Demo
                </a>
              </div>

              <div className='box' style={{ marginLeft: '15px' }}>
                <a
                  href='https://github.com/Amberchen8892/Form-validator'
                  target='_blank'
                  className='btn btn-outline-dark'
                  rel='noopener noreferrer'
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
