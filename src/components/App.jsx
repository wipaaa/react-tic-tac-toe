import { useState } from 'react';

import Board from './Board/Board';

const App = () => {
  const PLAYER_X = 'x';
  const PLAYER_O = 'o';

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(PLAYER_X);

  const handleOnClick = (position) => {
    const squares_ = squares.slice();
    const player_ = player === PLAYER_X ? PLAYER_O : PLAYER_X;

    if (squares_[position]) {
      return;
    }

    squares_[position] = player;

    setPlayer(player_);
    setSquares(squares_);
  };

  return (
    <>
      <Board {...{ squares, handleOnClick }} />
    </>
  );
};

export default App;
