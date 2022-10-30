import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamAction'
function IceCreamContainer(props) {
    const { numOfIceCream, buyIceCream } = props
    return (
        <div style={{ border: "1px solid red" }}>
            <h2>Numbers of IceCreams: {numOfIceCream}</h2>
            <button onClick={buyIceCream}>Buy IceCream</button>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        numOfIceCream: state.iceCreams.numOfIceCream
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => {
            dispatch(buyIceCream())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)