import React, { memo } from 'react';

import './cart-item.styles.scss';

const CartItem = ({ imageUrl, name, price, quantity }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x &#8358;{price}</span>
    </div>
  </div>
);

export default memo(CartItem);