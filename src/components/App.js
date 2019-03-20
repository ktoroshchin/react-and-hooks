import React, { Component, useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
    const [resources, setResources] = useState('posts')
    return(
        <div>
            <div>
                <button onClick={() => setResources('posts')}>POSTS</button>
                <button onClick={() => setResources('todos')}>TODOS</button>
            </div>
            <ResourceList resource={resources}/>
        </div>
    )
    
}

export default App;