import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { URL_API, API } from "../../utils/constans";
// import Footer from "../Footer";
import Loading from "../Loading";
import MovieCatalog from "../MovieCatalog/MovieCatalog";
import Pagination from "../Pagination";

export default function NewMovies() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/now_playing?api_key=${API}&lenguage=es-ES&page=${page}`
      );
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <Row>
      <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, sontWeight: "bold", marginLeft: 500 }}>
          Ultimos lanzamientos
        </h1>
      </Col>
      {movieList.results ? (
        <Row>
          <Col span="24">
            <MovieCatalog movies={movieList} />
          </Col>
          <Col span="24">
            <Pagination
              currentPage={movieList.page}
              totalItems={movieList.total_results}
              onChangePage={onChangePage}
              textAlign="center"
            />
          </Col>
        </Row>
      ) : (
        <Col span="24">
          <Loading />
        </Col>
      )}
    </Row>
  );
}
