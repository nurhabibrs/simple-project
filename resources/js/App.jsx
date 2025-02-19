import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Home from './pages/Home';


function App() {
    return (
        <>
        <Home/>
        </>
    );
}

export default App;

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
