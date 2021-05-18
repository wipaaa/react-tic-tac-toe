import { useState } from 'react';

import Board from './Board/Board';

const App = () => {
  const PLAYER_X = 'x';
  const PLAYER_O = 'o';

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(PLAYER_X);

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
    const squares_ = squares.slice();
    const player_ = player === PLAYER_X ? PLAYER_O : PLAYER_X;

    if (handleWinner(squares_) || squares_[position]) {
      return;
    }

    squares_[position] = player;

    setPlayer(player_);
    setSquares(squares_);
  };

  const winner = handleWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next: ${player}`;

  return (
    <>
      <div>{status}</div>
      <Board {...{ squares, handleOnClick }} />
    </>
  );
};

export default App;
