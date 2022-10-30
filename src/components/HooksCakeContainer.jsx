import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from '../redux/cake/cakeActions'

const HooksCakeContainer = () => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cakes.numOfCakes);

  return (
    <div style={{border:"1px solid red"}}>
      <h2>(Hooks) Number of cakes: {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
