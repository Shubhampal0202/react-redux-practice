import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from '../redux/iceCream/iceCreamAction'
function HooksIceCreamContainer() {
    const dispatch = useDispatch();
    const numOfIceCream = useSelector((state) => state.iceCreams.numOfIceCream);
    return (
        <div style={{ border: "1px solid red" }}>
            <h2>(Hooks) Number Of IceCream: {numOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default HooksIceCreamContainer