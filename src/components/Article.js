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
                  <p>{article.owner.account.username}</p>
                  <img
                    className="article-image"
                    src={article.product_image.secure_url}
                    alt=""
                  />
                  <p className="article-key">{article._id}</p>
                  <Link to={`/offer/${article._id}`}>
                    <p>Comprar</p>
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
