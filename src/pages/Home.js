//ma page Home
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import frontImage from "../pictures/frontImage.jpeg";
import Article from "../components/Article";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );

      setData(response.data);
      //   console.log("base ", response.data.offers);
      SetIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="homepage-header">
      <img className="front-image" src={frontImage} alt="frontImage" />
      <h1>Home</h1>

      <div className="front-articles">
        <Article article={data.offers} />
      </div>
    </div>
  );
};

export default Home;
