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
import { logout } from '../actions/currentUser.js';
import PlayerContainer from '../containers/PlayerContainer.js';

const NavBar = ({ name, difficulty, loggedIn, solution, clearDifficulty, clearIsSolved, clearPuzzle, clearSelectedNumber, clearSolution, logout }) => {
  const handleOnClick = event => {
    clearDifficulty()
    clearSolution()
    clearPuzzle()
    clearSelectedNumber()
    clearIsSolved()

    if (event.target.id === 'logout') {
      logout()
    }
  }
  return (
    <Level mobile id='header'>
      {!loggedIn && 
      <Level.Item position='centered'>
        <div>
          <Heading id='logo'><i className='fas fa-leaf'></i> Nadoku</Heading>
        </div>
      </Level.Item>
    }
    {loggedIn && 
      <Level.Item position='centered'>
        <div>
          <Heading heading>{name}</Heading>
          <Link to='/'>
            <Button id='logout' color='dark' outlined={true} onClick={handleOnClick}>Log Out</Button>
          </Link>
        </div>
      </Level.Item>
    }
    {solution && 
      <>
      <Level.Item position='centered'>
        <div>
          <PlayerContainer />
        </div>
      </Level.Item>
      <Level.Item position='centered'>
        <div>
          <Heading heading id='difficulty'>{difficulty}</Heading>
          <Link to='/options'>
            <Button id='new' color='white' outlined={true} onClick={handleOnClick}>New Game</Button>
          </Link>
        </div>
      </Level.Item>
      </>
    }
    </Level>
  )
}

const mapStateToProps = ({ currentUser, difficulty, solution }) => {
  if (currentUser) {
    return {
      loggedIn: !!currentUser,
      difficulty,
      name: currentUser.username,
      solution
    }
  } else {
    return {
      loggedIn: !!currentUser,
      difficulty,
      solution
    }
  }
}

export default connect(mapStateToProps, { clearDifficulty, clearIsSolved, clearPuzzle, clearSelectedNumber, clearSolution, logout })(NavBar);