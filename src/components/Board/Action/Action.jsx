import './Action.scss';

const Action = ({ state, handleOnClick }) => {
  const iconX = 'ri-close-line';
  const iconO = 'ri-checkbox-blank-circle-line';
  const classButton = `board__action ${state && `--state-${state}`}`;
  const classIcon = state === 'x' ? iconX : iconO;

  return (
    <button className={classButton} onClick={handleOnClick}>
      {state && <i className={classIcon}></i>}
    </button>
  );
};

export default Action;
