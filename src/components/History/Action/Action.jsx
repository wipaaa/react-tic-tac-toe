import './Action.scss';

const Action = ({ move, handleOnJumpTo }) => {
  return (
    <button className='history__item' onClick={() => handleOnJumpTo(move)}>
      <span>{move ? `Move ${move}` : 'Game Start'}</span>
      <i className='ri-arrow-right-s-line'></i>
    </button>
  );
};

export default Action;
