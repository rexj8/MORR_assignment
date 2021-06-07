import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <ul>
                <li> Home</li>
                <li>Terms and condition</li>
                <li>Privacy Policy</li>
                <li>Collection Statement</li>
                <li>Help</li>
                <li>Manage Account</li>
            </ul>
            <h6>Copyright &#169; 2016 DEMO Streaming.All rights Reserved .</h6>
            <div className="icons">
                <div className="social-media">
                    <i className="fab fa-facebook-f fa-3x"></i>
                    <i className="fab fa-instagram fa-3x"></i>
                    <i className="fab fa-twitter fa-3x"></i>
                </div>
                <div className="marketing">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="apple marketing"/>
                    <img src="https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0" alt="google marketing"/>
                    <img src="https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png" alt="microsoft makrketing"/>
                </div>
            </div>
        </div>
    )
}

export default Footer
