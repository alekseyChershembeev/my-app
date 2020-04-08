import React from 'react';
import './css/App.css';
import arr from './property/fixtures';
import FirstComponent from "./components/FirstComponent";
import NameForm from "./components/forms/NameForm";

function App() {
    return (
        <div>
            <NameForm/>
            <FirstComponent arr={arr}/>
            <br/>
        </div>
    );
}



export default App;