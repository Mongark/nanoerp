import { Outlet } from "react-router-dom";
import "./styles.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1 style={{ alignSelf: "center" }}>
          Amazonas ERP
        </h1>

        <ul className="navbar-links">
          <li>
            <Link className="navbar-link" to="/">
              <button>
                Dashboard
              </button>
            </Link>
          </li>
          <li>
            <Link className="navbar-link" to="/rooms">
              <button>
                Rooms
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
