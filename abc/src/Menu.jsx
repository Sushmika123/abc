import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Menu.css';
import biryaniImage from './briyani.jpg';
import juiceImage from './juice.jpg';
import mojitoImage from './mojito.jpg';
import koththuImage from './koththu.jpg';
import friedriceImage from './friedrice.jpg';
import eggImage from './egg.jpg';
import curryImage from './curry.jpg';
import breakfastImage from './breakfast.jpg';
import dessertImage from './desserts.jpg'
import specialOfferImage from './SpecialOffers.jpg'


const menuData = [
  {
    category: 'Biryani',
    backgroundImage: biryaniImage,
    items: [
      { name: 'Chicken Biryani', description: 'Fragrant basmati rice cooked with marinated chicken, spices, and herbs.', price: 1500 },
      { name: 'Mutton Biryani', description: 'Tender mutton pieces cooked in traditional spices and layered with aromatic rice.', price: 1650 },
      { name: 'Prawn Biryani', description: 'Juicy prawns cooked with basmati rice and traditional biryani spices.', price: 2150 },
      { name: 'Vegetable Biryani', description: 'A mix of seasonal vegetables cooked with basmati rice, paneer, and rich spices.', price: 1050 },
      { name: 'Seafood Biryani', description: 'A combination of fish, prawns, and calamari cooked with flavorful spices and rice.', price: 2250 },
    ],
  },
 
  {
    category: 'Koththu',
    backgroundImage: koththuImage, 
    items: [
      { name: 'Vegetable Koththu', description: 'Chopped flatbread stir-fried with fresh vegetables, eggs, and spices.', price: 1000 },
      { name: 'Chicken Koththu', description: 'Chopped flatbread stir-fried with marinated chicken, vegetables, and eggs.', price: 1500 },
      { name: 'Fish Koththu', description: 'Stir-fried flatbread with seasoned fish, vegetables, and spices.', price: 1250 },
      { name: 'Mutton Koththu', description: 'Flatbread stir-fried with mutton, eggs, and spices for a hearty meal.', price: 1750 },
      { name: 'Cheesy Nai Miris Koththu', description: 'A spicy and cheesy twist on the traditional koththu with Nai Miris.', price: 1750 },
    ],
  },
  {
    category: 'Fried Rice',
    backgroundImage: friedriceImage, 
    items: [
      { name: 'Vegetable Fried Rice', description: 'Fried rice with mixed vegetables, lightly seasoned with soy sauce.', price: 1150 },
      { name: 'Chicken Fried Rice', description: 'Stir-fried rice with chicken, eggs, and mixed vegetables.', price: 1550 },
      { name: 'Fish Fried Rice', description: 'Stir-fried rice with seasoned fish and vegetables.', price: 1650 },
      { name: 'Prawn Fried Rice', description: 'Rice stir-fried with prawns and a mix of vegetables.', price: 1300 },
      { name: 'Mutton Fried Rice', description: 'Flavorful rice stir-fried with tender mutton and vegetables.', price: 1800 },
    ],
  },
  {
    category: 'Egg Dishes',
    backgroundImage: eggImage, 
    items: [
      { name: 'Boiled Egg', price: 250 },
      { name: 'Egg Kiri Hodi', description: 'Eggs cooked in a creamy coconut milk gravy.', price: 850 },
      { name: 'Fried Eggs (2 eggs)', price: 500 },
      { name: 'Omelette (3 eggs)', description: 'A fluffy omelette made with onions, green chilies, and spices.', price: 350 },
    ],
  },
  {
    category: 'Breakfast',
    backgroundImage: breakfastImage,
    items: [
      { name: 'Egg Hoppers', description: 'Crispy bowl-shaped pancakes with an egg in the center.', price: 225 },
      { name: 'Plain Hoppers', description: 'Crispy bowl-shaped pancakes served with lunumiris and seeni sambol.', price: 200 },
      { name: 'Pol Rotti', description: 'Traditional flatbread made with grated coconut, served with sambol.', price: 350 },
      { name: 'Parata', description: 'Indian-style flatbread served with dhal curry and sambol.', price: 800 },
      { name: 'Egg Rotti', description: 'Stuffed rotti with a masala filling, served with sambol.', price: 695 },
    ],
},
{
    category: 'Curry',
    backgroundImage: curryImage, 
    items: [
      { name: 'Chicken Curry', description: 'Tender chicken cooked in a rich coconut-based curry.', price: 800 },
      { name: 'Fish Curry', description: 'Fresh fish cooked in a tangy and spicy coconut gravy.', price: 750 },
      { name: 'Mutton Curry', description: 'Slow-cooked mutton in a flavorful and aromatic curry.', price: 1200 },
      { name: 'Dhal Curry', description: 'Lentils cooked with coconut milk and spices.', price: 300 },
      { name: 'Pumpkin Curry', description: 'Sweet pumpkin cooked in a mild coconut milk curry.', price: 250 },
    ],
  },
  {
    category: 'Desserts',
    backgroundImage: dessertImage, 
    items: [
    { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.', price: 850 },
    { name: 'Fruit Salad', description: 'A refreshing mix of seasonal fruits topped with honey and nuts.', price: 500 },
    { name: 'Watalappam', description: 'Traditional Sri Lankan coconut and jaggery pudding with cashew nuts.', price: 600 },
    { name: 'Ice Cream Sundae', description: 'A rich sundae with layers of ice cream, syrup, and nuts.', price: 700 },
    { name: 'Mango Mousse', description: 'Creamy and smooth mango mousse, perfect for a tropical treat.', price: 650 },
    { name: 'Tiramisu', description: 'Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.', price: 950 },
    { name: 'Creme Brulee', description: 'Rich custard topped with a layer of crispy caramelized sugar.', price: 900 },
    { name: 'Brownie with Ice Cream', description: 'Fudgy chocolate brownie served with a scoop of vanilla ice cream.', price: 750 },
    { name: 'Cheesecake', description: 'New York-style cheesecake with a graham cracker crust and berry compote.', price: 1000 },
    { name: 'Banoffee Pie', description: 'A delightful pie made with bananas, cream, and toffee on a buttery crust.', price: 950 },
    { name: 'Panna Cotta', description: 'Italian creamy dessert topped with a berry sauce.', price: 850 },
    { name: 'Gulab Jamun', description: 'Soft dumplings soaked in rose-flavored sugar syrup, served warm.', price: 450 },
    ],
  },
  {
    category: 'Juice',
    backgroundImage: juiceImage,
    items: [
        { name: 'Orange Juice', description: 'Freshly squeezed orange juice.', price: 500 },
        { name: 'Mango Juice', description: 'A refreshing drink made from ripe mangoes.', price: 550 },
        { name: 'Pineapple Juice', description: 'Tropical pineapple juice with a hint of lime.', price: 525 },
        { name: 'Watermelon Juice', description: 'Hydrating watermelon juice with a touch of mint.', price: 500 },
        { name: 'Apple Juice', description: 'Crisp and sweet apple juice, freshly pressed.', price: 600 },
        { name: 'Carrot Juice', description: 'Fresh carrot juice with a hint of ginger.', price: 550 },
        { name: 'Mixed Fruit Juice', description: 'A delightful blend of seasonal fruits.', price: 575 },
        { name: 'Grape Juice', description: 'Sweet and tangy grape juice, freshly extracted.', price: 600 },
        { name: 'Lime Juice', description: 'Refreshing lime juice, perfect for a hot day.', price: 450 },
        { name: 'Passion Fruit Juice', description: 'Tangy passion fruit juice with a tropical twist.', price: 600 },
    ],
  },
  {
    category: 'Mojito',
    backgroundImage: mojitoImage,
    items: [
        { name: 'Classic Mojito', description: 'A refreshing cocktail with lime, mint, and soda.', price: 750 },
        { name: 'Strawberry Mojito', description: 'A fruity twist with strawberries, mint, and lime.', price: 800 },
        { name: 'Passion Fruit Mojito', description: 'An exotic mojito with passion fruit and fresh mint.', price: 850 },
        { name: 'Blueberry Mojito', description: 'A delicious mojito made with fresh blueberries, lime, and mint.', price: 850 },
        { name: 'Pineapple Mojito', description: 'A tropical blend of pineapple, lime, mint, and soda.', price: 850 },
        { name: 'Watermelon Mojito', description: 'A hydrating and refreshing watermelon mojito with lime and mint.', price: 800 },
        { name: 'Coconut Mojito', description: 'A tropical coconut twist with lime, mint, and soda.', price: 900 },
        { name: 'Ginger Mojito', description: 'A zesty mojito with ginger, lime, and fresh mint.', price: 850 },
    ],
  },
  {
    category: 'Special Offers',
    backgroundImage: specialOfferImage, 
    items: [
      { name: 'Family Combo 1', description: 'Includes 2 large biryanis, 1 mutton curry, 4 drinks, and dessert.', price: 4500 },
      { name: 'Couple’s Delight', description: 'A romantic meal for two with 2 biryanis, 2 juices, and a dessert.', price: 3000 },
      { name: 'Party Pack', description: '5 portions of koththu, 2 curries, and a large juice pitcher.', price: 6000 },
      { name: 'Breakfast Special', description: '4 egg hoppers, pol rotti, parata, and coffee for 2.', price: 2500 },
      { name: 'Kids Combo', description: '1 fried rice, 1 egg dish, and a juice, served with dessert.', price: 1800 },
    ],
  },
];

const Menu = () => {
  return (
    <div className="bg">
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Menu</h2>
      <Accordion defaultActiveKey="0">
        {menuData.map((category, categoryIndex) => (
          <Accordion.Item
            eventKey={String(categoryIndex)}
            key={categoryIndex}
            className="category-card"
            style={{
              backgroundImage: `url(${category.backgroundImage})`,
            }}
          >
            <Accordion.Header>
              <h5>{category.category}</h5>
            </Accordion.Header>
            <Accordion.Body>
              {category.items.map((item, itemIndex) => (
                <MenuItem key={itemIndex} {...item} />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div></div>
  );
};

const MenuItem = ({ name, description, price }) => (
  <div className="menu-item mb-3">
    <div className="item-content">
      <h5 className="item-name">{name}</h5>
      <h5 className="item-price">{price} LKR</h5>
    </div>
    {description && <p>{description}</p>}
  </div>
);

export default Menu;
