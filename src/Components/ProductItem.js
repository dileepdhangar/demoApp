import React from 'react';
import './ProductItem.css';
import ItemDate from './ItemDate';
import Card from './Card';


const ProductItem = (props) => {


    const title = props.title;

    return (
        <Card className='product-item'>
            <ItemDate date={props.date} />
            <div className='product-item__description'>
                <h2> {title}</h2>
            </div>

        </Card>
    );


}

export default ProductItem;