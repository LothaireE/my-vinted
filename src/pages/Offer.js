import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );

      setData(response.data);
      //   console.log("=====> ", response.data);
      SetIsLoading(false);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div>
      <div className="offer-background">
        {/* <Header /> */}
        <Link to={"/"}>
          {" "}
          <h3>Go to Homepage</h3>{" "}
        </Link>
        <div>
          {/* <div className="offer-block-left"> */}
          <div className="product-blocks">
            {/* <div className="product-block"> */}
            <div className="offer-block-left">
              <img
                className="product-picture"
                src={data.product_image.secure_url}
                alt=""
              />
            </div>

            <div className="offer-block-right">
              <div className="product-info">
                <div className="product-info-1">
                  <div className="product-price">
                    <h3>{data.product_price} €</h3>
                  </div>
                  <div className="product-details">
                    {data.product_details.map((details, index2) => {
                      const keys = Object.keys(details);
                      return (
                        <div className="correction">
                          <span>
                            {keys[0]} : {details[keys[0]]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="product-info-2">
                  <div className="sub-details">
                    <h3>{data.product_name}</h3>
                    <p>{data.product_description}</p>
                    <div className="article-owner">
                      <img
                        className="article-owner-pic"
                        src={data.owner.account.avatar.secure_url}
                        alt=""
                      />
                      <p className="article-owner-name">
                        {data.owner.account.username}
                      </p>
                    </div>
                  </div>

                  <div>
                    <button className="product-btn">Acheter</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
