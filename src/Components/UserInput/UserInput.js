import React from "react";
import './UserInput.css'

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <p>Name:
                <input type='text' onChange={props.change}
                      value={props.currentName}/>
            </p>

        </div>
    )
};

export default UserInput;
