const Action = ({ state, handleOnClick }) => {
  return (
    <button className='board__action' onClick={handleOnClick}>
      {state}
    </button>
  );
};

export default Action;
