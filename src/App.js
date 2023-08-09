import './App.css';
import React from 'react' ;

import Products from './Components/Products'

const App= ()  => {

  const products  = [

        {  
          id : 'p1',
          title : 'nirma ',
          amount : 100 ,
          date : new Date (2021 ,8 , 10 )
        }
       ,
       {  
        id : 'p2',
        title : 'surf excel ',
        amount : 200 ,
        date : new Date (2021 , 2,2 )
      },
      {  
        id : 'p3',
        title : 'tide ',
        amount : 130 ,
        date : new Date (2021 , 12, 28 )
      },
      {  
        id : 'p4',
        title : 'ghadi',
        amount : 75 ,
        date : new Date (2021 , 5,  6 )
      },
     
  ] ;
  return (
    <div> 
      <Products items = { products } />
    </div>
  );
}



export default App;

