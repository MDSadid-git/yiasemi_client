import React from "react";

const FoodCard = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-5 mx-auto">
      {items &&
        items.map((items) => (
          <div className="container mx-4 my-4">
            <div className="w-64 border">
              <img src={items.image} className="w-full" alt="..." />
              <div className="p-4">
                <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                  {items.name}
                </h5>
                <p>{items.recipe}</p>
                <a
                  href="#"
                  className="bg-brand hover:bg-brand2 duration-300 text-white px-4 py-2 inline-block mt-4 rounded"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FoodCard;
