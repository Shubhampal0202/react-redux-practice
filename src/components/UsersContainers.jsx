import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/users/usersAction'
function UsersContainers(props) {
    const { loading, users, error, fetchUser } = props;

    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <div>
            <h2>Users List</h2>
            {
                loading ? <h2>Loading...</h2> :
                    error ? <div>{error}</div> :
                        users && users.map((user) => {
                            return (
                                <div key={user.id} style={{
                                    borderRadius: "6px", padding: "10px", width: "50%", margin: "25px auto", textAlign:"center",
                                    fontFamily: "sans-serif", boxShadow: "0px 2px 8px #666"

                                }}>
                                    <p><strong> User Name : </strong>{user.name}</p>
                                    <p><strong>Email : </strong>{user.email}</p>
                                    <p><strong>Phone : </strong>{user.phone}</p>
                                    <p><strong>City : </strong>{user.address.city}</p>
                                </div>
                            )
                        })
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        loading: state.users.loading, users: state.users.users, error: state.users.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => {
            dispatch(fetchUsers)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainers);