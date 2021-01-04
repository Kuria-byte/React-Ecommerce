import React from "react";
import '../CollectionItem/collection-item.scss';

import {connect} from 'react-redux';
import {addCartItems} from '../../Redux/cart/cart.action';

import CustomButton from '../CustomButton/CustomButton'



const CollectionItem = ({ item, addCartItems }) => {

  const{name, price, imageUrl}= item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={()=> addCartItems(item)} inverted> ADD TO CART</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch)=>({
 addCartItems : item => dispatch(addCartItems(item))
})

export default connect (null,mapDispatchToProps) (CollectionItem);
