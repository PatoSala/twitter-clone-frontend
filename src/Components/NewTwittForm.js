import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './NewTwittForm.css';

function NewTwittForm() {

    const [postText, setPostText] = useState('');

    let handleChange = (event) => {
        setPostText(event.target.value);
    }

    return (
        <div className="new-twitt-container">
            <div className="left-content">
                <div className="profile-bubble">
                    <span style={{ color: '#F2E6D0', fontSize: 20 }}>
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                </div>
            </div>
            <div className="right-content">

                <div className="twitt-form-header">
                    {/* <p className="twitt-form-header-title">Username</p> */}
                </div>

                <input type="text" className="new-twitt-input" placeholder="Write something..." value={postText} onChange={handleChange} style={{color: postText !== ''? 'white' : undefined}}/>

                <div className="submit-btn-container">
                    <button className="post-twitt-btn">Post</button>
                </div>
            </div>
        </div>
    )
}

export default NewTwittForm;