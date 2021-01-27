import React, {useState} from 'react';
import s from './Product.module.scss';
import venera from './../../../assets/img/venera.jpg';
import likeActive from './../../../assets/img/like-active.png';
import likeDefault from './../../../assets/img/like-default.png';

const Product = props =>{
    const [like, setLike] = useState(props.product.like);

    let likeIcon;

    if(like){
        likeIcon = likeActive
    } else {
        likeIcon = likeDefault
    }

    function priceWithSpaces(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    return (
        <div className={s.item__wrap}>
            <div className={s.item__head}>
                <img className={s.item__img} src={props.product.url} alt=""/>
                <img onClick={() => setLike(!like)}  className={s.like} src={likeIcon} alt=""/>
            </div>

            <div className="item__content">
                <h2>{props.product.title}</h2>
                <p>{props.product.description}</p>
                <span>{priceWithSpaces(props.product.price) +" тенге"}</span>
            </div>

            <div className={s.item__btn}>
                <button>Add to Cart</button>
            </div>
        </div>
    )
};

export default Product;