import './History.scss';
import Action from './Action/Action';

const History = ({ history, handleOnJumpTo }) => {
  return (
    <div className='history'>
      <h3>Moves History</h3>
      {history.map((step, move) => (
        <Action key={move} {...{ move, handleOnJumpTo }} />
      ))}
    </div>
  );
};

export default History;
