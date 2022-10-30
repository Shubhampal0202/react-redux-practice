import React from 'react'
import { connect } from 'react-redux'
import { fetchImages } from '../redux/images/imagesAction'
function ImagesContainer(props) {
    const { loading, images, error, fetchImage } = props;
    console.log("props ", props)
    return (
        <div>
            <h2>Images Container</h2>
            <button onClick={fetchImage}>fetch Images</button>
            {
                loading ? <h2>Images Loading...</h2> :
                    error ? <h2>{error}</h2> :
                        images &&
                        <div style={{ display: "flex", justifyContent: "space-evenly", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
                            {
                                
                                images.map((image) => {
                                    return (
                                        <img src={image.url}
                                            alt={image.title}
                                            style={{ height: 150, boxShadow: "5px 5px 8px #ccc" }}
                                            key={image.id} />
                                    )
                                })
                            }
                        </div>
            }

        </div>
    )
}
const mapStateToProps = (state) => {
    return { loading: state.images.loading, images: state.images.images, error: state.images.error }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchImage: () => {
            dispatch(fetchImages)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer)