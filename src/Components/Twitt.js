import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faComment } from '@fortawesome/free-solid-svg-icons'
import './Twitt.css'

function Twitt() {

    let [twitts, setTwitts] = useState([1]);
    let [loading, setLoading] = useState(false);

    return (
        twitts.length > 0 ? (
            <div className="twitt-container">
                <div className="left-content">
                    <div className="profile-bubble">
                        <span style={{ color: '#F2E6D0', fontSize: 20 }}>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    </div>
                </div>
                <div className="right-content">

                    <div className="twitt-header">
                        <p className="twitt-header-title">Username</p>
                    </div>

                    <p type="text" className="twitt-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit in Lorem</p>

                    <div className="twitt-footer">
                        {/* <span style={{ color: '#213440', fontSize: 18, marginRight: 20 }}>
                            <FontAwesomeIcon icon={faComment} /> 14
                        </span> */}

                        <span style={{ color: '#f91880', fontSize: 18, marginRight: 20 }}>
                            <FontAwesomeIcon icon={faHeart} /> 34
                        </span>
                    </div>
                </div>
            </div>
        ) : (
            <>
                <p style={{ textAlign: 'center', color: 'white', fontWeight: 700, marginTop: 100}}>No Twitts</p>
                <button style={
                    {
                        display: 'block', 
                        margin: 'auto', 
                        color: 'white', 
                        fontWeight: 700, 
                        backgroundColor: '#1d9bf0',
                        border: 0,
                        height: 36,
                        width: 90,
                        borderRadius: 100
                    }
                        
                }>
                    Reload
                </button>
            </>
        )
    )
}

export default Twitt;