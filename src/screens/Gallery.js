import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Header from "../components/Header";
import G2021 from "../components/paintings/G2021";
import G2022 from "../components/paintings/G2022";

const routes = [
  {
    path: "/gallery",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <h2><G2022/></h2>
  },
  {
    path: "/gallery/2021",
    sidebar: () => <div>2021</div>,
    main: () => <h2><G2021/></h2>
  },
  {
    path: "/gallery/2020",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/gallery/2019",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

export default function Gallery() {
  return (
    <Router>
      <Header myHeader="Gallery"/>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "10%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/gallery" className="btn btn-outline-primary">2022</Link>
            </li>
            <li>
              <Link to="/gallery/2021" className="btn btn-outline-primary">2021</Link>
            </li>
            <li>
              <Link to="/gallery/2020" className="btn btn-outline-primary">2020</Link>
            </li>
            <li>
              <Link to="/gallery/2019" className="btn btn-outline-primary">2019</Link>
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
