import React from 'react';
import { connect } from 'dva';

const Li = ({ item }) => {
  return (
    <li>
      <span>{item.name}</span>
      <span>{item.id}</span>
    </li>
  );
};


const Items = ({ products }) => {
  return (
    <ul>
      {
        products.map(item => (
          <Li key={item.id} item={item} />
        ))
      }
    </ul>
  );
};
export default connect(({ products }) => ({
  products,
}))(Items);
