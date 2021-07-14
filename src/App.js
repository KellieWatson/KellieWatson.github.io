import React from 'react';
import ReactDOM from 'react-dom';

import './style/App.css';
import Resume from './Resume.js';
import {Container} from "react-bootstrap";
import Profile from "./Profile";
import Footer from "./Footer";
import Header from "./Header"


function App() {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }, 1000);

        window.addEventListener("resize", debouncedHandleResize);

        return _ => {
            window.removeEventListener("resize", debouncedHandleResize);
        };
    });
    return (
        <Container className="App" fluid>
            <Header />
            <Resume />
            <Footer/>

        </Container>

    );
}

function debounce(fn, ms) {
    let timer;
    return _ => {
        clearTimeout(timer);
        timer = setTimeout(_ => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };

}
export default App;
