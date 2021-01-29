
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'


import CollectionOverview from '../components/CollectionOverview/collection-overview';
import CollectionPage from './collection-component'
import WithSpinner from '../components/With-spinner/with-spinner'

import { fetchCollectionStart } from '../Redux/shop/shop.actions'
import { selectIsCollectionFetching,selectCollectionsLoaded } from '../Redux/shop/shop.selector'


const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);



class ShopPage extends Component {

  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }


  render() {
    const { match, isCollectionFetching,iscollectionLoaded } = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={props => (<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />)} />
        <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={!iscollectionLoaded} {...props} />)} />

      </div>
    )
  }
};


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  iscollectionLoaded : selectCollectionsLoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

