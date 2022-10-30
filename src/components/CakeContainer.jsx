import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
function CakeContainer(props) {
    const { numOfCakes, buyCake } = props;
    return (
        <div style={{border:"1px solid red"}}>
            <h2>Number of cakes: {numOfCakes} </h2>
            <button onClick={buyCake}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { numOfCakes: state.cakes.numOfCakes }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => {
            dispatch(buyCake())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)