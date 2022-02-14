import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Publish = () => {
  console.log("=======S", setUser);
  const { setUser } = useParams();
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  //   ajouter const product_detail = array
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      //a wild FormData appear : permet de creer
      //des paires "clef" : "value"* d'ou les futurs
      //req.fields/req.files I guess ?

      const data = new FormData();
      //* les dites paires "clef" : "value"
      //   data.append("owner.account.username", username);

      data.append("product_image", picture);
      data.append("product_name", title);
      data.append("product_description", description);
      data.append("product_price", price);

      const response = await axios.post(
        `https://lereacteur-vinted-api.herokuapp.com/offer/publish${
          (data,
          params,
          {
            headers: {
              authorization: `Bearer ${setUser}`,
            },
          })
        }
        `
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Publish</h1>
      <div className="formular-div">
        <form className="formular" onSubmit={handleSubmit}>
          <div>
            <input
              className="form-inputs"
              type="file"
              onChange={(event) => setPicture(event.target.files[0])}
            />
          </div>

          <div>
            <input
              className="form-inputs"
              type="text"
              placeholder="ex: chemise en coton rose"
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              className="form-inputs"
              type="text"
              placeholder="ex: taille grand, peu porté"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          {/* data.product_details est un tableau, voir comment on s'y prend : Object. ??*/}
          {/* <div>
              <input type="text" placeholder=""/>
          </div> */}
          <div>
            <input
              className="form-inputs"
              type="num"
              placeholder="0.00 €"
              onChange={(event) => setPrice(event.target.value)}
            />
            <input className="form-checkbox" type="checkbox" />
          </div>
          <div>
            <input className="submit-btn" type="submit" value={"ajouter"} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Publish;
