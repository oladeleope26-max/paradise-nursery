import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const plantsArray = [
  { category: "Air Purifying Plants", plants: [
    { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night, improving air quality.", cost: "$15" },
    { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/06/19/16/spider-plant-3520920_1280.jpg", description: "Filters formaldehyde and xylene from the air.", cost: "$12" },
    { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269505_1280.jpg", description: "Removes mold spores and purifies the air.", cost: "$18" }
  ]},
  { category: "Aromatic Fragrant Plants", plants: [
    { name: "Lavender", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269505_1280.jpg", description: "Calming scent, used in aromatherapy.", cost: "$20" },
    { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529_1280.jpg", description: "Sweet fragrance, promotes relaxation.", cost: "$22" },
    { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2015/10/09/19/19/rosemary-980917_1280.jpg", description: "Invigorating scent, improves memory.", cost: "$10" }
  ]},
  { category: "Insect Repellent Plants", plants: [
    { name: "Basil", image: "https://cdn.pixabay.com/photo/2016/04/10/12/46/basil-1319768_1280.jpg", description: "Natural insect repellent, safe for indoors.", cost: "$9" },
    { name: "Mint", image: "https://cdn.pixabay.com/photo/2018/05/02/09/30/mint-3364792_1280.jpg", description: "Repels ants, mosquitoes, and spiders.", cost: "$8" },
    { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2019/08/27/11/38/lemon-balm-4434345_1280.jpg", description: "Repels mosquitoes and adds fresh scent.", cost: "$11" }
  ]},
];

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  const calculateTotalQuantity = () => {
    let total = 0;
    cartItems.forEach(item => { total += item.quantity; });
    return total;
  };

  const styleObj = { backgroundColor: "#4CAF50", color: "#fff", padding: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" };

  return (
    <div>
      <div style={styleObj}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 style={{ cursor: "pointer" }} onClick={onHomeClick}>Paradise Nursery</h3>
          <a href="#" onClick={(e) => { e.preventDefault(); setShowPlants(true); }} style={{ color: "white", marginLeft: "20px", textDecoration: "none" }}>Plants</a>
        </div>
        <div>
          <a href="#" onClick={(e) => { e.preventDefault(); setShowCart(true); }} style={{ color: "white", textDecoration: "none" }}>
            <h3 style={{ display: "flex" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="30" height="30"><rect width="256" height="256" fill="none"/><path d="M42.3,72H221.5l-15.4,99.3a10.1,10.1,0,0,1-10,8
