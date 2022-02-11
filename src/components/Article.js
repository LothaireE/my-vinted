import { Link } from "react-router-dom";

const Article = ({ article }) => {
  //   console.log("mais t'aurais pas capté les props ?", article);
  return (
    <div>
      <h1>article à venir</h1>
      <div className="article-parent">
        {article.map((article, index) => {
          //   console.log("1", article.product_image.secure_url);
          //   console.log("2", article.owner.account.username);
          console.log(article._id);
          return (
            <div key={article._id}>
              <div className="articles">
                <div className="article">
                  <div className="article-owner">
                    <img
                      className="article-owner-pic"
                      src={article.owner.account.avatar.secure_url}
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
                  <div className="buy-btn">
                    <Link className="buy-btn-text" to={`/offer/${article._id}`}>
                      Buy
                    </Link>
                  </div>
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
