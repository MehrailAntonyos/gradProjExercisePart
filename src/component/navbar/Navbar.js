import logo from './images/gymLogo.png';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
            <div className="logo">
                <img src={logo} className="logoRest" alt="logo" />
                    <h1 id="logo">GMS<span id="logoDecoration" style={{color: "var(--prime)"}}>.</span></h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Trainers</a></li>
                <li><a href="#">Plane</a></li>
                <li><a href="#">Exercises</a></li>
                <li><a href="#">Register</a></li>
                <i className="fas fa-user"></i>
            </ul>
        </nav>
    );
}

export default Navbar;