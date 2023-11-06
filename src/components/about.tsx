import React from 'react'

const About:React.FC = () => {
    return (
        <div>
            <header>Current and Incoming Features</header>
            <article>
                <div>Available Features</div>
                <ul>
                    <li>Connect to Solana Wallet</li>
                    <li>Create New Post (text)</li>
                    <li>View Post</li>
                    <li>Reply on Post</li>
                    <li>View Replies</li>
                </ul>
                <div>Features to be Implemented in the Future</div>
                <ul>
                    <li>Able to post with image</li>
                    <li>Able to reply to replies</li>
                    <li>Can edit posts and replies</li>
                    <li>Can delete posts and replies</li>
                </ul>
            </article>
        </div>
    )
}

export default About
