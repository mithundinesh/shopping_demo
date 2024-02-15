import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import BannerImage from "./assets/banner-image.png";
import { Button, Card } from "@mui/material";

import Whishlist from "./assets/wishlist.svg"
import Forward from "./assets/forward.svg"
import Ad1 from "./assets/ad1.png"
import Ad2 from "./assets/ad2.png"
import { TextField } from "@mui/material";
import DummyCategory from "./assets/dummy-category.png"

function App() {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategory(json));
  };

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const categoryBG = ["#EBF8E6", "#FFE8ED", "#E5EDFA", "#FFEFB6"]
  return (
    <div className="App">
      <Header />
      <div>
        <div className="top-box">{["Best Seller", "Product", "Brand", "Outlet"].map(e => (<div style={{ margin: "5px 10px" }}>{e}</div>))}</div>
        <div className="banner-container">
          <div className="text-container">
            <div className="large-text">WORKOUT ESSENTIAL SUPPLIMENTS</div>
            <div className="small-text">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.</div>
            <button className="custom-button">Buy Now</button>
          </div>
          <img src={BannerImage} style={{ width: 250 }} />
        </div>
        <div className="category-contanier">
          <div className="text-container">
            <div>Top Category's</div>
            <div>View all</div>
          </div>
          <div className="category-list-container">
            {category.length &&
              category.map((c, i) => {
                return (
                  <Card
                    sx={{
                      minWidth: 200,
                      margin: "0px 10px",
                      padding: "20px 10px",
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      backgroundColor: categoryBG[i],
                      boxShadow: 0
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>{c.charAt(0).toUpperCase() + c.slice(1)}</div>
                    <img src={DummyCategory} style={{ width: 60 }} />
                  </Card>
                );
              })}
          </div>
        </div>

        <div className="category-contanier">
          <div className="text-container">
            <div>Popular</div>
            <div>View all</div>
          </div>
          <div className="tabs">
            <div className="tab active">Best Seller</div>
            <div className="tab">Categories</div>
          </div>

          <div className="category-list-container">
            {products.length &&
              products.map((p) => {
                return (
                  <div className="product">
                    <div className="actions"><img src={Whishlist} style={{ width: 15, marginRight: 5 }} /> <img src={Forward} style={{ width: 15 }} /> </div>
                    <div className="img"> <img src={p.image} style={{ width: 80 }} /></div>
                    <div className="text">
                      <div className="main-title">{p.title}</div>
                      <div className="strike-text">MRP : ₹570.00</div>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ fontWeight: "500" }}>
                          Price : ₹{p.price}
                        </div>
                        <div style={{ color: 'green', fontSize: 15, marginLeft: 5 }}>32% OFF</div>
                      </div>
                    </div>
                    <Button className="add-button" variant="outlined" fullWidth >Add to Cart</Button>
                  </div>
                );
              })}
          </div>


        </div>
        <div className="ad-container">
          <img className="image" src={Ad1} />
        </div>
        <div className="ad-container ad-bg">
          <img className="image" src={Ad2} />
        </div>
        <div className="get-touch-container">
          <div className="text">
            <div className="large-text">Grab an extra 5% discount</div>
            <div>Subscribe to monthly newsletter. Get the latest product updates and special offers delivered right to your inbox. </div>
          </div>
          <TextField variant="outlined" placeholder="Enter email address" size="small" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
