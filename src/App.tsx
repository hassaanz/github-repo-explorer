import React from 'react';
import './App.css';
import { Repository, default as RepositoryTable } from "./Components/RepositoryTable";

function App() {
    const repoItems: Repository[] = [{
        name: 'asd',
        stars: 20,
        forks: 200,
        url: '',
    }, {
        name: 'asd',
        stars: 20,
        forks: 200,
        url: '',
    }]
    return (
        <div className="App">
            <RepositoryTable repositories={repoItems} />
        </div>
    );
}

export default App;
