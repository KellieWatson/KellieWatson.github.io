import React from 'react';
import ReactDOM from 'react-dom';
import "tailwindcss/tailwind.css"
import './style/App.css';
import {Container} from "react-bootstrap";
import Footer from "./Footer";
import Navigation from "./Navigation"
import Profile from "./Profile";
import Header from "./Header";

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
            <Profile/>
            <Navigation/>
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
