import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../store/reducers/productreducer";
import { asynproductapi } from "../store/actions/productionAction";

const Product = () => {
  //----------------------------------------------------------------

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getproducts());
    dispatch(asynproductapi());
  }, []);

  // -----------------------------------------------------------
  const { products } = useSelector((state) => state.productdata);
  console.log(products);

  return (
    <div className="w-[80vw] h-auto px-[5vw]  py-[5vh] m-auto text-[2vw] text-white bg-red-400 text-left ">
      Calling product through Redux using axios
      <div className="count">
        <ul className="text-[3vh] list-decimal ">
          {products.map((value, index) => (
            <li
              key={value.id}
              className=" text-black text-2xl font-semibold mt-[5vh]"
            >
              {value.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
