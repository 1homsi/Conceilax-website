import React from 'react';
import './Example.css'
import { openInNewTab } from '../../Functions';

export default function Example() {
    return (
        <div className="container">
            <ol className="gradient-list">
                <li onClick={() => openInNewTab("https://conceilax-game-dev.netlify.app/")}>Conceilax Game Developement Website showcase</li>
                <li>Coming Soon</li>
                <li>Coming Soon</li>
                <li>Coming Soon</li>
                <li>Coming Soon</li>
                <li>Coming Soon</li>
                <li>Coming Soon</li>
                <li>Coming Soon</li>
                <li>Coming Soon</li>
                <li>Coming Soon</li>
            </ol>
        </div>
    )
}
