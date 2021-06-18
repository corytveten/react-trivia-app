import React from 'react'

const User = ({ username, score }) => {

    // if (!username) {
    //     return;
    // }

    return (
        <div>
            <h2>Player: {username}</h2>
            <h3>Score: {score}</h3>
        </div>
    )
}

export default User;