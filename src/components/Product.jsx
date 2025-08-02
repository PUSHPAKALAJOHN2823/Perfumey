import React from "react";
import Img1 from "../assets/per2.jpg";
import Img2 from "../assets/per1.jpeg";
import Img3 from "../assets/per3.jpeg";

const perfume = [
  {
    name: "Velvet Dusk",
    price: "$110",
    desc: "A sensual blend of amber, plum, and blackcurrant that captures the elegance of twilight. Warm, romantic, and lingering",
    img:  Img1 ,
  },
  {
    name: "Nocturne Rose",
    price: "$125",
    desc: "Dark rose petals meet saffron and oud. A rich, mysterious scent for evenings and deep moods",
    img:  Img2 ,
  },
  {
    name: "Lune Blanche",
    price: "$150",
    desc: "White musk, vanilla orchid, and pear create a soft, airy scent — delicate and calming like moonlight on skin",
    img:  Img3 ,
  },
];

const Product = () => {
  return (
    <div className="container mx-auto px-4">
  <div className="flex flex-wrap gap-6 justify-center">
    {perfume.map((product, index) => (
      <div key={index} className="border shadow-lg p-4 w-80 rounded-lg bg-white">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold text-center">{product.name}</h2>
        <p className="text-pink-600 font-bold mt-2 text-center">{product.price}</p>
        <p className="text-gray-600 text-sm text-justify">{product.desc}</p>
      </div>
    ))}
  </div>
</div> 
  );
};

export default Product;
