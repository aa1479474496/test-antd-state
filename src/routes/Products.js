import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';


const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default connect(({ products }) => ({
//   products,
// }))(Products);

export default connect(products => (products))(Products);


// const Products = props => (
//   <h2>List of Products</h2>
// );

// const Products = props =>
//   <h2>List of Products Test123</h2>;

// const Products = props => {
//   return (<h2>List of Products Test123</h2>;)
// }


// export default Products;
