import React from 'react';
import './css/App.css';
import arr from './property/fixtures';
import FirstComponent from "./components/FirstComponent";

function App() {
    return (
        <div>
            <FirstComponent arr={arr}/>
        </div>
    );
}



export default App;