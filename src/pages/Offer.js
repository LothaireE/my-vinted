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
      <div>
        {/* <Header /> */}
        <h1>Offer</h1>
        <Link to={"/"}>Go to Homepage</Link>
        <div>
          <div className="what">
            <div className="product-picture">
              <img src={data.product_image.secure_url} alt="" />
            </div>
            <div className="product-info">
              <div className="product-price">
                <p>{data.product_price} €</p>
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
              <div className="sub-details">
                <p>{data.product_name}</p>
                <p>{data.product_description}</p>
              </div>
              <div>
                <button className="product-btn">Potato</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
