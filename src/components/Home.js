import image from "../assets/image/crumbleshop.jpg";
const Home = () => {
  return (
    <>
      <div className="main">
        <h1 className="title"> Welcome to crumbl cookies!</h1>
        <h4>crumbl cookies are the most ordered cookies</h4>
        <img src={image} className="cookiesShop" alt="shop"></img>
        <div></div>
      </div>
    </>
  );
};
export default Home;
