import "./Navbar.css";

const Navbar = () => {
  function launchFullScreenOnLoad() {
    let elemento = document.documentElement; // Elemento raíz del documento (normalmente <html>)

    if (elemento.requestFullscreen) {
      elemento.requestFullscreen();
    } else if (elemento.mozRequestFullScreen) {
      elemento.mozRequestFullScreen();
    } else if (elemento.webkitRequestFullscreen) {
      elemento.webkitRequestFullscreen();
    } else if (elemento.msRequestFullscreen) {
      elemento.msRequestFullscreen();
    }
  }

  function exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  return (
    <nav className="navbar animate__animated animate__fadeIn">
      <div className="navbar-container">
        <div className="icons-container">
          <button
            className="btn-icon bg-red btn-icon-close"
            onClick={exitFullScreen}
          >
            <span>x</span>
          </button>
          <button className="btn-icon bg-yellow"></button>
          <button
            className="btn-icon bg-green btn-open btn-icon-open"
            id="full-screen"
            onClick={launchFullScreenOnLoad}
          >
            <span>{"<>"}</span>
          </button>
        </div>
        <span className="nav-title">&lt;WebDeveloper/&gt;</span>
      </div>
    </nav>
  );
};

export default Navbar;
