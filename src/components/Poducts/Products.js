import React, {useContext} from 'react';
import Product from "./Product/Product";
import {ProductContext} from "../../App";
import s from './Products.module.scss'

const Products = props => {
    const product = useContext(ProductContext);

    return (
        <div className={s.items__wrap}>
            {product.map((item, index) => {
                return <Product key={index} product={item}/>
            })}

        </div>

    )
};

export default Products;