import './Action.scss';

const Action = ({ state, handleOnClick }) => {
  return (
    <button
      className={`board__action ${state && `--state-${state}`}`}
      onClick={handleOnClick}
    >
      {state && (
        <i
          className={
            state === 'x' ? 'ri-close-line' : 'ri-checkbox-blank-circle-line'
          }
        ></i>
      )}
    </button>
  );
};

export default Action;
