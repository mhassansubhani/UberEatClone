import React, { useState } from "react";
import { data } from "../data/data";
function Food() {
  //   console.log(data);

  const [foods, setFoods] = useState(data);
  const [check, setCheck] = useState(0);
  

 

  const[fp,setFp]=useState(0);
  const FilterPrice = (price,type) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
    
    setCheck(1);
    setFp(type);
    
  };
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
    setFp(0);
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        {" "}
        Top Rated Menu Item
      </h1>
      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}

        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between ">
            <button
              onClick={() => {setFoods(data);setFp(0);}}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              {" "}
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">filter price</p>
          <div className=" flex justify-between w-[490px]">
            <button
              onClick={() => FilterPrice("$","1")}
              className={
                
                check === 1 &&fp==="1"
                  ? `border-orange-600 text-white bg-orange-600 m-1`
                  : `border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1`
              }
            >
              $
            </button>
            <button
               onClick={() => FilterPrice("$$","2")}
               className={
                 
                 check === 1 &&fp==="2"
                   ? `border-orange-600 text-white bg-orange-600 m-1`
                   : `border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1`
               }
            >
              $$
            </button>
            <button
              onClick={() => FilterPrice("$$$","3")}
              className={
                
                check === 1 &&fp==="3"
                  ? `border-orange-600 text-white bg-orange-600 m-1`
                  : `border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1`
              }
            >
              $$$
            </button>
            <button
              onClick={() => FilterPrice("$$$$","4")}
              className={
                
                check === 1 &&fp==="4"
                  ? `border-orange-600 text-white bg-orange-600 m-1`
                  : `border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1`
              }
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* display food  */}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-4 border shadow-lg">
        {foods.map((item, index) => (
          <div key={index} className="shadow-lg hover:scale-105 rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="h-[200px] object-cover w-full rounded-lg"
            />
            <div className="flex justify-between mt-4 px-2 py-2">
              <p className="text-xl font-semibold ">{item.name} </p>
              <p>
                {" "}
                <span className="bg-orange-500 rounded-full p-1.5 text-white">
                  {" "}
                  {item.price}
                </span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
}

export default Food;
