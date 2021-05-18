import { useState } from 'react';

import Board from './Board/Board';

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
    const history_ = history.slice(0, step + 1);
    const current_ = history_[history_.length - 1];
    const player_ = player === PLAYER_X ? PLAYER_O : PLAYER_X;
    const squares_ = current_.squares ?? Array(9).fill(null);
    const step_ = history_.length;

    if (handleWinner(squares_) || squares_[position]) {
      return;
    }

    squares_[position] = player;

    setHistory([...history_, { squares: squares_ }]);
    setPlayer(player_);
    setStep(step_);
  };

  const current = history[step];
  const squares = current.squares;
  const winner = handleWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next: ${player}`;

  console.log(squares);

  return (
    <>
      <div>{status}</div>
      <Board {...{ squares, handleOnClick }} />
    </>
  );
};

export default App;
