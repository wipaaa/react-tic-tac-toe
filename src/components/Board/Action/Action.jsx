import iconPlayerX from '../../../asset/icons/icon-x.svg';
import iconPlayerO from '../../../asset/icons/icon-o.svg';

const Action = ({ state, handleOnClick }) => {
  const alt = state && `icon for player ${state}`;
  const icon = state === 'x' ? iconPlayerX : iconPlayerO;

  return (
    <button className='board__action' onClick={handleOnClick}>
      {state && <img src={icon} alt={alt} />}
    </button>
  );
};

export default Action;
