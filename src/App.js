// import logo from "./logo.svg";
import "./App.css";
import image from "./assets/image/cookieshop.jpeg";
import products from "./products";

// import { fragment } from "";
function App() {
  // let product = "cookies";

  // const list = products.map((product) => {
  //   return (
  //     <div className="border">
  //       <img src={product.image} />
  //       <h1>{product.name}</h1>
  //       <h1>{product.price}</h1>
  //     </div>
  //   );
  // });

  const list = products.map((product) => {
    return (
      <div className="border">
        <img src={product.image} />
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
      </div>
    );
  });
  // [
  //   <h1>Noura</h1>,
  //   <div>
  //     <div> {products[0].name}</div>
  //     <div>{products[0].price}</div>
  //     <img src={products[0].image} height="300px"></img>
  //   </div>,
  //   <div>
  //     <div> {products[1].name}</div>
  //     <div>{products[1].price}</div>
  //     <img src={products[1].image} height="300px"></img>
  //   </div>,
  //   <h1>Nouf</h1>,
  //   <h1>Ali</h1>,
  // ];

  return (
    <>
      <div className="main">
        <h1 className="title"> welcome to cookies and beyond!</h1>
        <h4>crumble cookies are the most ordered cookies</h4>
        <img src={image} className="cookiesShop" alt="shop"></img>
        <div>
          {/* <div> {products[0].name}</div>
          <div>{products[0].price}</div>
          <img src={products[0].image} alt="cookie" height="300px"></img> */}
        </div>
        <div>
          {/* <div> {products[1].name}</div>
          <div>{products[1].price}</div>
          <img src={products[1].image} alt="cookie" height="300px"></img> */}
        </div>
      </div>
      <div class="flexThis">{list}</div>
    </>
  );
}

export default App;
