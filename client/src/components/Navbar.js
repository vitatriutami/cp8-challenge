import logo from "../logo.svg"

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/#">
                    <img src={logo} alt="logo" width="40" height="40" className="d-inline-block"/>
                    React
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/#">Docs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Tutorial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Community</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar