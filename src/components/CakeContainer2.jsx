// import React from 'react'
// import { connect } from 'react-redux'
// import { useState } from 'react';
// import { buyCake } from '../redux/cake/cakeActions'
// function CakeContainer2(props) {
//     const { numOfCakes, buyCake } = props;
//     const [number, setNumber] = useState("");
//     return (
//         <div>
//             <h2>(custom) Numbers Of Cakes {numOfCakes}</h2>
//             <input type='number' placeholder='Enter a number eg: 2'
//                 value={number} onChange={(e) => { setNumber(e.target.value) }} />
//             <button onClick={() => { buyCake(number) }}>Buy Cake</button>
//         </div>
//     )
// }
// const mapStateToProps = (state) => {
//     return { numOfCakes: state.cakes.numOfCakes }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         buyCake: (number) => {
//             dispatch(buyCake(number))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer2)





import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react';
import { buyCake, setValue } from '../redux/cake/cakeActions'
function CakeContainer2(props) {
    console.log(props.number)
    const { numOfCakes, buyCake, setValue, number } = props;
    return (
        <div style={{border:"1px solid red"}}>
            <h2>(custom) Numbers Of Cakes: {numOfCakes}</h2>
            <input type='number' placeholder='Enter a number eg: 2'
                value={number} onChange={(e) => {
                    let number = e.target.value;
                    setValue(number);
                }} />
            <button onClick={() => { buyCake(number) }}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { numOfCakes: state.cakes.numOfCakes, number: state.cakes.number }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => {
            dispatch(buyCake(number))
        },
        setValue: (number) => {
            dispatch(setValue(number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer2)