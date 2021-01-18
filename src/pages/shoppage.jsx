
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'


import CollectionOverview from '../components/CollectionOverview/collection-overview';
import CollectionPage from './collection-component'
import WithSpinner from '../components/With-spinner/with-spinner'

import { firestore, convertShopCollectionsToObjection } from '../Firebase/Firebase.utils';
import { updateShopCollections } from '../Redux/shop/shop.actions'


const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);



class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }


  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("shopCollections");

      collectionRef.get().then(snapshot => {
      const collectionsObject = convertShopCollectionsToObjection(snapshot);

      updateCollections(collectionsObject);
      this.setState({ loading: false });
      }
    
    );
  }


  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={props => (<CollectionsOverviewWithSpinner isLoading={loading} {...props} />)} />
        <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={loading} {...props} />)} />

      </div>
    )

  }
};


const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionsObject => dispatch(updateShopCollections(collectionsObject))
})

export default connect(null, mapDispatchToProps)(ShopPage);

