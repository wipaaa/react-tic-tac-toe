import './Board.scss';
import Action from './Action/Action';

const Board = ({ squares, handleOnClick }) => {
  return (
    <div className='board'>
      {squares &&
        squares.map((square, index) => (
          <Action
            key={index}
            state={square}
            handleOnClick={() => handleOnClick(index)}
          />
        ))}
    </div>
  );
};

export default Board;
