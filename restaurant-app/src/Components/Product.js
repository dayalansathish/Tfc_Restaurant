import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Product.css";

function Product() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Chicken Seekh Kabab",
      imageUrl: "/Images/dinner1.jpg",
      categories: "Dinner",
    },
    {
      id: 2,
      name: "Deluxe Cheese Pizza",
      imageUrl: "/Images/dinner2.jpg",
      categories: "Dinner",
    },
    {
      id: 3,
      name: "Veg Masala Maggi",
      imageUrl: "/Images/dinner3.jpg",
      categories: "Dinner",
    },
    {
      id: 4,
      name: "Vietnamese Spring Roll",
      imageUrl: "/Images/dinner4.jpg",
      categories: "Dinner",
    },
    {
      id: 5,
      name: "BBQ",
      imageUrl: "/Images/dinner5.jpg",
      categories: "Dinner",
    },
    {
      id: 7,
      name: "Lemon Mint Soda",
      imageUrl: "/Images/drink1.jpg",
      categories: "Drink",
    },
    {
      id: 8,
      name: "Orange Juice",
      imageUrl: "/Images/drink3.jpg",
      categories: "Drink",
    },
    {
      id: 9,
      name: "Apple Juice",
      imageUrl: "/Images/drink4.jpg",
      categories: "Drink",
    },
    {
      id: 10,
      name: "Carrot juice",
      imageUrl: "/Images/drink5.jpg",
      categories: "Drink",
    },
    {
      id: 11,
      name: "Berries Dessert",
      imageUrl: "/Images/dessert1.jpg",
      categories: "Dessert",
    },
    {
      id: 12,
      name: "Strawberry Cake",
      imageUrl: "/Images/dessert2.jpg",
      categories: "Dessert",
    },
    {
      id: 13,
      name: "Blueberries Dessert Cake",
      imageUrl: "/Images/dessert3.jpg",
      categories: "Dessert",
    },
    {
      id: 14,
      name: "Orange Cake",
      imageUrl: "/Images/dessert4.jpg",
      categories: "Dessert",
    },
    {
      id: 15,
      name: " Torte Dessert Cake",
      imageUrl: "/Images/dessert5.jpg",
      categories: "Dessert",
    },
    {
      id: 16,
      name: "Veg Pasta",
      imageUrl: "/Images/breakfast1.jpg",
      categories: "Breakfast",
    },
    {
      id: 17,
      name: "Idly & Sambar",
      imageUrl: "/Images/breakfast2.jpg",
      categories: "Breakfast",
    },
    {
      id: 18,
      name: "Chocolate Chip Cookies",
      imageUrl: "/Images/breakfast3.png",
      categories: "Breakfast",
    },
    {
      id: 19,
      name: "Chocolate Chip Cookies",
      imageUrl: "/Images/breakfast4.png",
      categories: "Breakfast",
    },
    {
      id: 20,
      name: "Chocolate Chip Cookies",
      imageUrl: "/Images/breakfast5.png",
      categories: "Breakfast",
    },
    {
      id: 21,
      name: "Fish Fry",
      imageUrl: "/Images/lunch4.jpg",
      categories: "Lunch",
    },
    {
      id: 22,
      name: "Butter Naan",
      imageUrl: "/Images/lunch5.jpg",
      categories: "Lunch",
    },
    {
      id: 23,
      name: "Veg Meals",
      imageUrl: "/Images/lunch1.png",
      categories: "Lunch",
    },
    {
      id: 24,
      name: "Chicken Biriyani",
      imageUrl: "/Images/lunch3.webp",
      categories: "Lunch",
    },
    {
      id: 25,
      name: "Veg Biriyani",
      imageUrl: "/Images/lunch2.png",
      categories: "Lunch",
    },
  ]);

  const [btn, setBtn] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const HandleClick = (filtertype) => {
    setBtn(filtertype);
    setShowAll(false);
  };

  const FilterProducts = products.filter((Product) => {
    if (btn === "All") {
      return true; // Show all products
    } else {
      return Product.categories === btn;
    }
  });

  const visibleProducts = showAll ? FilterProducts : FilterProducts.slice(0, 6);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className="container-fluid product-bg">
      <div className="container m-auto pt-5 text-center">
        <div>
          <h4 className="text-warning product-text">Random Dishes</h4>
          <h3 className="text-light">Our Special Meals </h3>
        </div>
        <div className="my-5">
          <div className="">
            <ul className="text-light d-flex justify-content-center">
              <li className="mx-2">
                <button
                  className="btn btn-sm btn-outline-warning fw-semibold product-btn"
                  onClick={() => HandleClick("All")}
                >
                  All
                </button>
              </li>
              <li className="mx-2">
                <button
                  className="btn btn-sm btn-outline-warning fw-semibold product-btn"
                  onClick={() => HandleClick("Drink")}
                >
                  Drink
                </button>
              </li>
              <li className="mx-2">
                <button
                  className="btn btn-sm btn-outline-warning fw-semibold product-btn"
                  onClick={() => HandleClick("Dessert")}
                >
                  Dessert
                </button>
              </li>
              <li className="mx-2">
                <button
                  className="btn btn-sm btn-outline-warning fw-semibold product-btn"
                  onClick={() => HandleClick("Breakfast")}
                >
                  Breakfast
                </button>
              </li>
              <li className="mx-2">
                <button
                  className="btn btn-sm btn-outline-warning fw-semibold product-btn"
                  onClick={() => HandleClick("Lunch")}
                >
                  Lunch
                </button>
              </li>
              <li className="mx-2">
                <button
                  className="btn btn-sm btn-outline-warning fw-semibold product-btn"
                  onClick={() => HandleClick("Dinner")}
                >
                  Dinner
                </button>
              </li>
            </ul>
          </div>
          <hr className="text-warning"/>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row py-3">
          {visibleProducts.map((product) => {
            return (
              <div key={product.id} className="col-4 my-3">
                <div className="parent-div ratio ratio-16x9">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="rounded"
                  />
                  <div className="child-div">
                    <p className="lead fw-semibold">{product.name}</p>
                    <button className="btn btn-outline-warning">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {btn === "All" && !showAll &&(
          <div className="text-center">
            <button
              className="btn btn-sm btn-warning fw-semibold"
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
