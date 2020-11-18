import React, { Component } from "react";
import SHOP_DATA from "./shopdata";
 import CollectionPreview from "../components/Collection/collection-preview";

export default class ShopPage extends Component {
  constructor(props) {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
      const {collections}= this.state;  
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
