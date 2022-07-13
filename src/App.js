import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop";

//Pages
import Home from "./components/pages/home";
import NewMovies from "./components/pages/new-movie";
import Popular from "./components/pages/popular";
import Search from "./components/pages/search";
import Movie from "./components/pages/movie";
import Error404 from "./components/pages/error404";
import Footer from "./components/Footer";

export default function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>

        <Content>
          <Routes>
            <Route path="/" exact={true} element={<Home />}></Route>

            <Route
              path="new-movie"
              exact={true}
              element={<NewMovies />}
            ></Route>

            <Route path="popular" exact={true} element={<Popular />}></Route>

            <Route path="search" exact={true} element={<Search />}></Route>

            <Route path="/movie/:id" exact={true} element={<Movie />}></Route>

            <Route path="*" exact={true} element={<Error404 />}></Route>
          </Routes>
        </Content>
      </Router>
      <Footer />
    </Layout>
  );
}
