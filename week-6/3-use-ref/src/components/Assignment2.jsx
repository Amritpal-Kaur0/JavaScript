import  { useState,useRef, useCallback } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [, forceSet] = useState();

    const noMount=useRef(0);

    const handleReRender = () => {
        // Update state to force re-render
        forceSet(Math.random());
    };
    noMount.current=noMount.current+1;

    return (
        <div>
            <p>This component has rendered {noMount.current} times.</p>
            <button  onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};