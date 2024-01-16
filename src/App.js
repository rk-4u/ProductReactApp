import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://product-node-app.vercel.app/productsList")
      .then((res) => {
        console.log(res.data);
        setMyData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container ">
        {myData.map((card, index) => (
          <>
        <Link to={`/Detail/${card._id}`}  className="custom-link">
          <div className="outer" >
            <div className="box card">
              <div className="header_post">
                <img loading="lazy" src={card.thumbnail} alt="productImage" />
              </div>

              <div className="body_post">
                <div className="post_content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>

                  <div className="container_infos">
                    <div className="postedBy">
                      <span>Price : </span>
                      $ {card.price}
                    </div>

                    <div className="container_tags">
                      <span>Discount : </span>
                      <div className="tags">
                        {card.discountPercentage} %
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Link>
          <Outlet/>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
