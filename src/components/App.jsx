import { useState } from 'react';

import './App.scss';
import Board from './Board/Board';
import History from './History/History';

const App = () => {
  const PLAYER_X = 'x';
  const PLAYER_O = 'o';

  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [player, setPlayer] = useState(PLAYER_X);
  const [step, setStep] = useState(0);

  const handleWinner = (sqrs) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [x, y, z] of lines) {
      if (sqrs[x] && sqrs[x] === sqrs[y] && sqrs[x] === sqrs[z]) {
        return sqrs[x];
      }
    }

    return !sqrs.filter((sqr) => !sqr).length ? 'Draw' : false;
  };

  const handleOnClick = (position) => {
    const _history = history.slice(0, step + 1);
    const _current = _history[_history.length - 1];
    const _player = player === PLAYER_X ? PLAYER_O : PLAYER_X;
    const _squares = _current.squares.slice() ?? Array(9).fill(null);
    const _step = _history.length;

    if (handleWinner(_squares) || _squares[position]) {
      return;
    }

    _squares[position] = player;

    setHistory([..._history, { squares: _squares }]);
    setPlayer(_player);
    setStep(_step);
  };

  const handleOnJumpTo = (step) => {
    setPlayer(step % 2 === 0 ? PLAYER_X : PLAYER_O);
    setStep(step);
  };

  const current = history[step];
  const squares = current.squares;
  const winner = handleWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next: ${player}`;

  return (
    <>
      <div>{status}</div>
      <History {...{ history, handleOnJumpTo }} />
      <Board {...{ squares, handleOnClick }} />
    </>
  );
};

export default App;
