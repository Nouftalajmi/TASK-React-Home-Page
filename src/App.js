// import logo from "./logo.svg";
import "./App.css";
import image from "./assets/image/cookieshop.jpeg";

// import { fragment } from "";
function App() {
  return (
    <>
      <div className="main">
        <h1 className="title"> welcome to cookies and beyond!</h1>
        <h4>crumble cookies are the most ordered cookies</h4>
        <img src={image} className="cookiesShop" alt="shop"></img>
      </div>
    </>
  );
}

export default App;
