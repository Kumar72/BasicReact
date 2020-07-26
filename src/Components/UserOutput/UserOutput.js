import React from 'react';
import './UserOutput.css'

const UserOutput = props => {
    return (
        <div className="UserOutput">
            <p>username: {props.username}</p>
            <p>{props.username}: Hello!</p>
        </div>
    )
}

export default UserOutput;
