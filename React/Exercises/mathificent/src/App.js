import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto text-left">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
            </ul>
          </div>
          <a className="navbar-brand" href="/">Mathificent</a>
        </nav>
      </header>
      <h1>Mathificent</h1>
      <footer className="navbar fixed-bottom bg-dark">
        <a href="https://www.webucator.com" className="text-light">
          Copyright &copy; {new Date().getFullYear()} Webucator
        </a>
      </footer>
    </div>
  );
}

export default App;
