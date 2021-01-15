
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'


import CollectionOverview from '../components/CollectionOverview/collection-overview';
import CollectionPage from './collection-component'

import { firestore, convertShopCollectionsToObjection } from '../Firebase/Firebase.utils';
import { updateShopCollections } from '../Redux/shop/shop.actions'






class ShopPage extends Component {

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("shopCollections");

    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
      const collectionsObject = convertShopCollectionsToObjection(snapshot)
      
      updateCollections (collectionsObject);
      console.log(collectionsObject);
    });

  }





  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )

  }
};


const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionsObject => dispatch(updateShopCollections(collectionsObject))
})

export default connect(null,mapDispatchToProps)(ShopPage);

 