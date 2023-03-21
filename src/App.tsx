import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout";

import Home from "./pages/home";
import About from "./pages/about";
import Clients from "./pages/clients";
import Contact from "./pages/contact";

const routes = [
  { path: "/", component: <Home /> },
  { path: "/about", component: <About /> },
  { path: "/clients", component: <Clients /> },
  { path: "/contact", component: <Contact /> },
];

function App() {
  return (
    <div className='App'>
      <Layout>
        <BrowserRouter>
          <Routes>
            {routes.map((el: { path: string; component: JSX.Element }) => (
              <Route path={el.path} element={el.component} />
            ))}
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
