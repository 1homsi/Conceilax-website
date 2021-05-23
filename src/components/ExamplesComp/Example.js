import React from 'react';
import './Example.css'
import { openInNewTab } from '../../Functions';

export default function Example() {
    return (
        <div className="container">
            <ol className="gradient-list">
                <li onClick={() => openInNewTab("https://conceilax-game-dev.netlify.app/")}>Conceilax Game Developement Website showcase</li>
                <li>Exmaple 2</li>
                <li>Example 3</li>
                <li>Example 4</li>
                <li>Example 5</li>
                <li>Example 6</li>
                <li>Example 7</li>
                <li>Exmaple 8</li>
                <li>Exmaple 9</li>
                <li>Example 10</li>
            </ol>
        </div>
    )
}
