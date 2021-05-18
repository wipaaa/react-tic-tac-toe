import { useState } from 'react';

import Board from './Board/Board';

const App = () => {
  const PLAYER_X = 'x';
  const PLAYER_O = 'o';

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(PLAYER_X);

  return (
    <>
      <Board {...{ squares }} />
    </>
  );
};

export default App;
