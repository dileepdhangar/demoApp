import './Products.css';
import React from 'react' ;
import Card from './Card';
import ProductItem from './ProductItem';


const  Products = (props) =>  {

  return (
    <Card className="products">

      <ProductItem
        title={props.item[0].title}
        date={props.item[0].date}
        amount={props.item[0].amount}
      />
      <ProductItem
        title={props.item[1].title}
        date={props.item[1].date}
        amount={props.item[1].amount}
      />
      <ProductItem
        title={props.item[2].title}
        date={props.item[2].date}
        amount={props.item[2].amount}
      />

    </Card>
  );
}

export default Products;

