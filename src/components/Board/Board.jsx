const Board = ({ squares }) => {
  return (
    <div className='board'>
      {squares &&
        squares.map((square, index) => (
          <button key={index} className='board__action'>
            {square}
          </button>
        ))}
    </div>
  );
};

export default Board;
