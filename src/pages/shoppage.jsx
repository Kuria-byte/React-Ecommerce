
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'


import CollectionOverview from '../components/CollectionOverview/collection-overview';
import CollectionPage from './collection-component'
import WithSpinner from '../components/With-spinner/with-spinner'

import { fetchCollectionStartAsync } from '../Redux/shop/shop.actions'
import { selectIsCollectionFetching } from '../Redux/shop/shop.selector'


const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);



class ShopPage extends Component {



  componentDidMount() {

    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();

  }


  render() {
    const { match, isCollectionFetching } = this.props;


    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={props => (<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />)} />
        <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />)} />

      </div>
    )

  }
};


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

