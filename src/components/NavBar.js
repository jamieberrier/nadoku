import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Heading, Level } from 'react-bulma-components';

import { clearDifficulty } from '../actions/difficulty.js';
import { clearIsSolved } from '../actions/isSolved.js';
import { clearPuzzle } from '../actions/puzzle.js';
import { clearSelectedNumber } from '../actions/selectedNumber.js';
import { clearSolution } from '../actions/solution.js';
import { clearSound } from '../actions/sound.js';
import { logout } from '../actions/currentUser.js';
import PlayerContainer from '../containers/PlayerContainer.js';

const NavBar = ({ difficulty, loggedIn, name, solution, sound, clearDifficulty, clearIsSolved, clearPuzzle, clearSelectedNumber, clearSolution, clearSound, logout }) => {
  const handleOnClick = event => {
    clearDifficulty()
    clearIsSolved()
    clearPuzzle()
    clearSelectedNumber()
    clearSolution()
    clearSound()

    if (event.target.id === 'logout') {
      logout()
    }
  }
  return (
    <Level mobile id='header'>
      {!loggedIn && 
      <Level.Item position='centered'>
        <div>
          <Heading id='logo'>
            <i className='fas fa-leaf'></i> Nadoku
          </Heading>
        </div>
      </Level.Item>
    }
    {loggedIn && 
      <Level.Item position='centered'>
        <div>
          <Heading heading>{name}</Heading>
          <Link to='/'>
            <Button 
              id='logout' 
              color='dark' 
              outlined={true} 
              onClick={handleOnClick}
            >
              Log Out
            </Button>
          </Link>
        </div>
      </Level.Item>
    }
    {solution && 
      <>
      {!sound &&
        <Level.Item position='centered'>
          <div>
            <Heading id='logo'>
              <i className='fas fa-leaf'></i> Nadoku
            </Heading>
          </div>
        </Level.Item>
      }
      {sound && 
        <Level.Item position='centered'>
          <div>
            <PlayerContainer />
          </div>
        </Level.Item>
      }
      <Level.Item position='centered'>
        <div>
          <Heading heading id='difficulty'>{difficulty}</Heading>
          <Link to='/options'>
            <Button 
              id='new' 
              color='white' 
              outlined={true} 
              onClick={handleOnClick}
            >
              New Game
            </Button>
          </Link>
        </div>
      </Level.Item>
      </>
    }
    </Level>
  )
}

const mapStateToProps = ({ currentUser, difficulty, solution, sound }) => {
  if (currentUser) {
    return {
      difficulty,
      loggedIn: !!currentUser,
      name: currentUser.username,
      solution,
      sound
    }
  } else {
    return {
      difficulty,
      loggedIn: !!currentUser,
      solution,
      sound
    }
  }
}

export default connect(mapStateToProps, { clearDifficulty, clearIsSolved, clearPuzzle, clearSelectedNumber, clearSolution, clearSound, logout })(NavBar);