import React from 'react';

const UserOutput = props => {
    return (
        <div>
            <p>{props.name}: This is the first paragraph</p>
            <p>{props.name}: And this is the second paragraph</p>
        </div>
    )
}

export default UserOutput;
