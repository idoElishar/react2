import React, { useState } from 'react'

function Text() {
    const [text, setText] = useState(true);
    function removeText() {
        if (text) {
            setText(false);
        }
        else {
            setText(true);
        }
    }
    return (
        <div>
            {text &&
                <h1>this is a text </h1>}
            <button onClick={removeText}>click to {text === true ? "remove" : "add"} text</button>
        </div>
    )
}

export default Text
