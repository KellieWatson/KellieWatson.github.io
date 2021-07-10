import './style/App.css';
import Resume from './Resume.js';
import {Container} from "react-bootstrap";
import Profile from "./Profile";
import Footer from "./Footer";
import Header from "./Header"


function App() {


  return (
    <Container className="App" fluid>
        <Header />
        <Resume />
        <Footer/>

    </Container>
  );
}
export default App;
