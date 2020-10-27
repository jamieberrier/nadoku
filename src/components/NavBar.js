import React from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar, Heading } from 'react-bulma-components';

import { clearDifficulty } from '../actions/difficulty.js';
import { clearIsSolved } from '../actions/isSolved.js';
import { clearPuzzle } from '../actions/puzzle.js';
import { clearPuzzleRaw } from '../actions/puzzleRaw.js';
import { clearSelectedNumber } from '../actions/selectedNumber.js';
import { clearSolution } from '../actions/solution.js';
import { logout } from '../actions/currentUser.js';

const NavBar = ({ difficulty, loggedIn, clearDifficulty, clearIsSolved, clearPuzzle, clearPuzzleRaw, clearSelectedNumber, clearSolution, logout }) => {
  const handleOnClick = event => {
    clearDifficulty()
    clearPuzzleRaw()
    clearSolution()
    clearPuzzle()
    clearSelectedNumber()
    clearIsSolved()

    if (event.target.id === 'logout') {
      logout()
    }
  }

  return (
    <Navbar color='success'>
      <Navbar.Brand>
        <Navbar.Item renderAs='a' href='/puzzle'>
          <i className="fas fa-leaf"></i>
        </Navbar.Item>
        {loggedIn && 
          <>
            <Navbar.Item id='logout' renderAs='a' onClick={handleOnClick}>
              Log Out
            </Navbar.Item>
            {difficulty &&
              <>
                <Navbar.Item></Navbar.Item>
                <Navbar.Item></Navbar.Item>
                <Navbar.Item id='difficulty'>
                  <Heading subtitle>{difficulty.toUpperCase()}</Heading>
                </Navbar.Item>
                <Navbar.Item></Navbar.Item>
                <Navbar.Item></Navbar.Item>
                <Navbar.Item id='new' renderAs='a' onClick={handleOnClick}>
                  New Game
                </Navbar.Item>
              </>
            }
          </>
        }
      </Navbar.Brand>
    </Navbar>
  )
}

const mapStateToProps = ({ currentUser, difficulty }) => {
  return {
    loggedIn: !!currentUser,
    difficulty
  }
}

export default connect(mapStateToProps, { clearDifficulty, clearIsSolved, clearPuzzle, clearPuzzleRaw, clearSelectedNumber, clearSolution, logout })(NavBar);