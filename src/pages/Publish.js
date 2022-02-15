import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  console.log("=======S", token);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const data = new FormData();

      data.append("title", title);
      data.append("description", description);
      data.append("price", price);
      data.append("condition", condition);
      data.append("city", city);
      data.append("brand", brand);
      data.append("size", size);
      data.append("color", color);
      data.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="publish-main">
      <div className="publish-div">
        <form className="publish-formular" onSubmit={handleSubmit}>
          <h3>Vends ton article</h3>
          <div className="publish-block-1">
            <input
              className="form-inputs-pic"
              type="file"
              onChange={(event) => setPicture(event.target.files[0])}
            />
          </div>

          <div className="publish-block-2">
            <div className="publish-lines">
              <p>Titre</p>
              <input
                className="form-inputs"
                type="text"
                placeholder="ex: chemise en coton rose"
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>

            <div className="publish-lines">
              <p>Décris ton article</p>
              <input
                className="form-inputs"
                type="text-area"
                placeholder="ex: taille grand, peu porté"
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>

          <div className="publish-block-3">
            <div className="publish-lines">
              <p>Marque</p>
              <input
                className="form-inputs"
                type="text"
                placeholder="ex: Desigual"
                onChange={(event) => setBrand(event.target.value)}
              />
            </div>

            <div className="publish-lines">
              <p>Taille</p>
              <input
                className="form-inputs"
                type="text"
                placeholder="ex: XXXL/55/2"
                onChange={(event) => setSize(event.target.value)}
              />
            </div>

            <div className="publish-lines">
              <p>Couleur</p>
              <input
                className="form-inputs"
                type="text"
                placeholder="ex: Taupe"
                onChange={(event) => setColor(event.target.value)}
              />
            </div>

            <div className="publish-lines">
              <p>Etat</p>
              <input
                className="form-inputs"
                type="text"
                placeholder="ex: bon état, peu de marque d'usure"
                onChange={(event) => setCondition(event.target.value)}
              />
            </div>

            <div className="publish-lines">
              <p>Lieu</p>
              <input
                className="form-inputs"
                type="text"
                placeholder="ex: Villeneuve-la-Garenne"
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
          </div>

          <div className="publish-block-4">
            <div className="publish-lines">
              <p>Prix</p>
              <input
                className="form-inputs"
                type="num"
                placeholder="0.00 €"
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>

            {/* <input className="form-checkbox" type="checkbox" /> */}
          </div>
          <div className="submit-block">
            <input className="submit-btn" type="submit" value={"ajouter"} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Publish;
