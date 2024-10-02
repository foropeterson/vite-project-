import React from "react";

import Row from "react-bootstrap/Row";
import { data } from "../../../data";

import Product from "../Product/Product";

import styles from "./Shop.module.scss";

const Shop = () => {
  return (
    <div className="row-wrapper">
      
        {data.map((product) => (
          <Product key={product.id} {...product} />
        ))}
     
    </div>
  );
};

export default Shop;
