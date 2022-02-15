//ma page Home
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import frontImage from "../pictures/frontImage.jpeg";
import Article from "../components/Article";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const [articlePerPage, setArticlePerPage] = useEffect(10);

  const limit = 12;
  let allPages = data.count / limit;
  let pageMax = Math.ceil(allPages);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${limit}&page=${page}`
      );

      setData(response.data);
      SetIsLoading(false);
    };
    fetchData();
  }, [page]);
  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="homepage-header">
      <img className="front-image" src={frontImage} alt="frontImage" />

      <div className="container">
        <h1>Articles populaires</h1>
        <div className="pagination">
          {page <= 1 ? (
            <button className="page-btn">Page précédente</button>
          ) : (
            <button className="page-btn" onClick={() => setPage(page - 1)}>
              Page précédente
            </button>
          )}
          <div>
            <div className="page-num">{page}</div>
          </div>
          {page === pageMax ? (
            <button className="page-btn">Page suivante</button>
          ) : (
            <button className="page-btn" onClick={() => setPage(page + 1)}>
              Page suivante
            </button>
          )}

          {/* <button className="page-btn" onClick={() => setPage(page + 1)}>
            Page suivante
          </button> */}
        </div>
        <div className="front-articles">
          <Article article={data.offers} />
        </div>
      </div>
    </div>
  );
};

export default Home;
