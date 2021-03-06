import { Link } from "react-router-dom";
import defaultPic from "../pictures/defaultPic.png";
const Article = ({ article }) => {
  return (
    <div>
      <div className="article-parent">
        {article.map((article, index) => {
          return (
            <div key={article._id}>
              <div className="articles">
                <div className="article">
                  <div className="article-owner">
                    <img
                      className="article-owner-pic"
                      src={
                        article.owner.account.avatar
                          ? article.owner.account.avatar.secure_url
                          : defaultPic
                      }
                      alt=""
                    />
                    <p className="article-owner-name">
                      {article.owner.account.username}
                    </p>
                  </div>
                  <div className="article-image-box">
                    <img
                      className="article-image"
                      src={article.product_image.secure_url}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="article-name">{article.product_name}</p>
                    <p className="article-price">{article.product_price} €</p>
                  </div>

                  <Link className="buy-btn-text" to={`/offer/${article._id}`}>
                    <div className="buy-btn">Buy</div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Article;
