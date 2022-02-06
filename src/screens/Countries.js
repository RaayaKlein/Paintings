import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import England from "../components/countries/England";

const routes = [
  {
    path: "/countries",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <h2>Our world</h2>
  },
  {
    path: "/countries/england",
    sidebar: () => <div>England</div>,
    main: () => <England/>
  },
  {
    path: "/countries/russia",
    sidebar: () => <div>Russia</div>,
    main: () => <h2>Russia</h2>
  }
];

export default function countries() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "10%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {/* <li>
              <Link to="/countries" className="btn btn-outline-primary">2021</Link>
            </li> */}
            <li>
              <Link to="/countries/england" className="btn btn-outline-primary">England</Link>
            </li>
            <li>
              <Link to="/countries/russia" className="btn btn-outline-primary">Russia</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
