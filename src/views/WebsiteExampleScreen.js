import React from 'react'
import Example from '../components/ExamplesComp/Example'

export default function WebsiteExampleScreen() {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Website Examples</h1>
            <h5 style={{textAlign:"center"}}>Click to open in a new tab</h5>
            <Example></Example>
        </div>
    )
}
