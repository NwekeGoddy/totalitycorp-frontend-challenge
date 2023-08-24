import React, {useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';


const Home = () => {

const {products} = useContext(ProductContext);

const filteredProducts = products.filter(item =>{
  return item.category === "men's clothing" ||  item.category === "women's clothing"
})

console.log(filteredProducts)
  return (


    <div>
      Home Page *****
    </div>
  )
}

export default Home;




