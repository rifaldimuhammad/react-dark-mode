export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? 'dark' : ''}>
      <div className="logo">
        <img className="logo_icon" src="./images/react-icon-small.png" />
        <h3 className="logo_text">ReactFacts</h3>
      </div>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
