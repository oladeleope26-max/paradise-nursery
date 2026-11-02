import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const plantsArray = [
  { name: "Snake Plant", cost: "$15", image: "https://cdn.pixabay.com/photo/2020/09/30/19/06/snake-plant-5518957_1280.jpg", category: "Low Maintenance" },
  { name: "Spider Plant", cost: "$12", image: "https://cdn.pixabay.com/photo/2015/04/20/07/10/plant-729214_1280.jpg", category: "Air Purifying" },
  { name: "Peace Lily", cost: "$18", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269505_1280.jpg", category: "Flowering" },
  { name: "Aloe Vera", cost: "$10", image: "https://cdn.pixabay.com/photo/2018/05/02/09/30/aloe-vera-3364770_1280.jpg", category: "Succulent" },
  { name: "Monstera", cost: "$25", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/monstera-5939075_1280.jpg", category: "Tropical" },
  { name: "Fern", cost: "$14", image: "https://cdn.pixabay.com/photo/2018/01/03/04/00/fern-3057239_1280.jpg", category: "Indoor" },
];

function ProductList() {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      {plantsArray.map((plant, index) => (
        <div key={index}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.cost}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
