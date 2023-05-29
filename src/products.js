import image from "./assets/image/cooki.jpeg";
// import src from "*.avif";
// import image1 from "./assets/image/cutecookie.jpeg";
const products = [
  {
    name: "chocolate chip cookies",
    price: "10 KD",
    image: image,
  },
  {
    name: "cute cookie",
    price: "10 KD",
    image:
      "data:image/jpeg;base64,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",
  },
];
export default products;